import React, { Component } from "react";
import _ from "lodash";
import { Grid, Segment } from "semantic-ui-react";
import "./DataContainer.css";

import OptionPicker from "./OptionPicker";

class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "All",
      identity: [],
      nat: "All"
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  handleClick() {
    this.fetchData();
  }

  valueChange = (e, { value }) => {
    this.setState({ gender: value});
  };

  natChange = (e, { value }) => {
    this.setState({ nat: value});
  };

  fetchData() {
    fetch(`https://randomuser.me/api/?gender=${this.state.gender}&nat=${this.state.nat}`)
      .then(response => response.json())
      .then(data => {
        let user = data.results.map((user) => {
            let userElm = '';
            
            if (typeof user !== undefined && typeof user.name !== undefined && typeof user.picture != undefined) {
                userElm = <div key={user}>
                    <h2>{user.name.first} {user.name.last}</h2>
                    <img src={user.picture.large} alt="" />
                    <p>{user.email}</p>
                    <p>{user.location.country}</p>
                    </div>;
            }
            
            return(userElm)
        });

        this.setState({identity: user, isLoading: false});
    });
     
  }

  render() { let { identity } = this.state;
    
    return (
      <Grid centered className="data-container">
        <Segment className="data-container__wrapper">
          <OptionPicker
            gender={this.state.gender}
            nat={this.state.nat}
            handleClick={this.handleClick.bind(this)}
            valueChange={this.valueChange.bind(this)}
            natChange={this.natChange.bind(this)}
          />
          {identity}
        </Segment>
        
      </Grid>
    );
  }
}

export default DataContainer;
