const fs = require('fs');
const path = require('path');


function readJson(fileName) {
    const filePath = path.join(__dirname, '..', 'data', fileName);
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
}


function getAllMovies() {
    return readJson('movies.json');
}

function getMovieById(id) {
    const movies = getAllMovies();
    return movies.find(m => m.id === Number(id));
}


function getAllUsers() {
    return readJson('users.json');
}

function getUserByCredentials(username, password) {
    const users = getAllUsers();
    return users.find(
        u => u.username === username && u.password === password
    );
}

module.exports = {
    getAllMovies,
    getMovieById,
    getAllUsers,
    getUserByCredentials
};