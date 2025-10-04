interface LoginResponseUser {
    id: string;

    name: string;

    email: string;
}


interface LoginResponseData {
    token: string;

    user: LoginResponseUser;
}


export interface LoginResponse {
    data: LoginResponseData,

    message: string;

    success: boolean;
}
