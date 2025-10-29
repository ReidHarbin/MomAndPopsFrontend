import logo from './logo.svg';
import './App.css';
import NavBar from './comps/NavBar';
import Home from './comps/Home';

function App() {
  return (
    <div className="w-screen h-screen bg-slate-200 text-red-700 overscroll-none">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
