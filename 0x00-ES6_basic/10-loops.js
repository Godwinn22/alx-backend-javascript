export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const eachValue of array) {
    newArray.push(`${appendString}${eachValue}`);
  }
  return newArray;
}
