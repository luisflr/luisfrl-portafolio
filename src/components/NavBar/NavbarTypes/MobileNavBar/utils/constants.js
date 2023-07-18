/* Animation */

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      delay: 0.1,
    }
  }),
  closed: {
    clipPath: `circle(30px at 176px 40px)`,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const manuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const itemsColors = ["#00DFB8", "#00BECB", "#009DDD", "#007CF0"];