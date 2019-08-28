const handleUserInput = (key, connection) => {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "\u007A") {
    connection.write("Move: up");
  } else if (key === "\u0073") {
    connection.write("Move: down");
  } else if (key === "\u0071") {
    connection.write("Move: left");
  } else if (key === "\u0064") {
    connection.write("Move: right");
  } else if (key === "\u0065") {
    connection.write("Say: Eat my tail");
  } else if (key === "\u0061") {
    connection.write("Say: out of my way");
  } else if (key === "\u0072") {
    connection.write("Say: I will eat");
  } else if (key === "\u0077") {
    connection.write("Say: I always win");
  }
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