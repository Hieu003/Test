
import './App.scss';
import './Components/Header/Header'
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (

    <div className="app-container">
      <div className='head-container'>
        <Header />
      </div>

      <div className='main-container'>

        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          <Outlet></Outlet>
        </div>
      </div>


    </div>

  );
}

export default App;
