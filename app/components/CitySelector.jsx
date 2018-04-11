import React from 'react';

  class CitySelector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedCity: '',
        cities: ['Portland', 'Seattle', 'Denver', 'Austin', 'San Francisco', 'Silicon Valley', 'New York', 'Raleigh']
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitTravel = this.submitTravel.bind(this);
    }

    handleChange(event) {
      this.setState({selectedCity: event.target.value})
    }

    submitTravel(event) {
      event.preventDefault();
      this.props.beginTravel(this.state.selectedCity)

      this.setState({selectedCity: ''})
    }

    render() {
      const listCities = () => {
        const myCities = this.state.cities.filter(city => city != this.props.currentCity);
        return myCities.map(city => {
          return <option key={city} value={city}>{city}</option>
        })
      }
      
      const buttonToggle = () => {
        if (this.state.selectedCity === '') {
          $('#travel-btn').prop('disabled', true)
        } else {
          $('#travel-btn').prop('disabled', false)
        }
      }

      return (
        <div className="col-sm-4 offset-sm-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <label htmlFor="travelCitySelect" className="input-group-text">Location:</label>
            </div>
            <select name="travelCitySelect" id="travelCitySelect" className="custom-select" onChange={this.handleChange}>
              <option value="">Choose...</option>
              {listCities()}
            </select>
            <div className="input-group-append">
              {buttonToggle()}
              <button id="travel-btn" type="button" className="btn btn-primary" onClick={this.submitTravel}>Travel</button>
            </div>
          </div>
        </div>
      )
    }
  }

export default CitySelector;