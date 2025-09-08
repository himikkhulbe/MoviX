import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'
import Moviedetails from './components/Moviedetails'
import Tvdetails from './components/Tvdetails'
import Peopledetails from './components/Peopledetails'
import Trailer from './components/partials/Trailer'
import Notfound from './components/Notfound'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movie/details/:id' element={<Moviedetails />} >
        <Route path='/movie/details/:id/trailer' element={<Trailer />} />
        </Route>
        <Route path='/tvshows' element={<Tvshows />} />
        <Route path='/tv/details/:id' element={<Tvdetails />} >
        <Route path='/tv/details/:id/trailer' element={<Trailer />} />
        </Route>
        <Route path='/people' element={<People />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/person/details/:id' element={<Peopledetails />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App