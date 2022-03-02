import request from "superagent"

//sign up
export async function signUp(username, password) {
    const response = await request
      .post(`${process.env.PROD_URL}/users/signup`)
      .send({ username, password });
    return response.body;
  }

  //login
  export async function logIn(username, password) {
    const response = await request
      .post(`${process.env.PROD_URL}/users/sessions`)
      .send({ username, password });

    console.log('RESPONSE', response.body)
    return response.body;
  }
//log out
export async function signOut(){
   const response = await request
   .delete(`${process.env.PROD_URL}/users/sessions`)
return response.body;
}
