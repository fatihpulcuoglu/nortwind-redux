import React from 'react';
import {Container} from 'reactstrap';
import Navi from '../navi/Navi.navi';
import Dashboard from './Dashboard.root';

function App() {
  return (
    <Container>
        <Navi/>
        <Dashboard/>
    </Container>
  );
}

export default App;
