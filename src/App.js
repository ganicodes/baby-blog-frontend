import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import SinglePost from './pages/singlePost/SinglePost';
import Write from './pages/write/Write';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/login" element={<Login />} />

          <Route exact path="/signup" element={<Signup />} />

          <Route exact path="/post/:id" element={<SinglePost />} />

          <Route exact path="/write" element={<Write />} />
        </Routes>
      </Router >
    </div >
  );
}

export default App;
