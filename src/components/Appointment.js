import React from 'react';
import './appointment.css';
import './Register.css';

class Appointment extends React.Component {
  render() {
    return (
      <div className="banner3">
        <div className="banner" style={{backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/form-banners/banner2/banner-bg.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="text-container">
                <h3 className="my-3 text-white font-weight-medium text-uppercase"
                style={{ color: 'Black',fontSize:'34px', fontWeight: 'bold' }}
                >Book Appointment</h3>
                <div className="bg-white">
                <div className="Reg1">
            <form >
                <div className="form-control-wrapper">
                <label className="form-label-1">
                    Name:
                    <input type="text"  className="form-control"
                placeholder="Enter Name"/>
                </label>
                <br />
                <label className="form-label-1">
                    Email:
                    <input type="email"  className="form-control"
                placeholder="Enter E-mail"/>
                </label>
                <br />
                <label className="form-label-1">
                                Passport:
                                <input type="passport"  className="form-control"
                placeholder="Enter Passport Number"/>
                            </label>
                <br />
                <label className="form-label-1">
                    Phone Number:
                    <input type="tel"  className="form-control"
                placeholder="Enter Contact Number"/>
                </label>
                <br />
                
                <label className="form-label-1">
                    Description:
                    <textarea
                                   className="form-control"
            placeholder="Enter Description"
          />
                </label>
                <br />
                    
                </div>
                <button type="submit" className="submitbutton">Register</button>
            </form>

           

            
               
               

           

            
            
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
