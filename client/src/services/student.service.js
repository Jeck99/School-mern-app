const BASIC_API = 'http://localhost:4002';

export const getStudents = () => {
    return fetch(`${BASIC_API}/students`)
        .then(res => res.json());
}
