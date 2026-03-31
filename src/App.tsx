import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './index.css';

const marketData = [
  { date: 'Ene', valor: 4200 }, { date: 'Feb', valor: 4800 }, { date: 'Mar', valor: 4500 },
  { date: 'Abr', valor: 5100 }, { date: 'May', valor: 5600 }, { date: 'Jun', valor: 5300 },
  { date: 'Jul', valor: 5900 }, { date: 'Ago', valor: 6200 }, { date: 'Sep', valor: 5800 },
  { date: 'Oct', valor: 6500 }, { date: 'Nov', valor: 7100 }, { date: 'Dic', valor: 7800 },
];

const badges = [
  { name: 'Trader Novato', icon: '🏅', type: 'Insignia' },
  { name: 'Primera Operación', icon: '⭐', type: 'Logro' },
  { name: 'Racha de 7 días', icon: '🏆', type: 'Medalla' },
  { name: 'Top 10%', icon: '🥇', type: 'Trofeo' },
  { name: 'Análisis Experto', icon: '📊', type: 'Achievement' },
  { name: 'Diversificador', icon: '🎯', type: 'Insignia' },
];

type Tab = 'dashboard' | 'mercados' | 'gamificacion';

function App() {
  const [tab, setTab] = useState<Tab>('dashboard');

  return (
    <div className="min-h-screen text-white flex">
      {/* Sidebar Navigation */}
      <nav className="w-56 bg-slate-900 border-r border-slate-700 p-4 flex flex-col gap-1">
        <h1 className="text-xl font-bold text-cyan-400 mb-6">📈 TraderPulse</h1>
        {[
          { id: 'dashboard' as Tab, label: '🏠 Dashboard', },
          { id: 'mercados' as Tab, label: '📊 Mercados', },
          { id: 'gamificacion' as Tab, label: '🎮 Gamificación', },
        ].map(item => (
          <a key={item.id} href="#" role="tab" onClick={e => { e.preventDefault(); setTab(item.id); }}
            className={`px-3 py-2 rounded-lg text-sm transition ${tab === item.id ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:bg-slate-800'}`}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-6">
          {tab === 'dashboard' && 'Panel de Análisis'}
          {tab === 'mercados' && 'Mercados'}
          {tab === 'gamificacion' && 'Gamificación'}
        </h2>

        {tab === 'dashboard' && (
          <>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                <p className="text-gray-400 text-sm">Total Operaciones</p>
                <p className="text-3xl font-bold">1,247</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                <p className="text-gray-400 text-sm">Rendimiento</p>
                <p className="text-3xl font-bold text-green-400">+15.3%</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                <p className="text-gray-400 text-sm">Balance</p>
                <p className="text-3xl font-bold">Q125,000</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 mb-6">
              <h3 className="font-semibold mb-4">Gráfica de Mercado</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="date" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                  <Line type="monotone" dataKey="valor" stroke="#06b6d4" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Gamification Summary */}
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Tu nivel</p>
                  <p className="text-lg font-bold">Nivel 5 — Rango: Plata</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">XP</p>
                  <p className="text-lg font-bold text-cyan-400">2,450 XP — puntos de experiencia</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-400 mb-1">Progreso al siguiente nivel</p>
                <div role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}
                  className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-cyan-500 h-full rounded-full transition-all" style={{ width: '65%' }} />
                </div>
              </div>
            </div>
          </>
        )}

        {tab === 'mercados' && (
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <h3 className="font-semibold mb-4">Gráfica de Mercado — Vista Completa</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                <Line type="monotone" dataKey="valor" stroke="#06b6d4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <p className="text-gray-400 text-sm">Volumen 24h</p>
                <p className="text-xl font-bold">Q2,345,678</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <p className="text-gray-400 text-sm">Variación</p>
                <p className="text-xl font-bold text-green-400">+3.2%</p>
              </div>
            </div>
          </div>
        )}

        {tab === 'gamificacion' && (
          <div className="space-y-6">
            {/* XP Display */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-5xl font-bold text-cyan-400">2,450</p>
              <p className="text-lg text-gray-300 mt-1">XP — puntos de experiencia</p>
            </div>

            {/* Level & Rank */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold">Nivel 5 — Trader Intermedio</p>
                  <p className="text-gray-400">Rango: Plata</p>
                </div>
                <div className="text-5xl">🥈</div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Progreso al siguiente nivel (2,450 / 3,000 XP)</p>
                <div role="progressbar" aria-valuenow={82} aria-valuemin={0} aria-valuemax={100}
                  className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{ width: '82%' }} />
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="font-bold text-lg mb-4">Insignias y Logros</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {badges.map(badge => (
                  <div key={badge.name} className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <p className="font-medium text-sm">{badge.type}: {badge.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
