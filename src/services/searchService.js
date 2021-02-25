import axios from 'axios';

const searchService = data => {
	return axios.get(`http://localhost:4000/mentor/getskills?data=${data.skillName}&name=${data.name}`)
}


export default searchService;

