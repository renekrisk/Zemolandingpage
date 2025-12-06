import React, { useEffect, useRef } from 'react';

const SnowEffect: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const snowflakes: { x: number; y: number; radius: number; speed: number; wind: number }[] = [];
        const snowflakeCount = 100;

        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 3 + 1,
                speed: Math.random() * 1 + 0.5,
                wind: Math.random() * 0.5 - 0.25,
            });
        }

        function draw() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);
            // Changed to a silvery-blue for visibility on white backgrounds
            ctx.fillStyle = 'rgba(180, 190, 210, 0.9)';
            ctx.beginPath();

            snowflakes.forEach((flake) => {
                ctx.save();
                ctx.translate(flake.x, flake.y);
                // Draw snowflake shape (6-pointed star/hexagon lines)
                ctx.strokeStyle = 'rgba(180, 190, 210, 0.9)';
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';
                const size = flake.radius;

                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    ctx.moveTo(0, 0);
                    ctx.lineTo(0, size);
                    ctx.rotate(Math.PI / 3);
                }
                ctx.stroke();

                // Add intersection cross
                ctx.beginPath();
                ctx.rotate(Math.PI / 6);
                for (let i = 0; i < 6; i++) {
                    ctx.moveTo(0, size * 0.5);
                    ctx.lineTo(0, size * 0.8);
                    ctx.rotate(Math.PI / 3);
                }
                ctx.stroke();

                ctx.restore();
            });
            update();
            requestAnimationFrame(draw);
        }

        function update() {
            snowflakes.forEach((flake) => {
                flake.y += flake.speed;
                flake.x += flake.wind;

                if (flake.y > height) {
                    flake.y = 0;
                    flake.x = Math.random() * width;
                }
                if (flake.x > width) {
                    flake.x = 0;
                } else if (flake.x < 0) {
                    flake.x = width;
                }
            });
        }

        const handleResize = () => {
            if (!canvas) return;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        const animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[9999] pointer-events-none"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default SnowEffect;
