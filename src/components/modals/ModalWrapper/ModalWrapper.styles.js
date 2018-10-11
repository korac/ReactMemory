const styles = {
  modalOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  modal: {
    width: '480px',
    borderRadius: '6px',
    backgroundColor: '#fff',
    boxShadow: '0 0 20px 0 #113366'
  },
  modalHeader: {
    margin: '0',
    padding: '20px',
    borderRadius: '6px 6px 0 0',
    backgroundColor: '#36C991'
  },
  modalBody: {
    padding: '18px',
    textAlign: 'center'
  },
  modalBodyTitle: {
    margin: 0
  },
  modalBodyContent: {
    margin: '12px 0',
    color: '#555',
    fontSize: '18px',
    lineHeight: '1.5'
  },
  modaBodyActions: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '18px',
    '& button': {
      width: '140px',
      padding: '12px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#36C991',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      outline: 'none'
    }
  }
};

export default styles;
