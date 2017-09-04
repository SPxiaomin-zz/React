export const PLAY = (currentIndex) => ({
  type: 'PLAY',
  currentIndex,
});

export const TOGGLE_START = () => ({
  type: 'TOGGLE_START'
});

export const TOGGLE_FIRST = () => ({
  type: 'TOGGLE_FIRST'
});

export const CHANGE_PROGRESS = (progress) => ({
  type: 'CHANGE_PROGRESS',
  progress,
});
