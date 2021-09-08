import {RequestInterceptor, RequestOptionsInit} from "umi-request";

const constructor = (tokenKey?: string): RequestInterceptor => {
    const interceptor = (url: string, options: RequestOptionsInit) => {
        let token = localStorage.getItem(tokenKey || "x-token");
        const authHeader = {Authorization: `Bearer ${token}`};
        return {
            url: url,
            options: {...options, interceptors: true, headers: authHeader},
        };
    }
    return interceptor;
}

export default constructor;