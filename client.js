const net = require("net");
const { IP, PORT } = require("./constants")

const connect = function(){
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  const nameAndMove = () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: THM")
  }
  
  conn.setEncoding("utf8");

  conn.on("connect", nameAndMove)

  conn.on("data", (data) => {
    console.log(data);
  })
  return conn;
};

module.exports = { connect };

 // const moveSnake = () => {
  //   const moveList = ["Move: up", "Move: up", "Move: up", "Move: up", "Move: up", "Move: right", "Move: right", "Move: right", "Move: right", "Move: right", "Move: down", "Move: down", "Move: down", "Move: down", "Move down", "Move: left", "Move: left", "Move: left", "Move: left", "Move left"]
  //   let time = 200
  //   for (let move of moveList) {
  //     setTimeout(() => {
  //       conn.write(move)}, time)
  //       time += 75
  //   }
  // } 
  