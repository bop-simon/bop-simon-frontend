import { client, parseData } from './client';

//create a user
export async function createUser({ userId, username, password }) {
    const request = await client
      .from('users')
      .insert({ user_id: userId, username, password });
    return parseData(request);
  }
//get all users
export async function getsUsers() {
  const request = await client
    .from('users')
    .select()
    .order('created_at', { ascending: false });
  return parseData(request);
}
//get user by id
export async function getUserById(id) {
  const request = await client.from('users').select().match({ id }).single();
  return parseData(request);
}
//update user by id
export async function updateUserById(id, { username, password }) {
  const request = await client
    .from('users')
    .update({ username, password })
    .match({ id });
  return parseData(request);
}

//delete user by id
export async function deleteUserById(id) {
  const request = await client.from('users').delete().match({ id });
  return parseData(request);
}
