import { Route, Routes } from 'react-router-dom';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Homepage from './pages/Homepage/Homepage';
import Locationspage from './pages/Locationpage/Locationspage';
import Menupage from './pages/Menupage/Menupage';
import Navbar from './components/Navbar/Navbar';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Menubar from './components/Menubar/Menubar';
import './App.scss';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Menubar />
      </header>
      <main>
        <Routes>
          <Route index element={<Homepage />} />
          <Route
            path="locations/batumi"
            element={
              <Locationspage
                position={[41.64780334961626, 41.637785801151125]}
                locationOfTheRestaurant="batumi"
                adressOfTheRestaurant="44 Vakhtang Gorgasali St, Batumi"
              />
            }
          />
          <Route
            path="locations/tbilisi"
            element={
              <Locationspage
                position={[41.690252362708584, 44.80768211499577]}
                locationOfTheRestaurant="tbilisi"
                adressOfTheRestaurant="49 Kote Afkhazi St, T'bilisi"
              />
            }
          />
          <Route path="menu" element={<Menupage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>
      <footer>
        <ContactInfo />
      </footer>
    </>
  );
}

export default App;
