import React, { useEffect, useRef } from 'react';

const BackgroundWaves = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width, height;
    
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    let time = 0;
    const lines = 25; // Number of wave lines
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Scale amplitude for mobile so it's more visible
      const isMobile = width < 768;
      const amplitudeScale = isMobile ? 1.5 : 1;
      
      // Draw waves
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        // Gold color: rgba(197, 160, 33, alpha)
        const alpha = 0.2 + (i / lines) * 0.7; // Increased opacity
        ctx.lineWidth = isMobile ? 2.5 : 2.0; // Thicker lines on mobile
        ctx.strokeStyle = `rgba(197, 160, 33, ${alpha})`;
        
        for (let x = 0; x <= width; x += 15) {
          // Complex math to create 3D undulating wireframe effect
          const wave1 = Math.sin(x * 0.003 + time) * (120 * amplitudeScale);
          const wave2 = Math.cos(x * 0.005 - time * 0.5 + i * 0.1) * (80 * amplitudeScale);
          const wave3 = Math.sin(x * 0.001 + time * 0.2) * (i * 8 * amplitudeScale);
          
          const y = (height / 2) + wave1 + wave2 + wave3 + (i - lines / 2) * (isMobile ? 25 : 20);
            
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      
      time += 0.015;
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10 blur-[4px] opacity-100 pointer-events-none"
    />
  );
};

export default BackgroundWaves;
