import { Route } from 'react-router-dom';
import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation/index';
import GalleryView from './components/GalleryView/index';


function App() { // the route needs to eb wrapped in routes and have element=
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Route exact path="/galleries/:galleryId">  
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </div>
  );
}

export default App;
