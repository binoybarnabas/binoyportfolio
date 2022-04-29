import React from 'react';

class Navigations extends React.Component
{
    render(){
        return (
            <div className="navBar">
               <h2>{this.props.name}</h2>
            </div>
        );

    }
    
}
export default Navigations;