## Curso de React, Redux y ES6

[ReactJS](https://reactjs.org/) es una librería de JavaScript para la creación de interfaces de usuario interactivas desarrollada por Facebook.
Junto a Angular, y en menor medida Vue, es una de las tecnologías _frontend_ más demandadas por las empresas hoy en día.

React tiene una curva de aprendizaje relativamente sencilla al principio, pero que puede complicarse a la hora de implementar funcionalidades avanzadas. En este curso aprenderemos a ir desde la creación de un componente hasta la implementación de una sencilla página web. Por el camino conocerás todos los conceptos clave de React que te permitirán avanzar en tu carrera como desarrollador _frontend_.

### 1. ES6

Antes de comenzar a trabajar con React, vamos a hacer repaso de algunas funciones de ES6 que nos ayudarán a la hora de escribir código y manipular datos.
Los tópicos que vamos a cubrir en esta sección son los siguientes:

- var/ let / const
- Funciones auxiliares de arrays
  - map
  - filter
  - find
- Funciones flecha / lambda
- Plantillas de strings
- Argumentos por defecto
- Operadores rest y spread
- Desestructuración
- Promesas y async/await

### 2. ReactJS

En este apartado vamos a crear nuestro primer proyecto en React, con el que aprenderemos los conceptos básicos de esta librería. Después crearemos una aplicación en la que utilizaremos todos los conceptos aprendidos:

- JSX
- State y props
- Componentes con y sin estado
- Ciclo de vida
- Componentes controlados
- Renderizado condicional
- Aplicar estilos. [MaterializeCSS](https://materializecss.com/)
- Hooks

### 3. React y Redux

[Redux](https://redux.js.org/) es una librería que ofrece un contenedor predecible de estado, para aplicaciones JavaScript. Proporciona un sistema de control que simplifica el desarrollo de aplicaciones en las que la cantidad de funcionalidades puede hacer que el manejo del estado sea confuso, haciendo que el código pueda ser difícil de leer, y afecte al futuro mantenimiento del código.

Utilizando la librería [react-redux](https://react-redux.js.org/) podemos implementar el flujo de trabajo de Redux en react. Es importante saber que Redux no es una tecnología exclusiva de React, ya que podemos encontrar implementaciones en otros frameworks como Angular o Vue, con NgRx y Vuex respectivamente.

El flujo de trabajo de Redux puede ser complicado de entender al principio, por eso en este apartado y nos centraremos en ese aspecto, y más adelante crearemos una aplicación con todos los conocimientos que aprendimos aquí.

- Store
- Action creators y acciones
- Reducer
- mapStateToProps y mapDispatchToProps
- Redux devtools

Para obtener esto, vamos a ayudarnos de [create-react-app](https://github.com/facebook/create-react-app). CRA es un _boilerplate_ o plantilla que ofrece Facebook para implementar aplicaciones en React sin la necesidad de instalar ni configurar manualmente todas las herramientas como [webpack](https://webpack.js.org/) o [babeljs](https://babeljs.io/).

### 4. Redux vs Context API

Desde la versión 16.3.0 de React, se ha introducido una nueva funcionalidad llamada Context. Esto es un sistema para pasar datos a través del árbol de componentes sin la necesidad de pasar _props_ manualmente en cada nivel. En este sentido, _Context_ puede ser similar a _Redux_, sin embargo en este apartado aprenderemos con una aplicación muy sencilla las ventajas e inconvenientes de utilizar cada uno de estos sistemas.

### 5. Single Page Application (SPA)

En este último apartado vamos a crear una SPA con todos los conocimientos de React que hemos adquirido hasta ahora, ampliando algunos conceptos y descubriendo algunos nuevos.

Una SPA es una aplicación web que dinámicamente redirige al usuario en el navegador, sin la necesidad de recargar desde el servidor cada vez que el usuario intenta acceder a una página.

En este apartado aprenderemos los siguientes conceptos:

- Ayudas de desarrollo con prettier y eslint
- Implementación de rutas
- Formularios en redux
- Axios
- Acciones asíncronas en redux
- Implementar un backend de pruebas con json-server
