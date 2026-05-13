import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, CreditCard, PieChart, History, UserCircle } from 'lucide-react';

const links = [
  { path: '/', icon: LayoutDashboard, label: 'Overview' },
  { path: '/wallets', icon: CreditCard, label: 'My Wallets' },
  { path: '/categories', icon: PieChart, label: 'Analytics' },
  { path: '/transactions', icon: History, label: 'Activity' },
  { path: '/profile', icon: UserCircle, label: 'Account' },
];

export default function MainLayout() {
  return (
    // Background is now a light grey-blue for a cleaner feel
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      
      {/* Sidebar - Changed to Midnight Blue/Slate-950 */}
      <aside className="w-72 bg-slate-950 text-white flex flex-col fixed h-full z-10 shadow-2xl">
        <div className="p-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
               <CreditCard className="text-slate-950" size={22} />
            </div>
            <span className="text-xl font-black tracking-tighter">FINTRACK</span>
          </div>
        </div>
        
        <nav className="flex-1 px-6 space-y-2">
          {links.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              // Active state is now Emerald/Green for a "Money" feel
              className={({ isActive }) => `flex items-center gap-4 px-4 py-4 rounded-2xl font-bold transition-all duration-300 ${
                isActive 
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 translate-x-2' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <link.icon size={20} />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-8 border-t border-white/5">
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center">Version 1.0.4</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-72 p-14">
        <Outlet />
      </main>
    </div>
  );
}