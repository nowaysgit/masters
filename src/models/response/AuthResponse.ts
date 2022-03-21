import {User} from "@/models/User";

export interface AuthResponse {
    AccessToken: string,
    RefreshToken: string,
    user: User
}