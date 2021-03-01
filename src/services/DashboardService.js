import axios from 'axios';

export const DashboardMentor = data => (
	axios.get(`http://localhost:5000/dashboard/mentor?id=${data}`)
)


export const DashboardMentee = data => (
	axios.get(`http://localhost:5000/dashboard/mentee?id=${data}`)
)



export const DashboardProfile = data => (
	axios.get(`http://localhost:5000/dashboard/profile?id=${data}`)
)

