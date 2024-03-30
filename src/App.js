import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import ViewEmployee from './components/ViewEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddEmployee/>}/>
      <Route path='/view' element={<ViewEmployee/>} />
      <Route path='/search' element={<SearchEmployee/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
