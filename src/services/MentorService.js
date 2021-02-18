import axios from 'axios';

const MentorService = data => (
	axios.post('http://localhost:4000/register/mentor', data)
		.then(res => res.status)
)

export default MentorService;

