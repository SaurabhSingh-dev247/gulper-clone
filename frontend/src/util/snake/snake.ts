import drawTail from "./snake-tail.ts";
import drawHead from "./snake-head.ts";
import drawEye from "./snake-eye.ts";
import type { coordinate } from "../../global/usefull-types.ts";

const startAngle = 45 * (Math.PI / 180);
const endAngle = -(45 * (Math.PI / 180));

export function calculateTailTopStartingPoint(radius: number) {
  const x = radius * Math.sin(startAngle);
  const y = radius * Math.cos(startAngle);

  return { x, y };
}

export function calculateTailBottomStartingPoint(radius: number) {
  const x = radius * Math.sin(endAngle);
  const y = radius * Math.cos(endAngle);

  return { x, y };
}

export default function drawSnake(
  tailTopStartingPoint: coordinate,
  tailBottomStartingPoint: coordinate,
  snakeHeadRadius: number,
  snakeHeadOrigin: coordinate,
  tailEndPoint: coordinate,
  snakeColor: string,
  ctx: CanvasRenderingContext2D,
) {
  drawHead(
    startAngle,
    endAngle,
    snakeHeadRadius,
    snakeHeadOrigin,
    ctx,
    snakeColor,
  );
  drawEye(snakeHeadOrigin, snakeHeadRadius, ctx);
  drawTail(
    tailEndPoint,
    tailTopStartingPoint,
    tailBottomStartingPoint,
    ctx,
    snakeColor,
  );
}
