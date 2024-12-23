import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import News from './components/pages/News';
import Counter from './components/pages/Counter';
import Feedback from './components/pages/Feedback';
import Todo from './components/pages/Todo'
import GameApp from './components/game/GameApp';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import ProtectedRoute from './auth/protectedRoute';
import { Authprovider } from './auth/AuthContext';

const App = () => {
  return (
    <Authprovider>
 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/news" element={<ProtectedRoute><News/></ProtectedRoute>} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/game" element={<GameApp />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard'element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="*" element={<Home />}/>
      </Routes>
    </Router>
    </Authprovider>
  );
}

export default App;
