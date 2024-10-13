/* global $ */
import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '500px',
        padding: '20px',
        boxSizing: 'border-box',
        zIndex: 1000,  // Ensure the modal is on top
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add a dark overlay
        zIndex: 999,  // Ensure the overlay is behind the modal but on top of other content
    }
};
const Popup = ({ isOpen, GameInfo, onClose, children }) => {


    function submitReport() {


        // DataFetcher('report', report_data).then((apidata) => {
        //     $("#popupformcontainer").css("display", "none");
        //     $("#popupresponsecontainer").css("display", "block");
        // });
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button className='btn btn-danger' onClick={onClose} style={{ float: 'right', backgroundColor: "#ff7d00", borderColor: "#ff7d00", boxShadow: "#ff7d00", color: "#fff" }}>X</button>
            {children}

            <div className='container' id='popupformcontainer'>
                <h3>Login</h3>

                <br />
                <div className='col-12' >
                    <label>Email:</label>
                    <input className='form-control' placeholder='Enter your email address' />
                </div>
                <br />
                <div className='col-12' >
                    <label>Password:</label>
                    <input className='form-control' placeholder='Enter your password' />
                </div>
                <br />
                <div className='col-12' align="center">
                    <button className='btn btn-warning' style={{ backgroundColor: "#ff7d00", borderColor: "#ff7d00", boxShadow: "#ff7d00", color: "#fff" }} onClick={() => { submitReport() }}>Login</button>
                </div>
                <small>

                </small>
            </div>


        </Modal>
    );
};
export default Popup;