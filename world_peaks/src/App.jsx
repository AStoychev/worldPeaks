import { Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Map } from "./components/Map/Map";
import { About } from './components/About/About';


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Map />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
