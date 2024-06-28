const handleServiceClick = () => {
  setIsAnimating(!isAnimating);
  controls.start({
    scale: [1, 1.1, 1],  // Increased scale for a more noticeable effect
    rotate: [0, 10, -10, 0],  // Adding a rotation effect
    transition: { 
      duration: 0.6,  // Slightly longer duration
      ease: "easeInOut",  // Smoother easing function
      times: [0, 0.3, 0.7, 1],  // Timing for each keyframe
    },
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",  // Adding a subtle shadow effect
  });
};
