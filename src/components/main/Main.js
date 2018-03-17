import React from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Home } from './home/Home';
import { Aboutus } from './aboutus/Aboutus';
import Contactus from './contactus/Contactus';
import { Switch, Route } from 'react-router-dom';

export class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contactus" component={Contactus} />
        <Footer />
      </div>
    );
  }
}
