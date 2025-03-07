import logo from './logo.svg';
import mbs from './mbs.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Treasure</h1>
      </header>
      <body>
      <p>Tell us one thing you enjoyed learning in this course. Edit this file and add your name + answer below:</p>
        <ol>
          <il>Zann: The practical sessions</il>
          <il>Convert this into a simple website using React and upload your website to the new repository</il>
          <il>Containerize the same app using Docker</il>
        </ol>
        <p>This is the picture from Singapore that I like:</p>
        <img src={mbs} alt="mbs" /> 
      </body>
    </div>
  );
}

export default App;
