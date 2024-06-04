import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Project} from "./models/Project";
import {Issue} from "./models/Issue";
import {BaseService} from "./BaseService";
export class IssueService {
    private static BASE_URL: string = process.env.BASE_URL + '/api/v1';
    private axiosInstance = axios.create({
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    static async createIssue(issue: Issue, token: string): Promise<Issue> {
        let requestConfig: AxiosRequestConfig = {
            method: 'post',
            url: this.BASE_URL + '/issues',
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
                'Authorization': 'Bearer ' + token
            },
            data: JSON.stringify(issue)
        };
        try {
            const response = await axios.request(requestConfig);
            return new Issue(response.data);
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    // static async register(registerData: RegisterData): Promise<User> {
    //     let requestConfig: AxiosRequestConfig = {
    //         method: 'post',
    //         url: this.BASE_URL + '/auth/register',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         data: JSON.stringify(registerData)
    //     };
    //     try {
    //         const response = await axios.request(requestConfig);
    //         return response.data;
    //     } catch (error: any) {
    //         console.log(error);
    //         throw error;
    //     }
    // }

}