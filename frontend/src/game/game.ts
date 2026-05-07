import Snake from "../snake/snake.ts";

// const colors = [
//     "#ff4f23",
//     "#33FF57",
//     "#3357FF",
//     "#F333FF",
//     "#33FFF5",
//     "#ff7033",
//     "#a05df9",
//     "#FF3380",
//     "#f9a907",
//     "#fa144a"
// ];

export default class Game {
  //  Requirments for the game.
  //  Foods =  foods should be an array of coordinates
  //  10 differents snakes moving against one another
  //  collsion detection logic
  private id: string;
  private players: Array<Snake>;

  constructor(id: string) {
    this.id = id;
    this.players = [];
  }

  private distributeFoods() {
    
  }
}
