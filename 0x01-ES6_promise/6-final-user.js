import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((res) => {
    for (const r of res) {
      return {
        status: r.status,
        value: r.status === 'fulfilled' ? r.value : String(r.reason),
      };
    }
    return res;
  });
}
