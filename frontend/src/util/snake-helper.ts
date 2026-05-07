import type { coordinate } from "../global/usefull-types";

export function calculateTailTopStartingPoint(
  snakeSize: number,
  angle: number,
  snakeOrigin: coordinate,
): coordinate {
  const xd = snakeSize * Math.sin(angle);
  const yd = snakeSize * Math.cos(angle);

  return { x: snakeOrigin.x + xd, y: snakeOrigin.y + yd };
}

export function calculateTailBottomStartingPoint(
  snakeSize: number,
  angle: number,
  snakeOrigin: coordinate,
): coordinate {
  const xd = snakeSize * Math.sin(angle);
  const yd = snakeSize * Math.cos(angle);

  return { x: snakeOrigin.x - xd, y: snakeOrigin.y - yd };
}

export function calculateFirstEyeCoord(
  snakeSize: number,
  snakeHeadOrigin: coordinate,
): coordinate {
  const xd = (snakeSize / 2) * Math.sin(45 * (Math.PI / 180));
  const yd = (snakeSize / 2) * Math.cos(45 * (Math.PI / 180));
  const { x: pshX, y: pshY } = snakeHeadOrigin;

  return { x: pshX - xd, y: pshY - yd };
}

export function calculateSecondEyeCoord(
  snakeSize: number,
  snakeHeadOrigin: coordinate,
): coordinate {
  const xd = (snakeSize / 2) * Math.sin(-(45 * (Math.PI / 180)));
  const yd = (snakeSize / 2) * Math.cos(-(45 * (Math.PI / 180)));

  const { x: pshX, y: pshY } = snakeHeadOrigin;

  return { x: pshX + xd, y: pshY + yd };
}
