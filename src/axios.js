import axios from 'axios';

const instance = axios.create({
    //need to change it.. so far localhost
    baseURL: 'http://localhost:8080/jdAnalyze'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;