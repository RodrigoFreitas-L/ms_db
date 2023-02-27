module.exports = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ error: `You shouldn't be seeing this` });
}