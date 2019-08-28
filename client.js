const net = require("net");

const connect = function(){
  const conn = net.createConnection({
    host: "192.168.0.102",
    port: 50541
  });
  
  const nameAndMove = () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: THM")
    conn.write("Move: up, Move: up, Move: up, Move: up")
  }

  // const moveSnake = () => {
  //   const moveList = ["Move: up", "Move: up", "Move: up", "Move: up", "Move: up", "Move: right", "Move: right", "Move: right", "Move: right", "Move: right", "Move: down", "Move: down", "Move: down", "Move: down", "Move down", "Move: left", "Move: left", "Move: left", "Move: left", "Move left"]
  //   let time = 200
  //   for (let move of moveList) {
  //     setTimeout(() => {
  //       conn.write(move)}, time)
  //       time += 75
  //   }
  // } 
  
  conn.setEncoding("utf8");

  conn.on("connect", nameAndMove)
  
  conn.on("data", (data) => {
    console.log(data);
  })
  return conn;
};

module.exports = connect;