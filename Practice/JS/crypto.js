//HASHING
const { createHash } = require('crypto');

function hash(input) {
    return createHash('sha256').update(input).digest('base64'); // or Hex
}

let password = "123456";
const hash1 = hash(password);

let password2 = "password";
const hash2 = hash(password2);

let password3 = "A6g3khq!";
const hash3 = hash(password3);

let password4 = "password";
const hash4 = hash(password4);

const match = hash2 === hash4;
console.log(match);

const match2 = hash1 === hash3;
console.log(match2);

console.log(match ? '✅ good password' : '❌ password does not match')
console.log(match2 ? '✅ good password' : '❌ password does not match');

console.log(hash1);
console.log(hash2);
console.log(hash3);

//SALT
let users = [];

const { scryptSync, randomBytes } = require('crypto');
const buffer = require("buffer");
const Buffer = require("buffer");

function signup(email, password) {
    const salt = randomBytes(10).toString('hex');
    // console.log(salt);
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');
    // console.log(hashedPassword);

    const user = {email, password: `${salt}:${hashedPassword}`}
    // console.log(user);

    users.push(user);
    console.log(users);

    return user;

}

signup("cody@codeup.com", "password123");
signup("emily@codeup.com", "123456");
signup("leroy@codeup.com", "May1943!");


function login(email, password) {

    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    // const keyBuffer = Buffer.from(key, 'hex');
    // const match3 = timingSafeEqual(hashedBuffer, keyBuffer);
}