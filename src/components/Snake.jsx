

import React, { useRef, useState, useEffect } from 'react';

const canvasWidth = 400;
const canvasHeight = 400;
const scale = 20;
const rows = canvasHeight / scale;
const cols = canvasWidth / scale;

function randomFoodPosition() {
    return {
        x: Math.floor(Math.random() * cols),
        y: Math.floor(Math.random() * rows),
    };
}

const Snake = () => {
    const canvasRef = useRef(null);
    const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
    const [direction, setDirection] = useState({ x: 1, y: 0 });
    const [food, setFood] = useState(randomFoodPosition());
    const [isRunning, setIsRunning] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const gameIntervalRef = useRef(null);

    // Handle key presses for arrow keys to change direction
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (direction.y !== 1) setDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    if (direction.y !== -1) setDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    if (direction.x !== 1) setDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    if (direction.x !== -1) setDirection({ x: 1, y: 0 });
                    break;
                default:
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [direction]);

    // Draw the game on the canvas
    const drawGame = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        // Background
        ctx.fillStyle = '#222';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        // Draw the snake
        ctx.fillStyle = '#0f0';
        snake.forEach((segment) => {
            ctx.fillRect(segment.x * scale, segment.y * scale, scale, scale);
        });
        // Draw the food
        ctx.fillStyle = '#f00';
        ctx.fillRect(food.x * scale, food.y * scale, scale, scale);
    };

    // Update game state
    const updateGame = () => {
        setSnake((prev) => {
            const head = prev[0];
            const newHead = { x: head.x + direction.x, y: head.y + direction.y };

            // Check wall collisions
            if (
                newHead.x < 0 ||
                newHead.x >= cols ||
                newHead.y < 0 ||
                newHead.y >= rows
            ) {
                endGame();
                return prev;
            }

            // Check self collision
            for (let segment of prev) {
                if (newHead.x === segment.x && newHead.y === segment.y) {
                    endGame();
                    return prev;
                }
            }

            let newSnake = [newHead, ...prev];
            // Check if food is eaten
            if (newHead.x === food.x && newHead.y === food.y) {
                setFood(randomFoodPosition());
            } else {
                newSnake.pop();
            }
            return newSnake;
        });
        drawGame();
    };

    // Start the game loop
    const startGame = () => {
        if (gameOver || isRunning) return;
        setIsRunning(true);
        gameIntervalRef.current = setInterval(updateGame, 100);
    };

    // Restart the game
    const restartGame = () => {
        if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
        if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
        setDirection({ x: 1, y: 0 });
        setFood(randomFoodPosition());
        setGameOver(false);
        setIsRunning(false);
        drawGame();
    };

    // End the game
    const endGame = () => {
        setGameOver(true);
        setIsRunning(false);
        if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
    };

    // Redraw the game when snake or food changes
    // Game loop
    useEffect(() => {
        if (isRunning) {
            gameIntervalRef.current = setInterval(updateGame, 100);
        }
        return () => {
            if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
        };
    }, [isRunning, direction, snake]);

    // Redraw the game when snake or food changes
    useEffect(() => {
        drawGame();
    }, [snake, food]);
    return (
        <div
            style={{
                textAlign: 'center',
                padding: '20px',
                background: '#333',
                color: '#fff',
                minHeight: '100vh',
            }}
        >
            <h2>Snake Game</h2>
            <canvas
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
                style={{ border: '2px solid #fff', background: '#222' }}
            ></canvas>
            <div style={{ marginTop: '20px' }}>
                <button onClick={startGame} style={buttonStyle}>
                    Start
                </button>
                <button onClick={restartGame} style={buttonStyle}>
                    Restart
                </button>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    background: '#555',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default Snake;