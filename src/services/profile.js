import request from "superagent";

export async function postProfile({ score, bio}) {
  const response = await request.post(`${process.env.PROD_URL}/profiles`).withCredentials()
  .send({ score, bio })
  return response.body; 
}

export async function getAllProfiles() {
  const response = await request.get(`${process.env.PROD_URL}/profiles`)
  return response.body; 
}

export async function getProfileById(id) {
  const response = await request.get(`${process.env.PROD_URL}/profiles/${id}`)
  return response.body;
}

export async function deleteProfile(id) {
  const response = await request.delete(`${process.env.PROD_URL}/profiles/${id}`)
  return response.body;
}

export async function editsProfile({score, bio}) {
  const response = await request.patch(`${process.env.PROD_URL}/profiles`)
  .send({ score, bio }).withCredentials()
  return response.body;
}
