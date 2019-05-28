import React from 'react';
import Helmet from 'react-helmet';
import Top from './components/Top';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Body Check App</title>
        <meta name="description" content="CodeGritのReactコースチャレンジ12のために作られた体格診断アプリです。" />
      </Helmet>
      <Top />
    </div>
  );
}

export default App;
