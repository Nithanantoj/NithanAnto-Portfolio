import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  const createStars = (ctx, width, height, numStars) => {
    const stars = [];
    
    // Create rotating stars
    for (let i = 0; i < numStars; i++) {
      const sizeRandom = Math.pow(Math.random(), 3);
      const size = sizeRandom * 1.4 + 0.1;
      
      // Use square root distribution for more stars near center
      const distanceRandom = Math.sqrt(Math.random());
      const distance = distanceRandom * (width / 2);
      
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: size,
        brightness: Math.random() * 0.5 + 0.5,
        angle: Math.random() * Math.PI * 2,
        distance: distance,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        isStatic: false
      });
    }
    
    // Add static stars in the center region
    const centerStars = Math.floor(numStars * 0.2); // 20% more stars for center
    for (let i = 0; i < centerStars; i++) {
      const sizeRandom = Math.pow(Math.random(), 3);
      const size = sizeRandom * 0.7 + 0.2; // Slightly smaller static stars
      
      // Create stars within the center region
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (width / 6); // Limit to central 1/3 of width
      const x = width / 2 + Math.cos(angle) * distance;
      const y = height / 2 + Math.sin(angle) * distance;
      
      stars.push({
        x: x,
        y: y,
        size: size,
        brightness: Math.random() * 0.4 + 0.3, // Slightly dimmer static stars
        twinkleSpeed: Math.random() * 0.01 + 0.005, // Slower twinkling for static stars
        twinklePhase: Math.random() * Math.PI * 2,
        isStatic: true
      });
    }
    
    return stars;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    const stars = createStars(ctx, canvas.width, canvas.height, 1000);
    let rotation = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      rotation += 0.0010;

      stars.forEach(star => {
        let x, y;
        
        if (star.isStatic) {
          // Static stars stay in place but still twinkle
          x = star.x;
          y = star.y;
        } else {
          // Rotating stars
          const rotatedAngle = star.angle + rotation;
          x = centerX + Math.cos(rotatedAngle) * star.distance;
          y = centerY + Math.sin(rotatedAngle) * star.distance;
        }

        // Calculate twinkling effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = (Math.sin(star.twinklePhase) + 1) / 2;
        const brightness = star.brightness * (0.20 + twinkle * 0.8);

        // Draw star
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();

        // Add subtle glow effect only to slightly larger stars
        if (star.size > 0.5) {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, star.size * 1.5);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.2})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'black',
        pointerEvents: 'none'
      }}
    />
  );
};

export default StarField;
