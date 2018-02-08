import React from 'react';

export class CityView extends React.Component {
  render() {
    return (
        <div className="col-sm">
          <h1 className="text-center mt-5 mb-5">Portland</h1>
          <div className="col-sm-8 offset-sm-2">
            <div className="input-group input-group-md mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-md">HHD</span>
                <span className="input-group-text" id="inputGroup-sizing-md">$123</span>
              </div>
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Max Amount</button>
              </div>
            </div>

            <div className="input-group input-group-md mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-md">SSD</span>
                <span className="input-group-text" id="inputGroup-sizing-md">$123</span>
              </div>
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Max Amount</button>
              </div>
            </div>

            <div className="input-group input-group-md mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-md">GPUs</span>
                <span className="input-group-text" id="inputGroup-sizing-md">$123</span>
              </div>
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Max Amount</button>
              </div>
            </div>

            <div className="input-group input-group-md mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-md">CPUs</span>
                <span className="input-group-text" id="inputGroup-sizing-md">$123</span>
              </div>
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Max Amount</button>
              </div>
            </div>

            <div className="input-group input-group-md mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-md">RAM</span>
                <span className="input-group-text" id="inputGroup-sizing-md">$123</span>
              </div>
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Max Amount</button>
              </div>
            </div>

            <div className="input-group input-group-md mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-md">Software</span>
                <span className="input-group-text" id="inputGroup-sizing-md">$123</span>
              </div>
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Max Amount</button>
              </div>
            </div>
          </div>
          <div className="col-sm text-center mt-5">
            <button type="button" className="btn btn-success mr-2">Buy Parts</button>
            <button type="button" className="btn btn-danger">Sell Parts</button>
          </div>
        </div>
      
    )
  }
}

export default CityView;