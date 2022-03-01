import { client, parseData } from './client';


//create songs
export async function createUser({ userId, notes }) {
    const request = await client
      .from('usersongs')
      .insert({ user_id: userId, notes });
    return parseData(request);
  }

//get songs by id
export async function getSongById(id) {
    const request = await client.from('usersongs').select().match({ id }).single();
    return parseData(request);
}

//delete user by id
export async function deleteSongById(id) {
    const request = await client.from('usersongs').delete().match({ id });
    return parseData(request);
  }