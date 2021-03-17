import './App.css';
import logo from './logo.svg';

function App() {
  // const navBarOptions = [
  //   {
  //     name: 'Introduction',
  //     value: 'introduction',
  //     isActive: true,
  //     isDisabled: false
  //   },
  //   {
  //     name: 'Buttons',
  //     value: 'buttons',
  //     isActive: false,
  //     isDisabled: false
  //   },
  //   {
  //     name: 'Spinners',
  //     value: 'spinners',
  //     isActive: false,
  //     isDisabled: false
  //   },
  //   {
  //     name: 'Drop Downs',
  //     value: 'drop-downs',
  //     isActive: false,
  //     isDisabled: false
  //   },
  //   {
  //     name: 'List Group',
  //     value: 'list-group',
  //     isActive: false,
  //     isDisabled: false
  //   },
  //   {
  //     name: 'Play Ground',
  //     value: 'play-ground',
  //     isActive: false,
  //     isDisabled: false
  //   },
  //   {
  //     name: 'Modal',
  //     value: 'modal',
  //     isActive: false,
  //     isDisabled: true
  //   }];

  const listOptions = `[
    {"name": "A.P. Moller–Maersk Group. TEU: 3,012,172", "value": "ship1_imo"},
    {"name": "Mediterranean Shipping Company S.A. (MSC) TEU", "value": "ship2_imo"},
    {"name": "CMA CGM Group", "value": "ship3_imo", "isDisabled": true}, 
    {"name": "Hamburg Süd Group. TEU: 646,918", "value": "ship4_imo"},
    {"name": "China Ocean Shipping (Group) Company (COSCO)", "value": "ship5_imo"}
  ]`;

  const navHeader = 'Test title';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <core-card header="Nav bar">
        <section className="flex-col">
          <core-nav-bar header={navHeader}
            options='[{"name": "Home", "value": "/home"}, {"name": "Features", "value": "/features"}, {"name": "Pricing", "value": "/pricing"},  {"name": "Launch", "value": "/launch", "isDisabled": true}]'>
          </core-nav-bar>
        </section>
      </core-card>

      <core-card header="List Group">
        <section className="flex-col">
          <core-list-group
            options={listOptions}>
          </core-list-group>
        </section>
      </core-card>

      <core-card header="Card" subheader="This works based on slot projection">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, quam enim! Vel neque esse qui beatae
        aliquam, praesentium non nobis odit velit veniam error quo laboriosam enim harum. Laborum, error!
        Quae debitis quasi illum, optio eius at eaque molestias quo quam fugit reiciendis a eum adipisci officiis
        voluptate nobis atque magnam suscipit consectetur dolorem. Porro aspernatur sit nihil quasi doloremque.
        Molestiae, itaque aspernatur. Et nam velit incidunt, debitis eos illum ipsum, enim illo eum rem asperiores.
        Aliquid provident maiores deserunt facilis, delectus, suscipit dolore, impedit sit nemo distinctio porro
      enim!</p>
      </core-card>

      <core-card header="Spinners">
        <section className="flex-col">
          <core-spinner></core-spinner>
          <core-spinner type="border" color="primary"></core-spinner>
          <core-spinner type="border" color="secondary"></core-spinner>
          <core-spinner type="border" color="danger"></core-spinner>
          <core-spinner type="border" color="warn"></core-spinner>
          <core-spinner type="border" color="info"></core-spinner>
          <core-spinner type="grow" color="primary"></core-spinner>
          <core-spinner type="grow" color="secondary"></core-spinner>
          <core-spinner type="grow" color="danger"></core-spinner>
          <core-spinner type="grow" color="warn"></core-spinner>
          <core-spinner type="grow" color="info"></core-spinner>
        </section>
      </core-card>

      <core-card header="Buttons">
        <section className="flex-col">
          <core-btn color="primary">Primary</core-btn>
          <core-btn color="secondary">Secondary</core-btn>
          <core-btn color="danger">Error</core-btn>
          <core-btn color="warn">Warn</core-btn>
          <core-btn color="info">Info</core-btn>
          <core-btn color="success">Success</core-btn>
          <core-btn color="primary" type="outline">Primary</core-btn>
          <core-btn color="secondary" type="outline">Secondary</core-btn>
          <core-btn color="danger" type="outline">Error</core-btn>
          <core-btn color="warn" type="outline">Warn</core-btn>
          <core-btn color="info" type="outline">Info</core-btn>
          <core-btn color="success" type="outline">Succees</core-btn>
        </section>
      </core-card>

      <core-card header="Drop downs">
        <section className="flex-col">
          <core-drop-down label="Small" color="primary" size="small"
            options='[{"name": "Small option 1", "value": "Small option 1 value"}, {"name": "Small option 2", "value": "Small option 2 value"}]'>
          </core-drop-down>
          <core-drop-down label="Default"
            options='[{"name": "Option 1", "value": "Option 1 value"}, {"name": "Option 2", "value": "Option 2 value"}, {"name": "Option 3", "value": "Option 3 value"}]'>
            Default</core-drop-down>
          <core-drop-down label="Large" size="large" color="info"
            options='[{"name": "Option 1", "value": "Option 1 value"}]'>
          </core-drop-down>
        </section>
      </core-card>
      {/* <div className="demo-section">
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
      </div> */}
    </div>
  );
}

export default App;
