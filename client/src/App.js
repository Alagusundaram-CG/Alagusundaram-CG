
import React, { useEffect } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom'
import { initGA, logPageView } from './utils/google_analytics';

import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/profile.css";


// ESports Header

import Mainlayout from './layout/mainlayout';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import WebGames from './pages/webgames';
import PlayWebGame from './pages/playgame';
import OurGames from './pages/ourgames';
import MrRacer from './components/ourgames/mrracer';
import MathKing from './components/ourgames/mathking';
import PorGame from './components/ourgames/por';
import EmojiSmasher from './components/ourgames/emojismasher';
import LudoX from './components/ourgames/ludox';
import Blog from './pages/blog';
import Careers from './pages/careers';
import ContactUs from './pages/contactus';
import PrivacyPolicy from './pages/privacy_policy';
import MrRacerPromocode from './pages/promocode';
import ESportsLandingScreen from './pages/esports';
import ChennaigamesBrochure from './pages/brochure';
import RedirectToPlayStore from './components/playstore';
import SubmitYourGame from './pages/game_submit';
import EsportsLayout from './layout/esports_layout';
import EmailAccountVerification from './pages/verify-account';
import Player_info from './pages/profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path='/promocode' element={<MrRacerPromocode />}>
      
    </Route> */}
      <Route path="/promocode" element={<RedirectToPlayStore />} ></Route>

      <Route path='/games' element={<EsportsLayout />} onChange={(location) => logPageView(location)}>
        <Route path='/games' element={<WebGames />} />
        <Route path='/games/:id' element={<PlayWebGame />} />
      </Route>
      <Route path='/esports' element={<EsportsLayout />} onChange={(location) => logPageView(location)}>
        {/* <Route path='/games' element={<WebGames />} />
        <Route path='/games/:id' element={<PlayWebGame />} /> */}
        <Route path='/esports' element={<ESportsLandingScreen />} />
        <Route path='/esports/verify-account/:id' element={<EmailAccountVerification />} />
      </Route>

      <Route path='/chennaigames_brochure2' element={<ChennaigamesBrochure />}>

      </Route>
      <Route path='/chennaigames_brochure' element={<ChennaigamesBrochure />}>

      </Route>
      <Route path='/' element={<Mainlayout />} onChange={(location) => logPageView(location)}>
        <Route index element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/profile' element={<Player_info/>}/>
        
        <Route path='/ourgames' element={<OurGames />} />
        <Route path='/mrracer' element={<MrRacer />} />
        <Route path='/mathking' element={<MathKing />} />
        <Route path='/por' element={<PorGame />} />
        <Route path='/emojismasher' element={<EmojiSmasher />} />
        <Route path='/ludox' element={<LudoX />} />
        <Route path='/promocode.php' element={<RedirectToPlayStore />} />

        <Route path='/blog' element={<Blog />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/privacy_policy' element={<PrivacyPolicy />} />
        <Route path='/submit-game' element={<SubmitYourGame />} />
        <Route path='/privacy_policy.html' element={<PrivacyPolicy />} />


        <Route path='/games/mr_racer.html' element={<Navigate to="/mrracer" replace />} />
        <Route path='/games/por.html' element={<Navigate to="/por" replace />} />
        <Route path='/our_games.html' element={<Navigate to="/ourgames" replace />} />
        <Route path='/get_in_touch.html' element={<Navigate to="/contact-us" replace />} />
        <Route path='/our_story.html' element={<Navigate to="/about-us" replace />} />
        <Route path='/blogs/mathKing.html' element={<Navigate to="/mathking" replace />} />

        <Route path='*' element={<Home />} />
      </Route>
    </>
  )
);
const App = () => {

  useEffect(() => {
    // initGA();
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
