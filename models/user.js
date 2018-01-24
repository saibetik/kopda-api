const User = require('../app').User;

const createNewUser = (userData) => {
  const user = new User({
    username: userData.username,
    password: userData.password
  });
  return new Promise((resolve, reject) => {
    user.save((err, savedUser) => {
      if (err) return reject(err);
      resolve(savedUser);
    });
  });
};

const listAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}, (err, users) => {
      if (err) return reject(err);
      resolve(users);
    });
  })
};

module.exports = {
  createNewUser,
  listAllUsers
};
