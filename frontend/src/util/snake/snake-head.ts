import type { coordinate } from "../../global/usefull-types";

export default function drawHead(
  startAngle: number,
  endAngle: number,
  headRadius: number,
  origin: coordinate,
  ctx: CanvasRenderingContext2D ,
  headColor: string,
) {
  const { x, y } = origin;

  ctx.beginPath();
  ctx.fillStyle = headColor;
  ctx.arc(x, y, headRadius, startAngle, endAngle);
  ctx.fill();
}
