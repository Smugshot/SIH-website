import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Route , Routes , useLocation} from "react-router-dom";
import Sidebar from './components/Sidebar';
import PrivateRoute from './helper/PrivateRoute';
import Dashboard from './Pages/Dashboard';
import StudentList from './Pages/StudentList';
import SumbitFrom from './Pages/SumbitFrom';
import Home from './Pages/Home/Home';

function App() {
  const location = useLocation()
  console.log(location.pathname);
  return (
    <div>
      {location.pathname === '/login' || location.pathname === '/register' ? null :  <Sidebar/>}
      <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/' element={
            <PrivateRoute component={Home}/>
          } />
          <Route path='/dashboard' element={
            <PrivateRoute component={Dashboard}/>
          } />
          <Route path='/studentlist' element={
            <PrivateRoute component={StudentList}/>
          } />
          <Route path='/sumbitfrom' element={
            <PrivateRoute component={SumbitFrom}/>
          } />
      </Routes>
    </div>
  );
}
export default App;
