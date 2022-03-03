import request from "superagent";

export async function postUserSong(notesArray){
  const response = await request.post(`${process.env.PROD_URL}/usersongs`).send({ notes: JSON.stringify(notesArray)});

  return response.body;
}


export async function getAllUserSongs() {
  const response = await request.get(`${process.env.PROD_URL}/usersongs`)

  return response.body.map((song) => JSON.parse(song));
}

export async function getUserSongsById(id) {
  const response = await request.get(`${process.env.PROD_URL}/usersongs/${id}`)

  return response.body;
}

export async function deleteUserSongs(id) {
  const response = await request.delete(`${process.env.PROD_URL}/usersongs/${id}`)

  return response.body;
}
