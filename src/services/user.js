import request from "superagent";

export async function postUser(id) {
  const response = await request.post(`${process.env.PROD_URL}/users/${id}`)
  .send(users)

  return response.body; 
}

export async function getAllUsers() {
  const response = await request.get(`${process.env.PROD_URL}/users`)

  return response.body; 
}

export async function getUserById(id) {
  const response = await request.get(`${process.env.PROD_URL}/users/${id}`)

  return response.body;
}

export async function deleteUser(id) {
  const response = await request.delete(`${process.env.PROD_URL}/users/${id}`)

  return response.body;
}

export async function editsUser(id, password) {
  const response = await request.put(`${process.env.PROD_URL}/users/${id}`)
  .send(password)
  return response.body;
}

export async function getByHighScore(){
  const response = await request.get(`${process.env.PROD_URL}/users/leaderboard`)
  return response.body
}

