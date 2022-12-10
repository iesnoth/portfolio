//importing sass css
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
    <Sidebar/>
      <Routes>   
        <Route path="/" element={<Layout />} >
        {/* index element passes App with Home rendered as a child */}
        <Route index element={<Home/>}/>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
