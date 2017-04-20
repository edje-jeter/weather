var React = require('react');
var ZipCode = require('./ZipCode');

class App extends React.Component {
	render () {
  	return (
  		<div className='container'>
  			
  			<div className='navbar'>
  				<h1>--- clever title ---</h1>
  				<ZipCode
          	direction='row'
         		onSubmitZipcode={function(){}}
       			onUpdateZipcode={function(){}}
       			zipcode={123} />
  			</div>  {/* End navbar */}

  			<div className='home-container' 
  			     style={{backgroundImage: "url('app/images/pattern.svg')"}}>
  				<h1 className='header'>Enter a City and State</h1>
  				<ZipCode
       			direction='column'
          	onSubmitZipcode={function(){}}
          	onUpdateZipcode={function(){}}
          	zipcode={123} /> 
  			</div>  {/* End home-container */}

  		</div>  // End container
  	)
	}
};

module.exports = App;
