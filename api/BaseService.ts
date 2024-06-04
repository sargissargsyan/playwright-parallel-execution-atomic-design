import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {User} from "./models/User";
require('dotenv').config();


export interface AuthData {
    username: string;
    password: string;
    type: 'normal';
}

export interface RegisterData {
    accepted_terms: boolean,
    email: string,
    full_name: string,
    password: string,
    type: string,
    username: string
}

export class BaseService {
    protected static BASE_URL: string = process.env.BASE_URL + '/api/v1';
    protected axiosInstance = axios.create({
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    static async login(username: string, password: string): Promise<any> {
        let authData: AuthData = {
            username: username,
            password: password,
            type: 'normal'
        }
        let requestConfig: AxiosRequestConfig = {
            method: 'post',
            url: this.BASE_URL + '/auth',
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache'
            },
            data: JSON.stringify(authData)
        };
        try {
            const response = await axios.request(requestConfig);
            return response.data;
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    static async register(registerData: RegisterData): Promise<User> {
        let requestConfig: AxiosRequestConfig = {
            method: 'post',
            url: this.BASE_URL + '/auth/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(registerData)
        };
        try {
            const response = await axios.request(requestConfig);
            return new User(response.data);
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    async dismissNewsletterRequest(): Promise<void> {
        return this.axiosInstance.post('/user-storage', {
            key: 'dont_ask_premise_newsletter',
            value: true
        })
            .then(_ => {
                //do something if needed
            });
    }
}