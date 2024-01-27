import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import LandingPage from './components/LandingPage';
import GuideCreationPage from './components/GuideCreationPage'; 

export default function App() {
    return (<>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<GuideCreationPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>)
}

/*
<BrowserRouter>
  <Header />
  <main>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create" element={<GuideCreationPage />} />
    </Routes>
  </main>
  <Footer />
</BrowserRouter>
*/