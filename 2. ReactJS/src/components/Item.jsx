import React, { Component } from "react";

class Item extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completada: true
    };
  }

  onClick = () => {
    const { completada } = this.state;
    this.setState({ completada: !completada });
  };

  render() {
    const { completada } = this.state;
    const { title } = this.props;

    return (
      <li>
        {
          completada ? (
            <strike>{title}</strike>
          ) : (
            <>{title}</>
          )
        }
        <input type="checkbox" checked={completada} onChange={this.onClick}/>
      </li>
    );
  }
}

export default Item;