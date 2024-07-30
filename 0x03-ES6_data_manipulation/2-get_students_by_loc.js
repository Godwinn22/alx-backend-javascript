export default function getListStudentIds(arg, city) {
  const idArr = arg.filter((val) => val.location === city);
  return idArr;
}

// if (!Array.isArray(arg)) {
//     return [];
//   }
