import HtmlPage from './components/Pages/HtmlPage';
import LandingPage from './components/Pages/LandingPage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/html/home" element={<HtmlPage/>} ></Route>
        </Routes>
      </Router>
    </>
);
}

export default App;
