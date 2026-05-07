import type { coordinate } from "../global/usefull-types.ts";
import {
  calculateSecondEyeCoord,
  calculateFirstEyeCoord,
  calculateTailBottomStartingPoint,
  calculateTailTopStartingPoint,
} from "../util/snake-helper.ts";

export default class Snake {
  private snakeSize: number;
  private id: string;
  private snakeHeadOrigin: coordinate;
  // private snakeBody: Array<coordinate>;
  private ctx: CanvasRenderingContext2D;
  private snakeColor: string;
  private headArcStartAngle: number = 45 * (Math.PI / 180);
  private headArcEndAngle: number = -(45 * (Math.PI / 180));

  constructor(
    id: string,
    snakeSize: number,
    snakeHeadOrigin: coordinate,
    snakeColor: string,
    ctx: CanvasRenderingContext2D,
  ) {
    this.id = id;
    this.snakeSize = snakeSize;
    this.snakeHeadOrigin = snakeHeadOrigin;
    this.snakeColor = snakeColor;
    this.ctx = ctx;
    // this.snakeBody = [{ x: this.snakeHeadOrigin.x, y: this.snakeHeadOrigin.y }];
  }

  private createEye(coord: coordinate) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.arc(coord.x, coord.y, this.snakeSize / 10, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  private renderHead() {
    const { x, y } = this.snakeHeadOrigin;

    this.ctx.beginPath();
    this.ctx.arc(
      x,
      y,
      this.snakeSize,
      this.headArcStartAngle,
      this.headArcEndAngle,
    );
    this.ctx.fillStyle = this.snakeColor;
    this.ctx.fill();
  }

  private renderTail() {
    const tailTopStartingPoint: coordinate = calculateTailTopStartingPoint(
      this.snakeSize,
      this.headArcStartAngle,
      this.snakeHeadOrigin,
    );
    const tailBottomStartingPoint: coordinate =
      calculateTailBottomStartingPoint(
        this.snakeSize,
        this.headArcEndAngle,
        this.snakeHeadOrigin,
      );

    const endpoint: coordinate = {
      x: this.snakeHeadOrigin.x + this.snakeSize * 2,
      y: this.snakeHeadOrigin.y,
    };

    this.ctx.beginPath();
    this.ctx.fillStyle = this.snakeColor;

    this.ctx.moveTo(tailTopStartingPoint.x, tailTopStartingPoint.y);
    this.ctx.lineTo(endpoint.x, endpoint.y);
    this.ctx.lineTo(tailBottomStartingPoint.x, tailBottomStartingPoint.y);

    this.ctx.closePath();
    this.ctx.fill();
  }

  private renderSnakeEye() {
    const firstEyeCoord = calculateFirstEyeCoord(
      this.snakeSize,
      this.snakeHeadOrigin,
    );
    const secondEyeCoord = calculateSecondEyeCoord(
      this.snakeSize,
      this.snakeHeadOrigin,
    );

    this.createEye(firstEyeCoord);
    this.createEye(secondEyeCoord);
  }
  private rotateSnake(snakeOrigin: coordinate,deg: number) {
    const {x, y} = snakeOrigin;
    this.ctx.save();
    this.ctx.translate(x, y)
    this.ctx.rotate(deg);
    this.ctx.restore();
  }

  
  renderSnake() {
    this.renderHead();
    this.renderSnakeEye();
    this.renderTail();
  }

  moveSnake(newPos: coordinate) {}
}
