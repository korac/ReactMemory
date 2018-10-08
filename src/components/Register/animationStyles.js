export const spinnerTransitionStyles = {
  entered: {
    animationDuration: '6s',
    animationName: 'rotateSpinner',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  },
  exiting: {
    animationDuration: '6s',
    animationName: 'rotateSpinner',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationPlayState: 'paused'
  },
  exited: {
    animationDuration: '6s',
    animationName: 'rotateSpinner',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationPlayState: 'paused'
  }
};

export const cardsTransitionStyles = {
  entered: {
    transform: 'scale(0)',
    transition: 'all .2s ease .1s'
  }
};

export const userTransitionStyles = {
  entered: {
    transform: 'scale(1)',
    transition: 'all .2s ease .2s'
  }
};

export const defaultTitleStyles = {
  entering: {
    position: 'absolute',
    transform: 'translateY(-40px)',
    opacity: 0,
    transition: 'all .3s ease'
  },
  entered: {
    display: 'none'
  }
};

export const userTitleStyles = {
  entered: {
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'all .3s ease'
  }
};

export const defaultDescriptionStyles = {
  entering: {
    position: 'absolute',
    transform: 'translateY(-40px)',
    opacity: 0,
    transition: 'all .3s ease .1s'
  },
  entered: {
    display: 'none'
  }
};

export const userDescriptionStyles = {
  entered: {
    transform: 'translateY(0)',
    opacity: 1,
    transition: 'all .3s ease'
  }
};

export const registerTransitionStyles = {
  entering: {
    opacity: 0,
    transition: 'opacity .45s ease'
  }
};
