import React from 'react';
import BlogsItem from './components/BlogsItem';
import Input from './components/Input';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className=' mt-5'>
      <div className='w-full container mx-auto'>
        <Routes>
          <Route path="/blogitem"  element={<BlogsItem/>}/>
          <Route path="/"  element={<Input/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
