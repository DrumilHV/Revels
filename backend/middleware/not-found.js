const notFoundMiddleware = (req, res) => {
  res.status(404).send("Route to the server does not exist");
};

export default notFoundMiddleware;
