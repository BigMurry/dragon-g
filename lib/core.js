const {
  BODY_PARTS,
  DRAGON_TYPES,
  GENE_VA,
  DOMINANTS,
  RECESSIVES,
  COOL_SCORE,
  SKILLS_FACTOR
} = require('./constants');

// 40 gene slot: 4 x 10
// every slot: 7 codes
function parse (_codes) {
  const allCodes = [];
  const dominants = [];
  const composed = _codes.reduce((ret, c, idx) => {
    let code = `0000${c}`;
    if (idx < 3) {
      code = code.substring(code.length - 77);
    } else if (idx === 3) {
      code = code.substring(code.length - 49);
    }
    ret += code;
    return ret;
  }, '');
  for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 4; ++j) {
      const indexStart = (i * 4 + j) * 7;
      const bodyIdx = i;
      const dragonTypeIdx = parseInt(composed.substring(indexStart, indexStart + 2), 10);
      const geneVariatyIdx = parseInt(composed.substring(indexStart + 2, indexStart + 4), 10);
      const geneLevel = parseInt(composed.substring(indexStart + 4, indexStart + 6), 10);
      const isDominant = parseInt(composed.substring(indexStart + 6, indexStart + 7), 10) === 1;
      const item = {
        bodyPart: BODY_PARTS[bodyIdx],
        dragonType: DRAGON_TYPES[dragonTypeIdx],
        geneVariaty: GENE_VA[dragonTypeIdx][geneVariatyIdx],
        label: `${isDominant ? DOMINANTS[geneVariatyIdx] + geneLevel : RECESSIVES[geneVariatyIdx] + geneLevel}`,
        dragonTypeIdx,
        geneVariatyIdx,
        bodyIdx,
        geneLevel,
        isDominant
      };
      allCodes.push(item);
      if (j === 0) {
        dominants[i] = item;
      }
      if (j === 1 && isDominant && !dominants[i].isDominant) {
        dominants[i] = item;
      }
    }
  }
  return {
    allCodes,
    dominants
  };
}

function dominantSlot (genes = []) {
  const [gene0, gene1] = genes;
  if (gene1.isDominant && !gene0.isDominant) {
    return 1;
  }
  return 0;
}

function getCoolnessScore (parsedGene) {
  const {allCodes} = parsedGene;
  const score = allCodes.reduce((score, {geneVariatyIdx, geneLevel, isDominant}) => {
    const coefficent = isDominant ? 1 : 0.7;
    score += COOL_SCORE[geneVariatyIdx] * geneLevel * coefficent;
    return score;
  }, 0);
  return Math.floor(score * 100);
}

function getSkills (dominants) {
  return dominants.reduce((ret, item) => {
    for (let i = 0; i < 5; ++i) {
      ret[i] += (
        SKILLS_FACTOR.BODY_PART[i][item.bodyIdx] *
        SKILLS_FACTOR.DRAGON_TYPE[i][item.dragonTypeIdx] *
        SKILLS_FACTOR.GENE_VA[i][item.geneVariatyIdx] *
        item.geneLevel
      );
    }
    return ret;
  }, [0, 0, 0, 0, 0]);
}

function getDS ([attack, defence, stamina, speed, intelligence]) {
  return Math.floor((attack * 69 + defence * 217 + stamina * 232 + speed * 114 + intelligence * 151) / 100);
}

module.exports = {
  parse,
  getCoolnessScore,
  getDS,
  getSkills,
  dominantSlot
};
