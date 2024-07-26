// Check that there is a name key/value
const checkName = (req, res, next) => {
  if (req.body.name) {
    return next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

// Check that is_favorite is a boolean (or undefined)
// Value can also come in as a string
const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (
    is_favorite == "true" ||
    is_favorite == "false" ||
    is_favorite == undefined ||
    typeof is_favorite == "boolean"
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

// Make sure that the URL starts with http:// or https://
const validateURL = (req, res, next) => {
  if (
    req.body.url.substring(0, 7) === "http://" ||
    req.body.url.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: `You forgot to start your url with http:// or https://` });
  }
};

module.exports = { checkBoolean, checkName, validateURL };
