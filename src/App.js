import { ShopProvider } from './ShopContext';



import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './Pages/Landing.jsx';



function App() {
  return (
    <div>
      
    <ShopProvider>
      <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<Landing/>}/>
      
       
      </Routes>
      

      </BrowserRouter>
      </ShopProvider>
     
    </div>
  );
}

export default App;
