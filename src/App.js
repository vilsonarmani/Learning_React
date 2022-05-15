import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  /* 
   instead of using the class constructor, you can use the class fields
   */
  /*
  constructor(props) {
    super(props);
    // boundFunction ou Bound Method
    //this.handlePClick = this.handlePClick.bind(this);
    // may you have to use arrow functions to bind the context
    // like this: this.handlePClick = () => this.handlePClick();

    this.state = {
      name: 'Luciana',
      age: '28',
      counter: 0
    };

  }*/

  state = {
    name: 'Luciana',
    age: '28',
    counter: 0
  };

  handlePClick = () => {
    this.setState({ name: 'Vilson' });
    /* const { name } = this.state;
    console.log(`<p> Clicado ${name}`); */
  }

  handleAClick = (event) => {
    event.preventDefault(); //previne o comportamento padrão do evento
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }


  render() {
    const { name, age, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            Click <code>{name} - {age} anos</code>.
          </p>
          <a
            className="App-link"
            onClick={this.handleAClick}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link Clicado {counter} vezes
          </a>
        </header>
      </div>
    );
  }
}


// function App(luciana) {
//   let valor;

//   if (luciana.hasvalue)
//     valor = luciana
//   else
//     valor = 'src/App.js';


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <br />
//           Edit <code>{valor}</code> e salve para recarregar. <br />
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
