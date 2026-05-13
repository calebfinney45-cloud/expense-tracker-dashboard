import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Wallets from './pages/Wallets';
import Transactions from './pages/Transactions';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="wallets" element={<Wallets />} /> 
        <Route path="transactions" element={<Transactions />} />
        {/* The "Coming Soon" placeholders are fine for routing tests! */}
        <Route path="categories" element={<div className="p-20 text-center text-3xl font-black text-slate-200 uppercase">Categories Coming Soon</div>} />
        <Route path="profile" element={<div className="p-20 text-center text-3xl font-black text-slate-200 uppercase">Profile Coming Soon</div>} />
      </Route>
    </Routes>
  );
}