import './App.css';
import logo from './logo.svg';

function App() {

  return (
    <div className="App">
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>Sample React app</h2>
      <div className="demo-section">
        <core-btn color="primary">Primary</core-btn>
        <core-btn color="secondary">Secondary</core-btn>
        <core-btn color="error">Error</core-btn>
        <core-btn color="warn">Warn</core-btn>
        <core-btn color="info">Info</core-btn>
      </div>
      <div className="demo-section">
        <core-spinner></core-spinner>
        <core-spinner type="border" color="primary"></core-spinner>
        <core-spinner type="border" color="secondary"></core-spinner>
        <core-spinner type="border" color="error"></core-spinner>
        <core-spinner type="border" color="warn"></core-spinner>
        <core-spinner type="border" color="info"></core-spinner>
      </div>
      <div className="demo-section">
        <core-card header="Card header" subheader="Sub Header">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, quam enim! Vel neque esse qui beatae
          aliquam, praesentium non nobis odit velit veniam error quo laboriosam enim harum. Laborum, error!
          Quae debitis quasi illum, optio eius at eaque molestias quo quam fugit reiciendis a eum adipisci officiis
          voluptate nobis atque magnam suscipit consectetur dolorem. Porro aspernatur sit nihil quasi doloremque.
          Molestiae, itaque aspernatur. Et nam velit incidunt, debitis eos illum ipsum, enim illo eum rem asperiores.
          Aliquid provident maiores deserunt facilis, delectus, suscipit dolore, impedit sit nemo distinctio porro
            enim!</p>
        </core-card>
      </div>
    </div>
  );
}

export default App;
