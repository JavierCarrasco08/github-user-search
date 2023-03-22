export default async function getUsers(nameId) {
  return await fetch(`https://api.github.com/users/${nameId}`);
}
