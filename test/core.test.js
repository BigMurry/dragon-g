const test = require('tap').test;
const {parse, getCoolnessScore, getSkills, getDS} = require('..');

test('parse', t => {
  t.plan(5);

  // id = 100
  const genes = [
    '30110003010000301000030100002011000201000020100002010000701100070100007010',
    '70100004011000401000040100004010000201100020100002010000201000020110002010',
    '20100002010000101100010100001010000101000010110001010000101000010100002011',
    '2010000201000020100001011000101000010100001010'
  ];
  const parsed = parse(genes);
  const expectedCool = 3844;
  const expectedSkills = [650, 800, 1125, 600, 700];
  const expectedDs = 6535;

  const cools = getCoolnessScore(parsed);
  const skills = getSkills(parsed.dominants);
  const ds = getDS(skills);

  t.equal(40, parsed.allCodes.length);
  t.equal(10, parsed.dominants.length);
  t.equal(cools, expectedCool);
  t.strictSame(skills, expectedSkills);
  t.equal(ds, expectedDs);
});
