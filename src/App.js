
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Task from './page/Task';
import Login from './page/Login'
import Register from './page/Register';
import Update from './page/Update';
import Delete from './page/Delete';
// import Private from './page/Private';


function App() {
  return (
    <div className="App">


   
        <Routes>
          {/* <Route path='/logout' element={<Private/>} />  */}
          <Route path='/task' element={<Task/>} />
          <Route path='/update/:id' element={<Update/>} />
          <Route path='/' element={< Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/delete/:id' element={<Delete/>} />
        </Routes>
     
    </div>
  );
}

export default App;
