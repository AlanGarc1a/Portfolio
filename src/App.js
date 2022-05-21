import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
