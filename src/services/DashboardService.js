import axios from 'axios';

export const DashboardMentor = data => (
	axios.get(`/dashboard/mentor?id=${data}`)
)


export const DashboardMentee = data => (
	axios.get(`/dashboard/mentee?id=${data}`)
)



export const DashboardProfile = data => (
	axios.get(`/dashboard/profile?id=${data}`)
)

