import React from 'react';

  class CitySelector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedCity: ''
      }

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({selectedCity: event.target.value})
    }

    render() {
      return (
        <div className="col-sm-4 offset-sm-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <label htmlFor="travelCitySelect" className="input-group-text">Location:</label>
            </div>
            <select name="travelCitySelect" id="travelCitySelect" className="custom-select" onChange={this.handleChange}>
              <option defaultValue>Choose...</option>
              <option value="Portland">Portland</option>
              <option value="Seattle">Seattle</option>
              <option value="Denver">Denver</option>
              <option value="Austin">Austin</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Silicon Valley">Silicon Valley</option>
              <option value="New York">New York</option>
              <option value="Raleigh">Raleigh</option>
            </select>
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={this.props.beginTravel}>Travel</button>
            </div>
          </div>
        </div>
      )
    }
  }

export default CitySelector;