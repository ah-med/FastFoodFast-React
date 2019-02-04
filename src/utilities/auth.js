export const reDirectLogin = (role, history) => (
    (role === 'user')
        ? history.push('/foodItems')
        : history.push('/add-meal')
);

export const parseJwt = (newToken) => {
    const payLoadData = newToken.split('.')[1];
    return JSON.parse(window.atob(payLoadData));
};

export const setUserData = (token) => {
    localStorage.setItem('userToken', token);
    localStorage.setItem('login', true);
    const { role, userId } = parseJwt(token);
    localStorage.setItem('role', role);
    localStorage.setItem('userId', userId);
};
