import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThumbnailGallery from './components/ThumbnailGallery.jsx'
import Switz1 from './components/Switz1.jsx'
import Switz2 from './components/Switz2.jsx'
import Switz3 from './components/Switz3.jsx'
import Switz4 from './components/Switz4.jsx'
import Switz5 from './components/Switz5.jsx'
import Switz1Bigger from './components/Switz1Bigger.jsx'
import Switz2Bigger from './components/Switz2Bigger.jsx'
import Switz3Bigger from './components/Switz3Bigger.jsx'
import Switz4Bigger from './components/Switz4Bigger.jsx'
import Switz5Bigger from './components/Switz5Bigger.jsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> {/* Use BrowserRouter as Router */}
    <React.StrictMode>
      <Routes> {/* Use Routes */}
        <Route path="/" element={<App />} /> {/* Use Route */}
        <Route path="/thumbnails" element={<ThumbnailGallery />} /> {/* Use Route */}
        <Route path="/switz1" element={<Switz1 />} /> {/* Use Route */}
        <Route path="/switz2" element={<Switz2 />} /> {/* Use Route */}
        <Route path="/switz3" element={<Switz3 />} /> {/* Use Route */}
        <Route path="/switz4" element={<Switz4 />} /> {/* Use Route */}
        <Route path="/switz5" element={<Switz5 />} /> {/* Use Route */}
        <Route path="/switz1-bigger" element={<Switz1Bigger />} /> {/* Use Route */}
        <Route path="/switz2-bigger" element={<Switz2Bigger />} /> {/* Use Route */}
        <Route path="/switz3-bigger" element={<Switz3Bigger />} /> {/* Use Route */}
        <Route path="/switz4-bigger" element={<Switz4Bigger />} /> {/* Use Route */}
        <Route path="/switz5-bigger" element={<Switz5Bigger />} /> {/* Use Route */}
      </Routes>
    </React.StrictMode>
  </Router>,
);
