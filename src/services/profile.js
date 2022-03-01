import { client, parseData } from './client';

//CRUD from backend for Profile
//create a profile
export async function createProfile({ userId, score, bio }) {
    const request = await client
      .from('profiles')
      .insert({ user_id: userId, score, bio });
    return parseData(request);
  }
//get all profile
export async function getsProfile() {
  const request = await client
    .from('profiles')
    .select()
    .order('created_at', { ascending: false });
  return parseData(request);
}
//get profile by id
export async function getProfileById(id) {
  const request = await client.from('profiles').select().match({ id }).single();
  return parseData(request);
}
//update profile by id
export async function updateUserById(id, { score, bio }) {
  const request = await client
    .from('profiles')
    .update({ score, bio })
    .match({ id });
  return parseData(request);
}

//delete profile by id
export async function deleteUserById(id) {
  const request = await client.from('profiles').delete().match({ id });
  return parseData(request);
}