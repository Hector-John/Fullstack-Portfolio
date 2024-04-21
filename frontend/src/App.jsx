import React ,{ useState } from 'react';
import Loader from './constants/Loader';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Index from './Pages/Home/Index'; 

const App = () => {

  const [loading , setloading] = useState(false);


  return (
    <div>
      {loading? <Loader/>: null}
        <Routes>
          <Route path="/" element={<Index />} />

        </Routes>
       


    </div>
  );
};

export default App;
