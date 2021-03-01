import axios from 'axios';

const requestMentor = data => {
    console.log(data);
    return axios.get(`http://localhost:5000/relation/requestMentor?mentor=${data.mentor}&mentee=${data.mentee}&skillName=${data.skillName}&skillCode=${data.skillCode}`)
        .then(res => res.status);
}

export default requestMentor;