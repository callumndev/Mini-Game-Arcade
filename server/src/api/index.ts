import { Router } from 'express'


const api = Router();


// API Info
import info, { path as infoPath } from './routers/info'
api.get(infoPath, info);


export default api;
export const path = '/api'


export interface IAPIResponse<T> {
    code: number;
    success: boolean;
    message: null | string;
    data: T;
}
