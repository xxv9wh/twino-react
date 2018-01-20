import React from 'react';

export class SignupForm extends React.Component {

  constructor(){
    super()
    this.state = {
      selectedPlan: 'monthly'
    }
  }

  render(){

    const pricePlans = [
      {
        name: "monthly",
        price: 120
      },
      {
        name: "weekly",
        price: 40
      }
    ];

    const pricePlansHtml = pricePlans.map(pricePlan => {
      return(
        <label className={"plan-option" + (this.state.selectedPlan === pricePlan.name ? ' plan-option-selected' : '' )}>
          <input className="d-none" type="radio" name="plan" value={pricePlan.name} onChange={(e) => this.setState({selectedPlan: e.target.value})}/>
          <span className="custom-indicator d-block"><i className="fa fa-circle" aria-hidden="true"></i></span>
          <div className="text-center fw-semibold">
            <sup className="font-24">€</sup><span className="font-45">{pricePlan.price}</span>
            <span className="font-12 d-block">{pricePlan.name}</span>
          </div>
        </label>
      )
    });

    return (
      <section id="section-action" className="container-fluid">
        <form>
          <div className="container py-5">
            <div className="row">
              <div className="col-6 col-md-12 mx-auto">
                <div className="row">
                  <div className="col-12">
                    <label for="email">Email Address</label>
                    <input className="form-item" type="email" name="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 py-2">
                    <span className="fw-semibold font-20">Choose the price</span>
                    <div className="row align-center">
                      {pricePlansHtml}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center py-1">
                    <input className="btn btn-submit fw-semibold" type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>


    );

  }
}
