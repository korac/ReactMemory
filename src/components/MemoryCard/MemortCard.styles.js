const memoryCardStyles = {
  width: '180px',
  height: '260px',
  border: '1px solid rgba(#333, 0.4)',
  borderRadius: '8px',
  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.2)',
  transformStyle: 'preserve-3d',
  WebkitTransition: 'all .5s ease',
  MozTransition: 'all .5s ease',
  msTransition: 'all .5s ease',
  OTransition: 'all .5s ease',
  transition: 'all .5s ease'
};

const cardSideStyles = {
  width: '148px',
  height: '228px',
  padding: '16px',
  position: 'absolute',
  backfaceVisibility: 'hidden'
};

const styles = {
  cardPerspective: {
    position: 'relative',
    perspective: '800px'
  },
  memoryCard: {
    ...memoryCardStyles
  },
  memoryCardFlipped: {
    ...memoryCardStyles,
    transform: 'rotateY(180deg)'
  },
  cardSide: {
    ...cardSideStyles
  },
  cardSideFront: {
    ...cardSideStyles,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: '8px',
    backgroundColor: '#fff'
  },
  frontBackground: {
    width: '100%',
    height: '100%'
  },
  cardSideBack: {
    ...cardSideStyles,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    transform: 'rotateY(180deg)',
    '& div': {
      width: '80%',
      height: '50%'
    }
  }
};

export default styles;
