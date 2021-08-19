const UserModel = require("../models/user.model");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadProfil = async (req, res) => {
  try {
    if (
      req.file.detectedMineType != "image/jpg" &&
      req.file.detectedMineType != "image/png" &&
      req.file.detectedMineType != "image/jpeg"
    )
      throw Error("ivalid file");

    if (req.file.size > 500000) throw Error("max size");
  } catch (err) {
    return res.status(400).json(err);
  }

  const fileName = req.body.name + ".jpg";

  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${_dirname}/../frontend/public/uploads/profil/${filename}`
    )
  );
};
