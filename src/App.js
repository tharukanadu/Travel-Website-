import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import NoPage from './pages/NoPage'
import PlaceRoute from './pages/PlacesRoute'
import BlogDetails from './pages/BlogDetail'


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/:id' element={<BlogDetails/>}/>
      <Route path='/places' element={<PlaceRoute/>}/>
      <Route path='*' element={<NoPage/>}/>
     </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
