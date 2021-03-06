import React from 'react';
import './App.css';
import Layout from './layout/Layout'
import Search from './components/search/Search'
// import Random from './components/random/Random'

const App = () => {
  return (
    <Layout>
      <div className="main">
        <div className="search-container">
          <Search />
        </div>
      </div>
    </Layout>
  );
}

export default App;
