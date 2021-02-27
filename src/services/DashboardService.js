import axios from 'axios';

export const DashboardMentor = data => (
	axios.get(`http://localhost:4000/dashboard/mentor?id=${data}`)
)


export const DashboardMentee = data => (
	axios.get(`http://localhost:4000/dashboard/mentee?id=${data}`)
)

