import { useState } from 'react'; // 1. Import useState
import { X } from 'lucide-react'; // Import X for the close button

export default function Home() {
  // 2. Define state to handle the Modal visibility
  const [showModal, setShowModal] = useState(false);

  const stats = [
    { label: 'Net Balance', amount: '25,000', color: 'text-emerald-600', trend: '+12%' },
    { label: 'Total Income', amount: '25,000', color: 'text-slate-900', trend: '+5%' },
    { label: 'Total Spending', amount: '25,000', color: 'text-rose-500', trend: '-2%' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 relative">
      
      {/* 3. The Modal UI (Only shows if showModal is true) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black text-slate-900">New Transaction</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={24} className="text-slate-400" />
              </button>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Amount (KES)</label>
                <input type="number" placeholder="0.00" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Transaction Name</label>
                <input type="text" placeholder="e.g. Shopping" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 font-bold" />
              </div>
              <button type="submit" className="w-full py-4 bg-emerald-500 text-slate-950 font-black rounded-2xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-transform">
                Confirm Transaction
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 font-medium mt-1">Welcome back, Sam.</p>
        </div>
        {/* 4. Update the onClick to change the state */}
        <button 
          onClick={() => setShowModal(true)}
          className="bg-slate-950 text-white px-8 py-3.5 rounded-2xl font-bold shadow-xl hover:bg-emerald-500 hover:text-slate-950 transition-all active:scale-95 text-sm"
        >
          + Add Transaction
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-10">
        {stats.map((card, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{card.label}</p>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg bg-slate-50 ${card.color}`}>{card.trend}</span>
            </div>
            <h2 className="text-4xl font-black mt-4 text-slate-900">
              <span className="text-lg font-medium text-slate-300 mr-1">KES</span>
              {card.amount}
            </h2>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="space-y-6">
        <h3 className="text-xl font-black text-slate-900">Recent Activity</h3>
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="px-10 py-6 text-center">#</th>
                <th className="px-10 py-6">Transaction</th>
                <th className="px-10 py-6">Category</th>
                <th className="px-10 py-6 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { id: '01', name: 'Netflix Subscription', cat: 'Entertainment', amt: '1,200', type: 'out' },
                { id: '02', name: 'Salary Deposit', cat: 'Income', amt: '45,000', type: 'in' },
                { id: '03', name: 'Java House Coffee', cat: 'Food', amt: '850', type: 'out' }
              ].map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                  <td className="px-10 py-6 text-slate-300 font-bold text-center group-hover:text-slate-900">{row.id}</td>
                  <td className="px-10 py-6 font-bold text-slate-700">{row.name}</td>
                  <td className="px-10 py-6 text-slate-400 font-medium italic">{row.cat}</td>
                  <td className={`px-10 py-6 text-right font-black ${row.type === 'in' ? 'text-emerald-500' : 'text-slate-900'}`}>
                    {row.type === 'in' ? '+' : '-'} {row.amt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}