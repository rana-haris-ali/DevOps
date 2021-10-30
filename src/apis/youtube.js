import axios from 'axios';

const KEY = 'AIzaSyAfqXO-sXTHs0zn6Ne_TIlmVICQ6MYDYaE';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});