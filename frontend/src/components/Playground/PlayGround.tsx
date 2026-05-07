import styles from "./Playground.module.css";
import { useEffect, useRef, useState } from "react";
import type { coordinate } from "../../global/usefull-types.ts";
import Snake from "../../snake/snake.ts";

let ctx: CanvasRenderingContext2D;
export default function PlayGround() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [firstSnakeOrigin, setFirstSnakeOrigin] = useState<coordinate>({
        x: 150,
        y: 150,
    });
    const [snakeSize, setSnakeSize] = useState<number>(20);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const context = canvas.getContext("2d");
        if (!context) return;

        ctx = context;

        const snake = new Snake(
            crypto.randomUUID(),
            snakeSize,
            firstSnakeOrigin,
            "#fb3503",
            ctx,
        );
        snake.renderSnake();
    }, []);

    return (
        <canvas ref={canvasRef} className={styles.playground}>
            Browser does not support the canvas api
        </canvas>
    );
}
