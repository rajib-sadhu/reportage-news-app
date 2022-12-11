
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Stack } from 'react-bootstrap';
import { RouterProvider } from 'react-router-dom';


import { routes } from './Routes/Routes';


function App() {
  return (
    <>
    
      <RouterProvider router={routes} >

      </RouterProvider>

    </>
  );
}

export default App;
