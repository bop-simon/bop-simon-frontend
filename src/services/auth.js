import { client } from './client';

//get the client
export function getClient() {
    return client.auth.session()
}

//sign up the user
export async function signUp(username, password){
    const { user } = await client.auth.signUp({
        username, password
    })
    return user;
}

//sign in the user
export async function signIn(username, password){
    const { user } = await client.auth.signIn({
        username, password
    })
    return user
}
//sign out the user
export async function signOut(){
    return client.auth.signOut();
}
