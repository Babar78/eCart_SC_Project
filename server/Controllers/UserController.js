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

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (user) {
      const { email, username, password, country, address, phone, image } =
        req.body;

      // Compare the current image URL with the one in the request body
      if (user.image === image) {
        user.image = image; // Keep the existing image URL
      } else {
        const imageFile =
          req.files && req.files["image"] ? req.files["image"][0].path : null;
        user.image = imageFile; // Upload the new image file
      }

      user.email = email;
      user.username = username;
      user.password = password;
      user.country = country;
      user.address = address;
      user.phone = phone;

      await user.save();

      // Create an object with the updated user data
      const updatedUser = {
        email: user.email,
        username: user.username,
        password: user.password,
        country: user.country,
        address: user.address,
        phone: user.phone,
        image: user.image,
      };

      res.send({ message: "Profile Updated Successfully!", user: updatedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
