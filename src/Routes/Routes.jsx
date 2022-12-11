import { createBrowserRouter } from 'react-router-dom';

// main contents
import ErrorElement from '../Components/ErrorElement';
import Main from '../Components/Main/Main';

//Pages
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';



export const routes = createBrowserRouter([

   {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/home",
            element: <Home></Home>
        },
        {
            path:"/about",
            element: <About></About>
        }
    ]
   }

])