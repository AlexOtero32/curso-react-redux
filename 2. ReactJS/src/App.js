import React from "react";
import "@babel/polyfill";

import Listado from "./components/Listado.jsx";
import Item from "./components/Item.jsx";

class App extends React.Component {

  state = {
    tareas: []
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/tareas");

    const tareas = await response.json();

    this.setState({
      tareas
    });
  }

  render() {
    const { tareas } = this.state;

    return (
      <>
        <h1>Tareas</h1>
        <Listado>
          {tareas.map(tarea =>
            <Item title={tarea.title} completada={tarea.completada} key={tarea.id}/>
          )}
        </Listado>
      </>
    );
  }
}

export default App;