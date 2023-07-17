const getUser = function (req, res) {
  res.send("hi");
};

const addUser = function (req, res) {
  console.log(req.body);
  res.sen("user is added");
};

module.exports = {
  getUser,
  addUser,
};
