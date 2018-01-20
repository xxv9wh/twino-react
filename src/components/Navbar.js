import React, { Component } from 'react';
import imgLogo from '../assets/img/logo.png';
import { Upload } from './Upload';

export class Navbar extends Component {
  render(){

    return (
      <div id="header-navbar" className="container-fluid">
        <nav className="container">
          <div className="row">
            <div className="col-12">
              <ul className="navbar" role="navigation">
                <li className="navbar-brand">
                  <a href="/">
                    <img src={imgLogo} alt="" />
                  </a>
                </li>
                <li className="nav-item"><a href="#">Pricing</a></li>
                <Upload isOpen={true} contentLabel='Upload'></Upload>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

  }
}
