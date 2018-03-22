import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Header />} right={<Footer />} />;
}
function UserDialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }
  render() {
    return (
      <UserDialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me up!</button>
      </UserDialog>
    );
  }
  handleChange(e) {
    this.setState({ login: e.target.value });
  }
  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}`);
  }
}
export class Home extends React.Component {
  constructor() {
    super();
    this.state = { home: 'This is home page!' };
  }
  render() {
    return (
      <div>
        <p>{this.state.home}</p>
        <WelcomeDialog />
        <App />
        <SignUpDialog />
      </div>
    );
  }
}
