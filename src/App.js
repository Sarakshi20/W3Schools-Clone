import HtmlPage from './components/Pages/HtmlPage';
import LandingPage from './components/Pages/LandingPage'
import HtmlIntro from './components/Pages/HtmlIntro';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HtmlEditor from './components/Pages/HtmlEditor';
import CssPage from './components/Pages/CssPage';
import CssIntro from './components/Pages/CssIntro';
import JSPage from './components/Pages/JSPage';
import Login from './components/Pages/Login'

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/html/home" element={<HtmlPage />} ></Route>
            <Route path='/html/intro' element={<HtmlIntro />}></Route>
            <Route path='/html/editors' element={<HtmlEditor />}></Route>
            <Route path='/css/home' element={<CssPage />}></Route>
            <Route path='/css/intro' element={<CssIntro />}></Route>
            <Route path='/js/home' element={<JSPage />}></Route>
            <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </>
);
}

export default App;
