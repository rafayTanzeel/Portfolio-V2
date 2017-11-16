import React, { Component } from 'react';
import './App.css';

import Section from './Section/Section';
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
        <Section layout={"flex-stretch-wrapper"}>
          <Profile/>
        </Section>
        <Section layout={"flex-middle-wrapper"}>
          <Skills/>
        </Section>
        <Section layout={"flex-middle-wrapper"}>
          <Contact/>
        </Section>
      </main>
    );

    let result = <Loader/>;
    if(!this.state.isLoading)
      result = <Main/>;

    return (result);
  }
}

export default App;
