import { Switch, Route } from 'react-router-dom';
import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation/index';
import GalleryView from './components/GalleryView/index';


function App() { // the route needs to eb wrapped in routes and have element=
  return (
    <div className="page-wrapper">
      <Switch>
        <Route exact path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route exact path="/">
          <GalleryNavigation galleries={harvardArt.records} />
        </Route>
        <Route>
          <h1>404: Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
