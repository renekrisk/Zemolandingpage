import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ChristmasDecorations: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Physics Ornament (Top Right) */}
            <PhysicsOrnament />

            {/* Draggable Star (Top Left) */}
            <div className="absolute top-8 left-[5%] pointer-events-auto">
                <motion.div
                    drag
                    dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                    dragElastic={0.2}
                    whileHover={{ scale: 1.2, rotate: 180, transition: { duration: 0.5 } }}
                    whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                    animate={{
                        opacity: [0.8, 1, 0.8],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        opacity: { duration: 2, repeat: Infinity },
                        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="cursor-grab"
                >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill="url(#star-gradient)" stroke="#D4AF37" strokeWidth="1" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="star-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FCD34D" />
                                <stop offset="1" stopColor="#F59E0B" />
                            </linearGradient>
                        </defs>
                        <circle cx="12" cy="12" r="15" fill="url(#glow)" fillOpacity="0.3" />
                        <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 12) rotate(90) scale(15)">
                            <stop stopColor="#FCD34D" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#FCD34D" stopOpacity="0" />
                        </radialGradient>
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

const PhysicsOrnament = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const baubleRef = useRef<HTMLDivElement>(null); // DOM Element for the bauble

    // Physics state ref
    const physics = useRef({
        points: [] as { x: number; y: number; oldx: number; oldy: number; pinned?: boolean }[],
        sticks: [] as { p0: number; p1: number; length: number }[],
        dragPointIndex: -1
    });

    // Refs for drag handling to avoid closures in event listeners
    const dragRef = useRef({
        isDragging: false,
        startX: 0,
        startY: 0
    });

    useEffect(() => {
        const p = physics.current;
        const segmentCount = 10;
        const totalLength = 150;
        const segmentLength = totalLength / segmentCount;
        const startX = window.innerWidth * 0.9; // 90% right
        const startY = 0;

        // Initialize Points
        p.points = [];
        for (let i = 0; i <= segmentCount; i++) {
            p.points.push({
                x: startX,
                y: startY + i * segmentLength,
                oldx: startX,
                oldy: startY + i * segmentLength,
                pinned: i === 0
            });
        }

        // Initialize Sticks
        p.sticks = [];
        for (let i = 0; i < segmentCount; i++) {
            p.sticks.push({
                p0: i,
                p1: i + 1,
                length: segmentLength
            });
        }

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        let frameId = 0;

        const update = () => {
            if (!ctx || !canvas) return;

            // Physics Params
            const friction = 0.99;
            const gravity = 0.5;

            // 1. Update Points
            for (let i = 0; i < p.points.length; i++) {
                const pt = p.points[i];
                if (pt.pinned) continue;
                // If this is the dragging point, don't update via physics
                if (dragRef.current.isDragging && i === p.points.length - 1) continue;

                const vx = (pt.x - pt.oldx) * friction;
                const vy = (pt.y - pt.oldy) * friction;

                pt.oldx = pt.x;
                pt.oldy = pt.y;

                pt.x += vx;
                pt.y += vy;
                pt.y += gravity;
            }

            // 2. Constrain Sticks (Iterate multiple times for stiffness)
            for (let iter = 0; iter < 5; iter++) {
                for (let s of p.sticks) {
                    const p0 = p.points[s.p0];
                    const p1 = p.points[s.p1];

                    const dx = p1.x - p0.x;
                    const dy = p1.y - p0.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const diff = s.length - dist;
                    const percent = diff / dist / 2;
                    const offsetX = dx * percent;
                    const offsetY = dy * percent;

                    if (!p0.pinned) {
                        // If p0 is dragged, don't move it via constraint
                        if (!(dragRef.current.isDragging && s.p0 === p.points.length - 1)) {
                            p0.x -= offsetX;
                            p0.y -= offsetY;
                        }
                    }
                    // If p1 is dragged, don't move it via constraint
                    if (!(dragRef.current.isDragging && s.p1 === p.points.length - 1)) {
                        p1.x += offsetX;
                        p1.y += offsetY;
                    }
                }
            }

            // 3. Render String
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.strokeStyle = '#9CA3AF'; // Gray-400
            ctx.lineWidth = 2;
            ctx.moveTo(p.points[0].x, p.points[0].y);
            for (let i = 1; i < p.points.length; i++) {
                ctx.lineTo(p.points[i].x, p.points[i].y);
            }
            ctx.stroke();

            // 4. Update DOM Bauble Position
            const endPt = p.points[p.points.length - 1];
            if (baubleRef.current) {
                // Determine rotation based on last stick angle
                const prevPt = p.points[p.points.length - 2];
                const angle = Math.atan2(endPt.y - prevPt.y, endPt.x - prevPt.x) - Math.PI / 2;

                baubleRef.current.style.transform = `translate(${endPt.x - 40}px, ${endPt.y}px) rotate(${angle}rad)`;
            }

            frameId = requestAnimationFrame(update);
        };

        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                p.points[0].x = window.innerWidth * 0.9;
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        frameId = requestAnimationFrame(update);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
        }
    }, []);

    // Global Mouse Handlers for Drag
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
            if (!dragRef.current.isDragging) return;

            const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

            const p = physics.current;
            const lastIdx = p.points.length - 1;

            p.points[lastIdx].x = clientX;
            p.points[lastIdx].y = clientY;
            // Reset momentum
            p.points[lastIdx].oldx = clientX;
            p.points[lastIdx].oldy = clientY;
        };

        const handleMouseUp = () => {
            if (dragRef.current.isDragging) {
                dragRef.current.isDragging = false;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        // Stop bubbling so we don't click things underneath immediately, 
        // but since we are dragging, we want to consume this event.
        e.stopPropagation();
        dragRef.current.isDragging = true;
    };

    return (
        <>
            {/* The String (Canvas) - Totally inert to mouse */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[100]"
            />

            {/* The Bauble (DOM) - Interactive */}
            <div
                ref={baubleRef}
                className={`fixed top-0 left-0 hover:cursor-grab active:cursor-grabbing z-[101] pointer-events-auto origin-top`}
                style={{ width: '80px', height: '100px', willChange: 'transform' }}
                onMouseDown={onMouseDown}
                onTouchStart={onMouseDown}
            >
                <svg width="80" height="100" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                    {/* Ring/Hook */}
                    <path d="M25 5C25 2.23858 27.2386 0 30 0C32.7614 0 35 2.23858 35 5" stroke="#D4AF37" strokeWidth="2" />

                    {/* Cap */}
                    <rect x="22" y="5" width="16" height="8" rx="2" fill="url(#gold-gradient)" />

                    {/* Ball */}
                    <circle cx="30" cy="45" r="30" fill="url(#red-gradient)" />

                    {/* Shine/Reflection */}
                    <circle cx="20" cy="35" r="5" fill="white" fillOpacity="0.3" />

                    {/* Decorative Band */}
                    <path d="M5 45C5 45 15 55 30 55C45 55 55 45 55 45" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.5" />

                    <defs>
                        <linearGradient id="gold-gradient" x1="22" y1="5" x2="38" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FCD34D" />
                            <stop offset="1" stopColor="#B45309" />
                        </linearGradient>
                        <radialGradient id="red-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 30) rotate(50) scale(40)">
                            <stop stopColor="#EF4444" />
                            <stop offset="1" stopColor="#991B1B" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </>
    );
}

export default ChristmasDecorations;
