import request from "superagent";

export async function postUserSong(notesArray){
  const response = await request.post(`${process.env.PROD_URL}/usersongs`).send({ notes: JSON.stringify(notesArray)}).withCredentials();
  return response.body;
}

export async function getAllUserSongs() {
  const response = await request.get(`${process.env.PROD_URL}/usersongs`).withCredentials();
  return response.body.map((song) => { return {id: song.id, notes: JSON.parse(song.notes)}});
}

export async function deleteUserSongs(id) {
  const response = await request.delete(`${process.env.PROD_URL}/usersongs/${id}`)
  return response.body;
}
