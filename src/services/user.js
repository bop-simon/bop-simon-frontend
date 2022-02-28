//Prod - https://bop-simon-prod.herokuapp.com/
//Main - https://bop-simon.herokuapp.com/


//fetch All
export const getAllUsers = async () => {
    const res = await fetch('https://bop-simon.herokuapp.com/');
    const users = await res.json();
    return users
}

//fetch by Id
export const getUsersById = async(id) => {
    const res = await fetch(`https://bop-simon.herokuapp.com/${id}`); 
    const userId = await res.json();
    return userId

}