import type { coordinate } from "../../global/usefull-types.ts";

export default function drawTail(
  endpoint: coordinate,
  tailTopStartingPoint: coordinate,
  tailBottomStartingPoint: coordinate,
  ctx: CanvasRenderingContext2D,
  tailColor: string,
) {
  ctx.beginPath();
  ctx.fillStyle = tailColor;

  ctx.moveTo(tailTopStartingPoint.x, tailTopStartingPoint.y);
  ctx.lineTo(endpoint.x, endpoint.y);
  ctx.lineTo(tailBottomStartingPoint.x, tailBottomStartingPoint.y);

  ctx.closePath();
  ctx.fill();
}
