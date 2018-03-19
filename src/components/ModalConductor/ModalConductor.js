import React from "react";
import { connect } from "react-redux";
import GameOverModal from "../modals/GameOverModal";
import { hideModal } from "../../actions";

const ModalConductor = props => {
    switch(props.currentModal) {
        case 'GAME_OVER':
            return <GameOverModal {...props}/>;
        default:
            return null;
    }

};

function mapStateToProps({ modal }) {
    return { currentModal: modal.currentModal };
}

export default connect(mapStateToProps, { hideModal })(ModalConductor);