import { Component } from 'react';
import Statistics from './Statistics/Statistics';

class Container extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'left',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <Statistics /> */}
      </div>
    );
  }
}

export default Container;
