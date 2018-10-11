const userRegisteredContentStyles = {
  opacity: 0,
  transform: 'translateY(40px)'
};

const styles = {
  registerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  registerCard: {
    width: '571px',
    borderRadius: '6px',
    padding: '32px',
    backgroundColor: '#fff',
    boxShadow: '0 0 20px 0 #113366'
  },
  cardContent: {
    display: 'flex',
    marginTop: '16px'
  },
  cardContentIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid #e4e4e4',
    marginLeft: '8px',
    paddingRight: '40px',
    position: 'relative'
  },
  spinnerIcon: {
    height: '98px'

    // @keyframes rotateSpinner {
    //     from {
    //       transform: rotateZ(0deg);
    //     }
    //
    //     to {
    //       transform: rotateZ(360deg);
    //     }
    //   }
    //
    // }
  },

  cardsIcon: {
    width: '36px',
    position: 'absolute'
  },

  userIcon: {
    position: 'absolute',
    transform: 'scale(0)'
  },

  cardContentForm: {
    flexGrow: 1,
    paddingLeft: '32px'
  },
  formTitle: {
    marginBottom: '10px',
    color: '#111',
    fontSize: '28px',
    fontWeight: 'bold'
  },
  formDescription: {
    color: '#555',
    fontSize: '14px',
    lineHeight: '1.5'
  },
  formTitleUserRegisteredContent: {
    marginBottom: '10px',
    color: '#111',
    fontSize: '28px',
    fontWeight: 'bold',
    userRegisteredContentStyles
  },
  formDescriptionUserRegisteredContent: {
    color: '#555',
    fontSize: '14px',
    lineHeight: '1.5',
    userRegisteredContentStyles
  },
  formFields: {
    marginTop: '24px'
  },

  formField: {
    flexGrow: 1,
    margin: '16px 0'
  },

  fieldLabel: {
    marginBottom: '12px',
    color: '#777',
    fontSize: '12px',
    fontWeight: '500',
    '&:focus': {
      color: '#1e72bb'
    }
  },

  fieldInput: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '3px',
    border: 'solid 1px #d4d4d4',
    padding: '2px',
    '&:focus': {
      border: 'solid 1px #1e72bb',
      boxShadow: '0 0 4px 0 rgba(30, 114, 187, 0.5)'
    },
    '& input': {
      flexGrow: 1,
      border: 'none',
      padding: '10px 14px',
      caretColor: '#1e72bb',
      outline: 'none',
      '&.warning': {
        color: '#ff2121'
      }
    }
  },
  formSubmit: {
    display: 'flex',
    marginTop: '32px'
  },
  formButton: {
    flexGrow: 1,
    padding: '16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'rgba(30, 114, 187, 0.35)',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'not-allowed',
    outline: 'none'
  },

  formButtonActive: {
    flexGrow: 1,
    padding: '16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#36C991',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none'
  }
};

export default styles;
