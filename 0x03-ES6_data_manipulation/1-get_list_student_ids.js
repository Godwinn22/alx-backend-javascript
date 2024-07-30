export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  }
  const idArr = arg.map((val) => val.id);
  return idArr;
}
