import $api from "@/http"
import {AxiosResponse} from 'axios';
import {AuthResponse} from "@/models/response/AuthResponse";

export default class AuthService {
    static async Login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/login', {email, password})
    }

    static async Registration(email: string, password: string, password2: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/registration', {email, password, password2})
    }

    static async Logout(): Promise<void> {
        return $api.post('/user/logout')
    }
}