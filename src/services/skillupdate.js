import axios from 'axios';

export const UpdateSkill = data => (
	axios.post('/updateskill', data)
		.then(res => res.status)
)

export const GetSkills = data => {
    return axios.get("/skills")
}

