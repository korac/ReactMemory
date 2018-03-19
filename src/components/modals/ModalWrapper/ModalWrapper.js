import React from "react";

const ModalWrapper = (props) => {

    const handleBackgroundClick = (e) => {
        if(e.target === e.currentTarget) {
            props.hideModal();
        }
    };

    const HeaderIcon = props.headerIcon;

    return (
        <div className="modal-overlay" onClick={handleBackgroundClick}>
            <div className="modal">
                <header className="modal__header">
                    <HeaderIcon color={props.headerIconColor} />
                </header>
                <div className="modal__body">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default ModalWrapper;