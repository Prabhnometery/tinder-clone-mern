import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://tinder-node-clone-backend.herokuapp.com/'
})

export default instance;
