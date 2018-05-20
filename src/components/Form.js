import React from 'react';
//
// export class Form extends React.Component{
//   render(){
//     return (
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name="city" placeholder="City" />
//         <input type="text" name="country" placeholder="country" />
//         <button>Get Weather</button>
//       </form>
//     );
//   }
// }

export const Form =props=>(
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City" />
    <input type="text" name="country" placeholder="country" />
    <button>Get Weather</button>
  </form>
);
