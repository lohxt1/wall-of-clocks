const baseVariant = {
  initial: {},
  visible: {},
  exit: {},
  hover: {},
};

const clockTextVariant = {
  initial: { opacity: 0, y: `0.25em` },
  visible: {},
  exit: {
    opacity: 0,
    y: `-0.25em`,
    transition: {
      delay: 0,
      duration: 0.25,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const clockStructureVariant = (idx) => ({
  initial: {
    opacity: 0,
    y: `2em`,
  },
  hover: {},
  exit: {
    opacity: 0,
    y: `-0.25em`,
    transition: {
      delay: 0,
      duration: 0.25,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: idx * 0.03,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
});

const clockVariantActive = {
  initial: {
    backgroundColor: `#f500`,
    border: `2px solid #00f`,
  },
  hover: {
    backgroundColor: `#f500`,
    border: `2px solid #00f`,
    transition: {
      delay: 0,
      duration: 0.001,
    },
  },
  exit: {},
  visible: {},
};

const clockVariant = {
  initial: {
    backgroundColor: `#00f`,
    border: `1px solid #f500`,
  },
  hover: {
    backgroundColor: `#f500`,
    border: `2px solid #00f`,
    transition: {
      delay: 0,
      duration: 0.001,
    },
  },
  exit: {},
  visible: {},
};

export { baseVariant, clockStructureVariant, clockTextVariant, clockVariant, clockVariantActive };
