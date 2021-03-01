import axios from 'axios';

const LoginService = data => (
	axios.post('/registration/login', data)
		.then(res => res.status)
)

export default LoginService;

