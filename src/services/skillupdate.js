import axios from 'axios';

export const UpdateSkill = data => (
	axios.post('http://localhost:4000/updateskill', data)
		.then(res => res.status)
)

export const GetSkills = data => {
    return axios.get("http://localhost:4000/skills")
}

