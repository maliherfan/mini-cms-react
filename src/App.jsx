import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import PagesDashboard from './pages/admin/pagesdashboard/pagesDashboard';
import PageEditor from './pages/admin/pageeditor/PageEditor';
import PublicPage from './pages/public/PublicPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<PagesDashboard />} />
        <Route path="/admin/editor/:id" element={<PageEditor />} />
        <Route path="pages/:slug" element={<PublicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
