import type { coordinate } from "../../global/usefull-types.ts";

function calculateFirstEyeCoord(radius: number, snakeHeadOrigin: coordinate) {
  const xd = (radius / 2) * Math.sin(45 * (Math.PI / 180));
  const yd = (radius / 2) * Math.cos(45 * (Math.PI / 180));
  const { x: pshX, y: pshY } = snakeHeadOrigin;

  return { x: pshX + xd, y: pshY + yd };
}

function calculateSecondEyeCoord(radius: number, snakeHeadOrigin: coordinate) {
  const xd = (radius / 2) * Math.sin(-(45 * (Math.PI / 180)));
  const yd = (radius / 2) * Math.cos(-(45 * (Math.PI / 180)));

  const { x: pshX, y: pshY } = snakeHeadOrigin;

  return { x: pshX + xd, y: pshY + yd };
}

function drawFirstEye(
  coord: coordinate,
  ctx: CanvasRenderingContext2D,
  snakeHeadRadius: number,
) {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(coord.x, coord.y, snakeHeadRadius / 10, 0, 2 * Math.PI);
  ctx.fill();
}

function drawSecondEye(
  coord: coordinate,
  ctx: CanvasRenderingContext2D,
  snakeHeadRadius: number,
) {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(coord.x, coord.y, snakeHeadRadius / 10, 0, 2 * Math.PI);
  ctx.fill();
}

export default function drawEye(
    snakeHeadOrigin: coordinate, 
  snakeHeadRadius: number,
  ctx: CanvasRenderingContext2D,
) {
  const firstEyeCoord = calculateFirstEyeCoord(snakeHeadRadius, snakeHeadOrigin);
  const secondEyeCoord = calculateSecondEyeCoord(snakeHeadRadius, snakeHeadOrigin);

  drawFirstEye(firstEyeCoord, ctx, snakeHeadRadius);
  drawSecondEye(secondEyeCoord, ctx, snakeHeadRadius);
}
