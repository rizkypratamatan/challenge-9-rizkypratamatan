export const getToken = (): string | null => {
    if(typeof window !== 'undefined') {
        return localStorage.getItem('token');
    } else {
        return null;
    }
};

export const setToken = (token: string) => {
    return localStorage.setItem('token', token);
};
