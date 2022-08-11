import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greetings from './components/Greetings';
import NotFound from './components/NotFound';
import store from './redux/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Greetings</h1>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Greetings />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
