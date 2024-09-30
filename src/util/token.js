const Base64Decode = txt => {
    return decodeURIComponent(window.atob(txt).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

export const getToken = token => {
    const payload = token.split(".")[1];
    const txt = payload.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(Base64Decode(txt));
}
