const User = require("../Models/User");
const cloudinary = require("cloudinary").v2;

exports.createUser = async (req, res) => {
  try {
    const { email, username, password, country, address, phone } = req.body;
    const image = req.files["image"] ? req.files["image"][0].path : null;

    User.findOne({ email: email })
      .then((foundUser) => {
        if (foundUser) {
          res.send({ message: "User already exists" });
        } else {
          const user = new User({
            email,
            username,
            password,
            country,
            address,
            phone,
            image, // Store the generated image URL from Cloudinary
          });

          user
            .save()
            .then(() => {
              res.send({ message: "Successfully Registered" });
            })
            .catch((err) => {
              res.send(err);
            });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (err) {
    res.send(err);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((foundUser) => {
      if (foundUser) {
        if (foundUser.password === password) {
          res.send({ message: "Login Successful", user: foundUser });
        } else {
          res.send({ message: "Invalid Credentials" });
        }
      } else {
        res.send({ message: "User does not exist" });
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
