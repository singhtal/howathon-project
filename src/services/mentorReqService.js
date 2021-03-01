import axios from 'axios';

const requestMentor = data => {
    console.log(data);
    return axios.get(`/relation/requestMentor?mentor=${data.mentor}&mentee=${data.mentee}&skillName=${data.skillName}&skillCode=${data.skillCode}`)
        .then(res => res.status);
}

export default requestMentor;