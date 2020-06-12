import axios, { AxiosResponse } from 'axios';
import { IAdvice } from '../models/advice';


axios.defaults.baseURL= 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response : AxiosResponse) =>
new Promise<AxiosResponse>(resolve => 
    setTimeout(()=> resolve(response), ms));

const requests = {
    get : (url : string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post : (url: string, body : {}) => axios.post(url, body ).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    delete: (url:string) =>axios.delete(url).then(sleep(1000)).then(responseBody),
};

const Advices = {
    list: (): Promise<IAdvice[]>=> requests.get('/advices'),
    details: (id:string) : Promise<IAdvice> => requests.get(`/advices/${id}`),
    create: (advice: IAdvice) => requests.post('/advices', advice),
    update: (advice: IAdvice) => requests.put(`/advices/${advice.id}`, advice),
    delete: (id: string) => requests.delete(`/advices/${id}`),

}

export default {
    Advices
}