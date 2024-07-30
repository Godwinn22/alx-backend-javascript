export default function getStudentIdsSum(arg) {
  const idArr = arg.reduce((val, curVal) => val.id || val + curVal.id, 0);
  return idArr;
}
