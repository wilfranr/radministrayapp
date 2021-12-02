const key = 'token'
const rol ='rol'

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
function saveRole() {
    localStorage.setItem(rol)
}

module.exports = {
    setToken, getToken, deleteToken, saveRole
};

