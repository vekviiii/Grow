import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'; // Import Tailwind CSS
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
