import React from "react";

export default class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getWeather}>
                <h1>Weather Forecast App</h1>
                <input type="text" name="city" placeholder="City..."></input><br/>
                <input type="text" name="country" placeholder="Country..."></input><br/>
                <button>Get Weather</button>
            </form>
        );
    }
};

