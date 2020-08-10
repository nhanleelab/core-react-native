import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const setToken = async (token = '') => {
    console.log('TOKEN', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await AsyncStorage.setItem('access_token', `Bearer ${token}`);
};

export const clearToken = async () => {
    axios.defaults.headers.common['Authorization'] = '';
    await AsyncStorage.removeItem('access_token');
    // ONLY WHEN SINGLE SCHOOL
};


const requestAbordCode = 'ECONNABORTED';


axios.defaults.baseURL = "";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000;


const RequestClient = class {
    constructor() {
        this.init();
    }

    async init() {
        axios.defaults.headers.common['Authorization'] = await AsyncStorage.getItem('access_token');
    }
    async headers(params: any) {
        let keys = Object.keys(params);
        keys.map((key) => {
            axios.defaults.headers.common[key] = params[key];
        });

    }
    async get(endpoint: string, params = {}) {
        try {

            const response = await axios.get(endpoint, params);

            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(endpoint: string, body: {}, params = {}) {
        try {
            console.log('POST:', `${axios.defaults.baseURL}${endpoint}`, body, params);
            const response = await axios.post(endpoint, body, params);
            console.log('RESPONSE', response.data);

            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    async put(endpoint: string, body: {}, params = {}) {
        try {
            console.log('PUT:', `${axios.defaults.baseURL}${endpoint}`, body, params);
            const response = await axios.put(endpoint, body, params);
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    async delete(endpoint: string, body: any) {
        try {
            const response = await axios.delete(endpoint, { data: body });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    handleError(error:any) {
        if (error.response && error.response.status === 401) {
            console.log('---LOGOUT---');
            // store.dispatch(logout());
        }
        if (error.code === requestAbordCode || ('response' in error && error.response === undefined)) {
            // delay(1000);
            error.recall = true;
        }
        throw error;
    }
};

const client = new RequestClient();

export { client };
