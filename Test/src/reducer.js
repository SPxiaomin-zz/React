const initState = {
  isStart: false,
  musiclist: [
    {
      name: 'Everything in the World',
      file: 'http://7xkinp.com1.z0.glb.clouddn.com/%E6%9B%B2%E5%A9%89%E5%A9%B7%20-%20Everything%20In%20The%20World.mp3',
    },
    {
      name: 'Mockingbird',
      file: 'http://7xkinp.com1.z0.glb.clouddn.com/Mockingbird.mp3',
    },
  ],
  currentIndex: 0,
  isFirst: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        currentIndex: action.currentIndex,
        isStart: true,
      };
    case 'TOGGLE_START':
      return {
        ...state,
        isStart: !state.isStart,
      };
    case 'TOGGLE_FIRST':
      return {
        ...state,
        isFirst: !state.isFirst,
      };
    default:
      return state;
  }
};
