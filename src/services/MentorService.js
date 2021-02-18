import axios from 'axios';

const MentorService = data => (
	axios.post('http://localhost:4000/mentor/mydata', data)
		.then(res => res.status)

    axios.get('http://localhost:4000/mentor/mydata')
      .then( (response) => {
        console.log("response", response);
        this.setState({
          fetchUser: response.data
        });
        console.log("fetchUser", this.state.fetchUser);
      })
      .catch( (error) => {
        console.log(error);
    }); 
)

export default MentorService;

