export const getToken = (): string | null => {
    if(typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }

    return null;
};

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
};
