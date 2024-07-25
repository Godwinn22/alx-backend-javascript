// export default function signUpUser(firstName, lastName) {
//     return Promise.resolve({
//         firstName: firstName,
//         lastName: lastName,
//     });
// }

// or

export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => resolve({
    firstName,
    lastName,
  }));
}
