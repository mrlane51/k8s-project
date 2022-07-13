import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header' 
import Homepage from './pages/Homepage'
import Database from './pages/Database'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/database' element={<Database />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
