import React, { Component } from 'react';
// import rafayPicture from './assets/rafay.jpg';
import './App.css';

import Profile from './Profile/Profile';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';


class App extends Component {

  state = {isLoading: true};
  componentDidMount() {this.setState({ isLoading: false })}

  render() {
    const Loader = () => (<div className="mdl-spinner mdl-js-spinner is-active loader"></div>);
    const Main = () =>(
      <main>
        <section className="section">
          <Profile/>
        </section>
        <section className="section">
          <Skills/>
        </section>
        <section className="section">
          <Contact/>
        </section>
      </main>
    );

    let result = <Loader/>;
    if(!this.state.isLoading)
      result = <Main/>;

    return (result);
  }
}

export default App;
