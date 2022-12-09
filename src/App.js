//importing sass css
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
        {/* index element passes App with Home rendered as a child */}
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
