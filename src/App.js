import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/Home";
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
function App() {

  let router = createBrowserRouter([
    {
      path:"",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/aboutme",
          element:<AboutMe/>
        },
        {
          path:"/skills",
          element:<Skills/>
        },
        {
          path:"/projects",
          element:<Projects/>,
          
        },
        {
          path:"/contactme",
          element:<ContactMe/>
        }
      ]
    }

  ]) 

  return (
  
    
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
