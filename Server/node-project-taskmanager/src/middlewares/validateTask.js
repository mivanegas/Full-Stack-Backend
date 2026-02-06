const validateTask = (req, res, next) => {
  const { text } = req.body;

  console.log("Request body:", req.body);
  console.log("Text value:", text);

  if (!text || text.length < 3) {
    return res.status(400).json({
      status: "FAILED",
      message: "Please enter a valid task text",
    });
  }
  next();
};

module.exports = validateTask;
