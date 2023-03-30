// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Navigation/Sidebar/Sidebar';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Blog from './components/Pages/Blog/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/PageComponent/Login/Login';
import SignUP from './components/PageComponent/signup/SignUp';
// import Index from './components/Pages/Blog/index';
// import AddForms from './components/PageComponent/Blog/Add/AddForms';
function App() {
  return (
    // 
    <div className='relative'>
      <Router>
        <Toolbar />
        <Sidebar />
        <div className='absolute left-56 top-32 w-9/12'>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Blog />} />
            <Route exact path='/signup' element={<SignUP />} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
