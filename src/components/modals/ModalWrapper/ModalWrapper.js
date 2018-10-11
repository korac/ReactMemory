import React from 'react';
import injectSheet from 'react-jss';

import styles from './ModalWrapper.styles';

const ModalWrapper = props => {
  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) {
      props.hideModal();
    }
  };

  const HeaderIcon = props.headerIcon;
  const { classes } = props;

  return (
    <div className={classes.modalOverlay} onClick={handleBackgroundClick}>
      <div className={classes.modal}>
        <header className={classes.modalHeader}>
          <HeaderIcon color={props.headerIconColor} />
        </header>
        <div className={classes.modalBody}>{props.children}</div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(ModalWrapper);
