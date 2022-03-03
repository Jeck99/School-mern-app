const BASIC_API =process.env.NODE_ENV ==='production'?
'https://school-mern.herokuapp.com' : 'http://localhost:4002';

export const getStudents = () => {
    return fetch(`${BASIC_API}/students`)
        .then(res => res.json());
}
