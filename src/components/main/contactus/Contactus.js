import React from 'react';

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {index => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

class Contactus extends React.Component {
  constructor() {
    super();
    this.state = { contactus: 'This is Contact us Page!' };
  }
  render() {
    return (
      <div>
        <p> {this.state.contactus}</p>
        <ListOfTenThings />
      </div>
    );
  }
}

export default Contactus;
