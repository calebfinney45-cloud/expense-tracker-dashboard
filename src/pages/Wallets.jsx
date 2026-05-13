import { Wallet, Plus, CreditCard } from 'lucide-react'; // Added missing import

export default function Wallets() {
  const myWallets = [
    { name: 'Monthly Bills', balance: '50,000', color: 'bg-emerald-500' },
    { name: 'Recreation', balance: '12,000', color: 'bg-slate-800' },
    { name: 'Food Bills', balance: '5,500', color: 'bg-slate-700' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">My Wallets</h1>
        <button className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:bg-slate-50 transition-colors">
          <Plus size={24} className="text-slate-900" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* The "Add Wallet" Card */}
        <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white flex flex-col justify-between h-72 shadow-2xl shadow-slate-200 group cursor-pointer">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-emerald-500 transition-colors">
            <Plus size={24} />
          </div>
          <div>
            <h3 className="font-black text-2xl">Add Wallet</h3>
            <p className="text-slate-500 text-xs mt-1 font-medium uppercase tracking-widest">Connect new source</p>
          </div>
        </div>

        {/* Dynamic Wallet Cards */}
        {myWallets.map((wallet) => (
          <div key={wallet.name} className={`${wallet.color} p-10 rounded-[2.5rem] text-white shadow-xl flex flex-col justify-between h-72`}>
             <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <CreditCard size={24} />
                </div>
                <p className="bg-white/20 px-3 py-1 rounded-lg text-[10px] font-black uppercase">{wallet.name}</p>
             </div>
             <div>
               <h2 className="text-3xl font-black italic">
                 <span className="text-sm opacity-50 mr-2 not-italic">KES</span>
                 {wallet.balance}
               </h2>
               <p className="text-white/40 text-[10px] font-bold text-right mt-4 uppercase tracking-widest">Available Balance</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}