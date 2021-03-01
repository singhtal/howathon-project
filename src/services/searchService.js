import axios from 'axios';

const searchService = data => {
	return axios.get(`/mentor/getskills?data=${data.skillName}&name=${data.name}`)
}


export default searchService;

