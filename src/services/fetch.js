//Prod - https://bop-simon-prod.herokuapp.com/
//Main - https://bop-simon.herokuapp.com/
//fetch All
export const fetchAllUsers = async () => {
    const res = await fetch('https://bop-simon.herokuapp.com/api/v1/users');
    const users = await res.json();
    return users
}

//fetch by Id
export const fetchUserById = async(id) => {
    const res = await fetch(`https://bop-simon.herokuapp.com/api/v1/users/${id}`); 
    const userId = await res.json();
    return userId
}

//fetch by score
export const fetchHighScores = async(id) => {
    const res = await fetch(`https://bop-simon.herokuapp.com/api/v1/users/${leaderboard}`); 
    const userId = await res.json();
    return userId
}