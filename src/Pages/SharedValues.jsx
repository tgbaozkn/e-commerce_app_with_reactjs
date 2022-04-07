import React from 'react'
import Right from '../components/Navbar/Navbar'

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {display: ''};

    }
    handleChange(e){
        this.setState({temperature: e.target.value});
    }
    render(){
        const display = 'none';
        return(
            <>
            <div>
            <input
          value={display}
          onChange={this.handleChange} />
          <Right display = {display} />
            </div>
            </>
        );
    }
}