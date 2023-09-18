import React from 'react';
import './App.css';
import MyCalendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Calendar App</h1>
      </header>
      <main>
        <MyCalendar /> {/* Use your calendar component here */}
      </main>
    </div>
  );
}

export default App;
