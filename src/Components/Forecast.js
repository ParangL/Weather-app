import React from "react";

const APIKEY = 'a9c71a9c62080321bd79005fdd4fe5ea';

export default class Forecast extends React.Component {

    state = {
        forecast: undefined
    }

    getForecast = async(e) => {
        e.preventDefault();
        const city= this.props.city;
        const country = this.props.country;
        const api_call_forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${APIKEY}&units=metric`);
        const forecastData = await api_call_forecast.json();    

    this.setState({
    forecast: forecastData.list
    });
}
    render() {
        var forecastList;

        if(this.state.forecast) {
            forecastList= this.state.forecast.map((forecast) => {
                return (<li>{forecast.dt_txt} Temp:{Math.round(forecast.main.temp)}</li>)
            });
        }
          
        return ( 
            <div>
                <button  onClick={this.getForecast}>See detailed forecast</button>                
                {this.state.forecast && <ul>{forecastList}</ul>} 
            </div>);
    }
}