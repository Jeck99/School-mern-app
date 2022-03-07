import { useState } from 'react';
import './App.css';
import AppRouter from './App-Router';
import UserContextProvider from './context/user-context';
const App = () => {


  return (
    <div className="App">
      <header className="App-header">
        <UserContextProvider>
          <AppRouter />
        </UserContextProvider>
      </header>
    </div>
  );
}

export default App;
