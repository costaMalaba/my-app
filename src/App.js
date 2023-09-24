import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
]);


const App = () => {
    return (
      <div>
        {/* <div className='row'>
          <div className='col'>
            <Header />
          </div>

          <div className='col'>
            <Nav />
          </div>

          <div className='col'>
            <Main />
          </div>

          <div className='col'>
            <Footer />
          </div>
        </div> */}
        <RouterProvider router={router} />
      </div>
    );
}

export default App;
