import axios from 'axios';

export const UpdateSkill = data => (
	axios.post('http://localhost:5000/updateskill', data)
		.then(res => res.status)
)

export const GetSkills = data => {
    return axios.get("http://localhost:5000/skills")
}

