import  React from "react";

class Form extends React.Component
{
    render(){
      return (
        <div>
           <form onSubmit={this.props.getMeteo}>
             <input type="text" name="city" placeholder="city.."/>
             <input type="text" name="country" placeholder="country"/>
             <button>Envoyer</button>
           </form>
        </div>
      );
    }
}

export default Form;