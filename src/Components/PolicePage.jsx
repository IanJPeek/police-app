import React, { Component } from 'react';
import PoliceList from './PoliceList';
import axios from 'axios';

class PolicePage extends Component {
    state = {policeData: []}
    
    componentDidMount() {
        axios.get(`https://data.police.uk/api/crime-categories?date=2019-12`)
        .then((data) => {
            console.log(data)
            this.setState({policeData:data})
        })
    }

    render() {
        return (
            <main>
                <h1>This is the Police Page</h1>
                <PoliceList policeData={this.state.policeData} />
                
            </main>
        );
    }
}

export default PolicePage;