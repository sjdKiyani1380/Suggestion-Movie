export interface AuthState{
    token:string | null;
    email:string | null;
    exp:number | null;
    iat:number | null;
}

export interface TokenModel {
    email:string,
    password:string,
    iat:number,
    exp:number,
}