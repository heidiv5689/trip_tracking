import About from './components/shared/About';
import Home from './components/shared/Home';
import Users from "./components/users/Users";

import { Routes, Route } from 'react-router-dom';

import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar'
import Trips from './components/trips/Trips';

const App = () => (
  <>
  
    
    <Navbar />

    
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/users' element={<Users />} />
      <Route exact path='/:userId/trips' element={<Trips />} />
      <Route exact path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;