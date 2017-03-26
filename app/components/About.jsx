var React = require ('react');

// var About = React.createClass({
//   render:function(){
//     return(
//       <h3>About component</h3>
//     )
//   }
// });

var About = (props) =>{
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on react. I have built this...</p>
      <p>Here are some of the tools I used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - this was the javascript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
