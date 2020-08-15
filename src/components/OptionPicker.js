import React from "react";
import {
  Container,
  Header,
  Dropdown,
  Button,
  Divider
} from "semantic-ui-react";
import "./OptionPicker.css";

const genderOptions = [
  {
    text: "All",
    value: "All"
  },
  {
    text: "Male",
    value: "male"
  },
  {
    text: "Female",
    value: "female"
  }
];

const natOptions = [
  {
    text: "All",
    value: "All"
  },
  {
    text: "US",
    value: "US"
  },
  {
    text: "GB",
    value: "GB"
  },
  {
    text: "IE",
    value: "IE"
  },
  {
    text: "AU",
    value: "AU"
  },
  {
    text: "BR",
    value: "BR"
  },
  {
    text: "CA",
    value: "CA"
  },
  {
    text: "CH",
    value: "CH"
  },
  {
    text: "DE",
    value: "DE"
  },
  {
    text: "DK",
    value: "DK"
  },
  {
    text: "ES",
    value: "ES"
  },
  {
    text: "FI",
    value: "FI"
  },
  {
    text: "FR",
    value: "FR"
  },
  {
    text: "IR",
    value: "IR"
  },
  {
    text: "NL",
    value: "NL"
  },
  {
    text: "NZ",
    value: "NZ"
  },
  {
    text: "TR",
    value: "TR"
  }
];



const OptionPicker = props => (
  <Container textAlign="left">
    <Header as="h4" content="Pick a gender" />
    <Dropdown
      onChange={props.valueChange}
      options={genderOptions}
      value={props.gender}
      fluid
      selection
    />
    <br />
    <Header as="h4" content="Pick a Country" />
    <Dropdown
      onChange={props.natChange}
      options={natOptions}
      value={props.nat}
      fluid
      selection
      search
    />

    <Button
      onClick={props.handleClick}
      color="blue"
      fluid
      className="option-picker__button"
    >
      Change
    </Button>
    <Divider className="option-picker__divider" />
  </Container>
);

export default OptionPicker;
