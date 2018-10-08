import React from 'react';
import { connect } from 'react-redux';

import { userLogout } from '../../../actions';
import ModalWrapper from '../ModalWrapper';
import TrophyIcon from '../../icons/TrophyIcon/TrophyIcon';

const GameOverModal = props => {
  const quitGame = () => {
    props.hideModal();
    props.userLogout();
  };

  return (
    <ModalWrapper
      {...props}
      width={400}
      showOk={false}
      headerIcon={TrophyIcon}
      headerIconColor="#fff"
    >
      <h1 className="modal__body-title">Well done!</h1>
      <p className="modal__body-content">
        Congratulations! You guessed all the cards.
      </p>
      <div className="modal__body-actions">
        <button>Restart</button>
        <button onClick={quitGame}>Quit</button>
      </div>
      {/*<button onClick={() => signIn('facebook')}>Facebook</button>*/}
    </ModalWrapper>
  );
};

export default connect(
  null,
  { userLogout }
)(GameOverModal);
