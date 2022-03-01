//Prod - https://bop-simon-prod.herokuapp.com/
//Main - https://bop-simon.herokuapp.com/

import request from "superagent"

//sign up
export async function signUp(username, password) {
    const response = await request 
      .post(`${process.env.PROD_URL}/users/sessions`)
      .send({ username, password });
    return response.body;
  }
  
  //login
  export async function logIn(username, password) {
    const response = await request 
      .post(`${process.env.PROD_URL}/users/sessions`)
      .send({ 'username': username, 'password': password });
    return response.body;
  }
//log out
export async function signOut(){
   const response = await request 
   .delete(`${process.env.PROD_URL}/users/sessions`)
return response.body;
}