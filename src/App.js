import React from  "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Meteo from "./components/Meteo";

const API_KEY ="1dfc8f1d5f0163c729a171aed731504c";
class App extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    error: undefined
  }

  getMeteo = async (e) =>{
    e.preventDefault();
    const city =    e.target.elements.city.value;
    const country =    e.target.elements.country.value;
    const  api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metrics`);
    const data =  await api_call.json();
     if(city && country){
      console.log(data);

        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          desc: data.weather[0].description,
          error: ""
        });
     }else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        desc: undefined,
        error: "Hey dud please type your query"
      });
     

     }
  }
  render(){
    return(
      <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                <Form  getMeteo={this.getMeteo}/>
                  <Meteo 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  desc={this.state.desc}
                  error={this.state.error}
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      );
  }
}

export default App;