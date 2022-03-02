import request from "superagent";


export async function getAllUserSongs() {
  const response = await request.get(`${process.env.PROD_URL}/usersongs`)

  return response.body; 
}

export async function getUserSongsById(id) {
  const response = await request.get(`${process.env.PROD_URL}/usersongs/${id}`)

  return response.body;
}

export async function deleteUserSongs(id) {
  const response = await request.delete(`${process.env.PROD_URL}/usersongs/${id}`)

  return response.body;
}
