import styles from "./Playground.module.css";
import { useEffect, useRef, useState } from "react";
import drawSnake, {
    calculateTailBottomStartingPoint,
    calculateTailTopStartingPoint,
} from "../../util/snake/snake";
import type { coordinate } from "../../global/usefull-types";

let ctx: CanvasRenderingContext2D;
const colors = [
    "#f77655", // Persimmon
    "#33FF57", // Screamin' Green
    "#3357FF", // 20/20 Blue
    "#F333FF", // Fuchsia
    "#33FFF5", // Aqua
    "#FFB833", // Sunglow
    "#a05df9", // Electric Violet
    "#FF3380", // Wild Strawberry
    "#33FFAF", // Spring Green
    "#f50ea0"  // Midnight Blue
];


export default function PlayGround() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [firstSnakeOrigin, setFirstSnakeOrigin] = useState<coordinate>({ x: 150, y: 150 });
    const [radius, setRadius] = useState<number>(20);

    const topStartingPoints = calculateTailTopStartingPoint(radius);
    const bottomStartingPoints = calculateTailBottomStartingPoint(radius);



    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");

        if (!context) return;

        ctx = context;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;



        let incrementedY: number = 0;

        for (const color of colors) {
            
            const newOrigin = {
                ...firstSnakeOrigin,
                y: firstSnakeOrigin.y + incrementedY
            }

            const tailTopStartingPoint = {
                x: newOrigin.x + topStartingPoints.x,
                y: newOrigin.y + topStartingPoints.y,
            };

            const tailBottomStartingPoint = {
                x: newOrigin.x - bottomStartingPoints.x,
                y: newOrigin.y - bottomStartingPoints.y,
            };

            const tailEndPoint = {
                x: newOrigin.x + radius * 2,
                y: newOrigin.y,
            };

            drawSnake(
                tailTopStartingPoint,
                tailBottomStartingPoint,
                radius,
                newOrigin,
                tailEndPoint,
                color,
                ctx,
            );
            incrementedY += 300;

        }

        // drawSnake(
        //     tailTopStartingPoint,
        //     tailBottomStartingPoint,
        //     radius,
        //     snakeOrigin,
        //     tailEndPoint,
        //     "rgb(255, 89, 0)",
        //     ctx,
        // );
    }, []);

    return (
        <canvas ref={canvasRef} className={styles.playground}>
            Browser does not support the canvas api
        </canvas>
    );
}
