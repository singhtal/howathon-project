import axios from 'axios';

const updateRequest = data => {
    console.log(data);
    return axios.get(`/relation/updateRequest?mentor=${data.mentor}&mentee=${data.mentee}&status=${data.status}&skillCode=${data.skillCode}`)
        .then(res => res.status);
}

export default updateRequest;