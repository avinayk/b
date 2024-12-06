const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../../db");
require("dotenv").config();

exports.getallpayment = (req, res) => {
  console.log("allpayment");
  // Query the database to get the user by email
  db.query(
    `SELECT u.id,u.profile_image,u.username, m.* 
     FROM users u 
     JOIN membership m ON u.id = m.user_id 
     ORDER BY m.date DESC`,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Database query error", error: err });
      }
      res.status(200).json({ result: results });
    }
  );
};

