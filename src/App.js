import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Header2 from './Header2'
import Login from './Login';
import Employee from './Employee'
// import Employee2 from './Employee2'
// import Callapi from './Callapi'


function App() {
  return (
    <div className="App">
      <Login />
      {/* <Callapi /> */}
      {/* <Header />
      <Header2 /> */}
      <Employee />
      {/* <Employee2 /> */}
    </div>
  );
}

export default App;
