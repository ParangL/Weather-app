import React from "react";
import Form from "./Form";
import Forecast from "./Forecast";

const APIKEY = "a9c71a9c62080321bd79005fdd4fe5ea";

class App extends React.Component {

    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,      
        error: undefined,        
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}&units=metric`);
        const data = await api_call.json();        
       
        if(city && country) {            
            this.setState({
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                description: data.weather[0].description, 
                icon: data.weather[0].main,              
                error:""
        });
      }
      else {
        this.setState({
            city: undefined,
            country: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            icon: undefined,
            error: "Please enter a valid location!"
        });
      }
    }

    render() {
        
        return(
            <div>              
               <Form getWeather={this.getWeather}/>
               {this.state.city && this.state.country && <p>Location: {this.state.city} , {this.state.country}</p>}
               {this.state.temperature && <p>Temperature: {this.state.temperature}</p>}                           
               {this.state.humidity && <p>Humidity: {this.state.humidity}</p>} 
               {this.state.description && <p>Description: {this.state.description}</p>} 
               {this.state.city && this.state.country && this.state.icon === "Clear" && <img src={require('../pics/Clear.png')} alt="clear" />}
               {this.state.city && this.state.country && this.state.icon === "Clouds" && <img src={require('../pics/Clouds.png')} alt="clouds" />}
               {this.state.city && this.state.country && this.state.icon === "Rain" && <img src={require('../pics/Rain.png')} alt="rain" />}
               {this.state.city && this.state.country && this.state.icon === "Snow" && <img src={require('../pics/Snow.png')} alt="snow" />}
               {this.state.city && this.state.country && this.state.icon === "Mist" && <img src={require('../pics/Mist.png')} alt="mist" />}
               {this.state.error && <p>{this.state.error}</p>}  
               <Forecast
               city={this.state.city} country={this.state.country} />              
            </div>
        );
    }
};

export default App




