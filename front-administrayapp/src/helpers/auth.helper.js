const key = 'token'

async function setToken(token) {
    await localStorage.setItem(key, token)
}

function getToken() {
    return localStorage.getItem(key)
}

function deleteToken() {
    localStorage.removeItem(key)
    window.location.href = '/';

    

}

export default {
    setToken, getToken, deleteToken
}
