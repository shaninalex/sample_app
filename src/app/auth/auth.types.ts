export interface LoginPayload {
    email: string
    password: string
}

export interface LoginSuccessPayload {
    token_access: string
    token_refresh: string
    exp: number
}

export interface RegisterPayload {
    username: string
    email: string
    password: string
    password_confirm: string
}

export interface RegisterSuccessPayload {
    status: boolean
}
