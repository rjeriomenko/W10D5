import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation/index';


function App() {
  return (
    <GalleryNavigation galleries={harvardArt.records} />
  );
}

export default App;
