const BASIC_API = process.env.NODE_ENV === 'production' ?
    'https://school-mern.herokuapp.com/auth' : 'http://localhost:4002/auth';

export const registerNewUser = async (user) => {
    return await fetch(`${BASIC_API}/register`, {
        method: 'POST', body: JSON.stringify({ user }), headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(res => res.json());
}
export const loginUser = async (user) => {
    return await fetch(`${BASIC_API}/login`, { 
        method: 'POST', body: JSON.stringify({ user }), headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(res => res.json());
}