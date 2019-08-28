const { keyReference }= require("./constants")

const handleUserInput = (key, connection) => {
  if (key === "\u0003") {
    process.exit();
  }
  connection.write(keyReference[key]);
};

const setupInput = function(conn) {
  let connection = conn
  const stdin = process.stdin
  stdin.on("data", key => handleUserInput(key, connection))
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

module.exports = { setupInput }