import axios from 'axios';

const LoginService = data => (
	axios.post('http://localhost:5000/registration/login', data)
		.then(res => res.status)
)

export default LoginService;

