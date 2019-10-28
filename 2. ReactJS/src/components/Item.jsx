import React, { Component } from "react";

class Item extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completada: props.completada
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
          /* Renderizamos condicionalmente */
          completada ? (
            <del>{title}</del>
          ) : (
            <>{title}</>
          )
        }
        {/* Esto es un componente controlado */}
        <input type="checkbox" checked={completada} onChange={this.onClick}/>
      </li>
    );
  }
}

export default Item;