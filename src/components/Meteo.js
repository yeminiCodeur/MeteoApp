import  React from "react";

class Meteo extends React.Component
{
    render(){
      return (
        <div>
             <div className="weather__info">
               {

                 this.props.city && this.props.country &&  <p className="weather__key">Location: 
                    <span className="weather__value">  {this.props.city} {this.props.country}</span></p>
              
               }
               {
                 this.props.temperature &&  <p className="weather__key">Temperature: 
                 <span className="weather__value">   {this.props.temperature}</span> </p>
               }
               {
                 this.props.humidity &&  <p className="weather__key">Humidite: 
                 <span className="weather__value">  {this.props.humidity}</span> </p> 
                 
              }
               {
                 this.props.desc &&  <p className="weather__key">Description:  
                   <span className="weather__value">  {this.props.desc}</span> </p> 
               }
               {
                 this.props.error &&  <p className="weather__error"> {this.props.error} </p> 
               }
             </div>
        </div>
      );
    }
}

export default Meteo;