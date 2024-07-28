export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const eachEmp of reportWithIterator) {
    employees.push(eachEmp);
  }

  return employees.join(' | ');
}
