//Prod - https://bop-simon-prod.herokuapp.com/
//Main - https://bop-simon.herokuapp.com/
//create client
export const client = async () => {
    const res = await fetch('https://bop-simon-prod.herokuapp.com/api/v1/users/sessions')
    const clients = await res.json();
    return clients
    }

//export const client = createClient(
//process.env.HEROKU_URL,
//process.env.HEROKU_KEY
//);

export const parseData = ({ data, error }) => {
    if (error) throw error;
    return data;
      };