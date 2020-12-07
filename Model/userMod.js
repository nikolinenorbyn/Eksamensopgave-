const express = require('express');
const router = express.Router();

class user{

    constructor(name, birthday, email, password, gender, interest, like, dislike, match) {
        this.name = name;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.interest = interest;
        this.like = like;
        this.dislike = dislike;
        this.match = match;
    }
}

module.exports = user; 