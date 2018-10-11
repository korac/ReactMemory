const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid rgba(255, 255, 255, 0.4)'
  },
  sidebarHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  reactIcon: {
    width: '50px',
    height: '50px'
  },
  sidebarBody: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  sidebarBodyContent: {
    flexGrow: 1,
    padding: '20px',
    color: '#fff'
  },
  gameStats: {},
  pairsGuessed: {
    fontSize: '64px',
    textAlign: 'center'
  },
  sidebarBodyLogout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontSize: '14px',
    cursor: 'pointer'
  },
  logoutMessage: {
    marginTop: '8px',
    color: '#fff'
  }
};

export default styles;
