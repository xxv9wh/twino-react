import React, { Component } from 'react';
import Modal from 'react-modal';
import imgUploadOrange from '../assets/img/btn-upload-orange.png';
import imgUpload from '../assets/img/btn-upload.png';

const customStyles = {
  overlay : {
    backgroundColor   : 'rgba(33, 33, 33, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export class Upload extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
      <li id="upload" className="nav-item btn-bordered pseudolink hidden-md-down" onClick={this.openModal}>Upload</li>
      <li id="upload" className="nav-item hidden-md-up" onClick={this.openModal}><img src={imgUpload} alt="" /></li>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Upload Modal"
        >
        <div className="text-center">
          <span className="font-34 py-3 d-inline-block upload-title">Upload your files</span>
            <div className="modal-upload">
              <div className="upload-border py-2 px-4">
                <img src={imgUploadOrange} alt="" className="d-block mx-auto" />
                <div className="pt-1">
                  <span className="d-block font-20 fw-semibold">Drop your files here</span>
                  <span className="">or choose from <a href="#">computer</a></span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
