import React, { Component } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { SignupForm } from './SignupForm';
import { Footer } from './Footer';

// import Modal from 'react-modal';

class App extends Component {
  render(){

    return (
      <div>
        <Navbar />
        <Hero />
        <SignupForm />
        <Footer />
      </div>
    );

  }
}

export default App;
