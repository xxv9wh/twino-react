import React from 'react';
import imgHero from '../assets/img/image.png';


export class Hero extends React.Component {
  render(){

    return (
      <section className="container-fluid">
        <div className="container py-4">
          <div className="row">
            <div className="col-5 col-md-12">
              <img src={imgHero} alt="" className="img-responsive" />
            </div>
            <div className="col-7 col-md-12 align-center">
              <h1 className="font-75 fw-normal align-middle">Share as you go</h1>
            </div>
          </div>
        </div>
      </section>
    );

  }
}
