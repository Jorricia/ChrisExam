let moveForward = (x, y, direction) => {
    let newX = x;
    let newY = y;
    switch (direction) {
      case "North":
        newY++;
        break;
      case "South":
        newY--;
        break;
      case "East":
        newX++;
        break;
      case "West":
        newX--;
        break;
      default:
        return { position: [x, y], direction: direction };
    }
    return { position: [newX, newY], direction };
  };
  let turnLeft = (x, y, direction) => {
    let nd = direction;
    switch (direction) {
      case "North":
        nd = "West";
        break;
      case "South":
        nd = "East";
        break;
      case "East":
        nd = "North";
        break;
      case "West":
        nd = "South";
        break;
      default:
        nd = direction;
    }
    return { position: [x, y], direction: nd };
  };
  let turnRight = (x, y, direction) => {
    let nd = direction;
    switch (direction) {
      case "North":
        nd = "East";
        break;
      case "South":
        nd = "West";
        break;
      case "East":
        nd = "South";
        break;
      case "West":
        nd = "North";
        break;
    }
    console.log(nd);
    return { position: [x, y], direction: nd };
  };
  
  let findTheTreasure = (startingPosition, direction, instructions) => {
    console.log(
      `Starting at (${startingPosition[0]},${startingPosition[1]}) facing ${direction}`
    );
    let tempVar;
  
    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i] === "Right") {
        tempVar = turnRight(startingPosition[0], startingPosition[1], direction);
        startingPosition = tempVar.position;
        direction = tempVar.direction;
        console.log(`Turning right to face ${direction}`)
  
      } else if (instructions[i] === "Left") {
        tempVar = turnLeft(startingPosition[0], startingPosition[1], direction);
        startingPosition = tempVar.position;
        direction = tempVar.direction;
        console.log(`Turning left to face ${direction}`)
        
      } else if (instructions[i] === "Forward") {
        tempVar = moveForward(startingPosition[0], startingPosition[1], direction);
        startingPosition = tempVar.position;
        direction = tempVar.direction;
        
        console.log(`Moving ${direction} one pace to (${startingPosition[0]},${startingPosition[1]})`)
      }}
    startingPosition = tempVar.position;
    direction = tempVar.direction;
    return tempVar;
  };
  
  module.exports = {
    moveForward,
    turnLeft,
    turnRight,
    findTheTreasure,
  };
  