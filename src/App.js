import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Calc from './containers/Calc/Calc';

function App() {
  return (
    <Layout>
      <Calc />
    </Layout>
  );
}

export default App;
