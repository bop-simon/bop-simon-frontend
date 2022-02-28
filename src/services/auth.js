//create a client
export const client = async () => {
const res = await fetch('https://bop-simon.herokuapp.com/api/v1/users/sessions')
const clients = await res.json();
return clients
}

//get the client
export function getClient() {
    return client.auth.session()
}

//sign up the user
export async function signUp(email, password){
    const { user } = await client.auth.signUp({
        email, password
    })
    return user;
}

//sign in the user
export async function signIn(email, password){
    const { user } = await client.auth.signIn({
        email, password
    })
    return user
}
//sign out the user
export async function signOut(){
    return client.auth.signOut();
}