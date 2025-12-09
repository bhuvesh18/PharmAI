// import React from 'react';
// import { 
//   Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip 
// } from 'recharts';

// /**
//  * 1. Grading Radar Chart
//  */
// export const GradingSection = () => {
//   const data = [
//     { subject: 'Market Demand', A: 90, fullMark: 100 },
//     { subject: 'Patent Viability', A: 98, fullMark: 100 },
//     { subject: 'Mfg. Scalability', A: 86, fullMark: 100 },
//     { subject: 'ROI Potential', A: 80, fullMark: 100 },
//     { subject: 'Safety', A: 95, fullMark: 100 },
//     { subject: 'Competition', A: 65, fullMark: 100 },
//   ];

//   return (
//     <div className="bg-white rounded-2xl shadow-sm border border-slate-200 h-full flex flex-col">
//       <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-2xl">
//         <h3 className="font-bold text-slate-700 flex items-center gap-2">
//           <i className="fas fa-bullseye text-blue-500"></i> AI Feasibility Score
//         </h3>
//         <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full border border-green-200">
//           Grade: A+
//         </span>
//       </div>
//       <div className="flex-1 min-h-[300px] relative p-2">
//          <ResponsiveContainer width="100%" height="100%">
//             <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
//               <PolarGrid stroke="#e2e8f0" />
//               <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: '600' }} />
//               <Radar name="Score" dataKey="A" stroke="#3b82f6" strokeWidth={3} fill="#3b82f6" fillOpacity={0.15} />
//               <Tooltip />
//             </RadarChart>
//          </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// /**
//  * 2. Manufacturing Flow Diagram
//  */
// export const FlowDiagramSection = () => {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
//       <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
//         <div>
//            <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
//              <i className="fas fa-industry text-teal-600"></i> Manufacturing Process Design
//            </h3>
//            <p className="text-xs text-slate-500 mt-1 ml-7">Generated PFD Model: CONT-FLOW-V2</p>
//         </div>
//       </div>
      
//       {/* Diagram Container */}
//       <div className="p-10 bg-slate-50/30 overflow-x-auto">
//         <div className="flex items-center justify-between min-w-[900px]">
          
//           {/* Inputs */}
//           <div className="flex flex-col gap-3">
//              {['Reactant A', 'Reactant B', 'Catalyst'].map((label, i) => (
//                 <div key={i} className="bg-white border border-slate-300 px-4 py-2 rounded shadow-sm text-xs font-mono text-center w-28">
//                   {label}
//                 </div>
//              ))}
//           </div>

//           <i className="fas fa-arrow-right text-slate-300 text-xl"></i>

//           {/* Reactor */}
//           <div className="relative group cursor-pointer">
//             <div className="w-40 h-40 rounded-full border-[6px] border-blue-500 bg-white flex flex-col items-center justify-center shadow-2xl shadow-blue-100 z-10 relative transition-transform transform group-hover:scale-105">
//               <i className="fas fa-flask text-3xl text-blue-500 mb-2"></i>
//               <span className="font-bold text-slate-800">CSTR Reactor</span>
//               <span className="text-xs text-slate-500">Vol: 5000L</span>
//             </div>
//             {/* Animated Ring */}
//             <div className="absolute -inset-2 rounded-full border-2 border-blue-400 border-dashed animate-spin-slow opacity-50"></div>
//           </div>

//           <i className="fas fa-arrow-right text-slate-300 text-xl"></i>

//           {/* Separator */}
//           <div className="w-32 h-32 bg-purple-50 border-2 border-purple-500 rounded-xl flex flex-col items-center justify-center shadow-lg transform rotate-45">
//              <div className="transform -rotate-45 text-center">
//                 <i className="fas fa-filter text-2xl text-purple-600 mb-1"></i>
//                 <div className="font-bold text-slate-800 text-sm">Separator</div>
//              </div>
//           </div>

//           <i className="fas fa-arrow-right text-slate-300 text-xl"></i>

//           {/* Finishing */}
//           <div className="w-40 h-28 bg-teal-50 border-2 border-teal-500 rounded-lg flex flex-col items-center justify-center shadow-lg">
//               <i className="fas fa-box-open text-2xl text-teal-600 mb-2"></i>
//               <span className="font-bold text-slate-800">Crystallization</span>
//           </div>
          
//            <i className="fas fa-arrow-right text-slate-300 text-xl"></i>

//           {/* Output */}
//            <div className="w-32 h-32 rounded-full bg-green-100 border-4 border-green-500 flex flex-col items-center justify-center shadow-xl">
//               <i className="fas fa-check text-3xl text-green-600 mb-1"></i>
//               <span className="font-bold text-green-900">Final API</span>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// /**
//  * 3. TEA (Techno-Economic) Section
//  */
// export const TeaSection = () => {
//   const chartData = [
//     { year: 'Y1', revenue: 5, cost: 12 },
//     { year: 'Y2', revenue: 25, cost: 14 },
//     { year: 'Y3', revenue: 45, cost: 15 },
//     { year: 'Y4', revenue: 68, cost: 16 },
//     { year: 'Y5', revenue: 95, cost: 18 },
//   ];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
//       {/* Data Table */}
//       <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
//         <h3 className="font-bold text-slate-800 text-lg mb-5 flex items-center gap-2">
//           <i className="fas fa-coins text-yellow-500"></i> Cost Analysis
//         </h3>
//         <table className="w-full text-sm text-left">
//             <tbody className="divide-y divide-slate-100">
//               <tr className="py-3"><td className="py-3 text-slate-500">Initial CAPEX</td><td className="py-3 font-bold text-right text-slate-800">₹12.5 Cr</td></tr>
//               <tr className="py-3"><td className="py-3 text-slate-500">Annual OPEX</td><td className="py-3 font-bold text-right text-slate-800">₹4.2 Cr</td></tr>
//               <tr className="py-3"><td className="py-3 text-slate-500">Raw Material Cost</td><td className="py-3 font-bold text-right text-slate-800">₹850/kg</td></tr>
//               <tr className="py-3 bg-green-50 rounded"><td className="py-3 pl-2 text-green-700 font-bold">ROI (3 Yr)</td><td className="py-3 pr-2 font-bold text-right text-green-700">145%</td></tr>
//             </tbody>
//           </table>
//       </div>

//       {/* Chart */}
//       <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col">
//         <h3 className="font-bold text-slate-800 text-lg mb-4">Profitability Forecast (5 Year)</h3>
//         <div className="flex-1 min-h-[250px]">
//            <ResponsiveContainer width="100%" height="100%">
//              <LineChart data={chartData}>
//                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
//                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
//                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
//                <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
//                <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#10b981" strokeWidth={3} dot={{r: 4}} />
//                <Line type="monotone" dataKey="cost" name="Cost" stroke="#ef4444" strokeWidth={3} strokeDasharray="5 5" />
//              </LineChart>
//            </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area
} from 'recharts';

/**
 * 1. Grading Radar Chart - Futuristic Glassmorphism Style
 */
export const GradingSection = () => {
  const data = [
    { subject: 'Market Demand', A: 90, fullMark: 100 },
    { subject: 'Patent Viability', A: 98, fullMark: 100 },
    { subject: 'Scalability', A: 86, fullMark: 100 },
    { subject: 'ROI', A: 80, fullMark: 100 },
    { subject: 'Safety', A: 95, fullMark: 100 },
    { subject: 'Competition', A: 65, fullMark: 100 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 h-full flex flex-col overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 backdrop-blur-sm">
        <h3 className="font-bold text-slate-700 flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
          Feasibility Score
        </h3>
        <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg shadow-green-200">
          Grade: A+
        </span>
      </div>
      <div className="flex-1 min-h-[350px] relative p-4 bg-gradient-to-b from-white to-slate-50">
         <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke="#e2e8f0" strokeWidth={1} />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: '700' }} />
              <Radar name="Score" dataKey="A" stroke="#3b82f6" strokeWidth={3} fill="#3b82f6" fillOpacity={0.2} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
            </RadarChart>
         </ResponsiveContainer>
      </div>
    </div>
  );
};

/**
 * 2. Manufacturing Flow Diagram - Improved Alignment
 */
export const FlowDiagramSection = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <div>
           <h3 className="font-bold text-slate-800 text-xl flex items-center gap-3">
             <span className="p-2 bg-teal-100 rounded-lg text-teal-600"><i className="fas fa-industry"></i></span>
             Manufacturing Process Design
           </h3>
           <p className="text-xs text-slate-500 mt-1 ml-11 font-mono">MODEL: CONT-FLOW-V2 // OPTIMIZED</p>
        </div>
      </div>
      
      {/* Diagram Container */}
      <div className="p-12 bg-slate-50/30 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[1000px] relative">
          
          {/* Inputs */}
          <div className="flex flex-col gap-3 relative z-10">
             {['Reactant A', 'Reactant B', 'Catalyst'].map((label, i) => (
                <div key={i} className="bg-white border border-slate-200 px-5 py-3 rounded-xl shadow-sm text-xs font-bold text-slate-600 text-center w-32 tracking-wide transform transition hover:scale-105 hover:shadow-md hover:border-blue-200 cursor-default">
                  {label}
                </div>
             ))}
          </div>

          {/* Connector Line */}
          <div className="flex-1 h-0.5 bg-slate-300 relative mx-4">
             <i className="fas fa-chevron-right absolute -right-1 -top-2 text-slate-400"></i>
          </div>

          {/* Reactor - Centerpiece */}
          <div className="relative group cursor-pointer z-10">
            <div className="w-44 h-44 rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col items-center justify-center relative z-20 transform transition-all group-hover:scale-105">
              <i className="fas fa-atom text-4xl text-white mb-2 animate-spin-slow"></i>
              <span className="font-bold text-white text-lg">CSTR Reactor</span>
              <span className="text-xs text-blue-100 bg-blue-700/30 px-2 py-0.5 rounded-full mt-1">Vol: 5000L</span>
            </div>
            {/* Outer Glow Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-blue-200 border-dashed animate-spin-slow -z-10"></div>
            <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>

          {/* Connector Line */}
          <div className="flex-1 h-0.5 bg-slate-300 relative mx-4">
             <i className="fas fa-chevron-right absolute -right-1 -top-2 text-slate-400"></i>
          </div>

          {/* Separator - Diamond Shape */}
          <div className="relative w-36 h-36 flex items-center justify-center z-10">
             <div className="absolute inset-0 bg-white border-2 border-purple-200 shadow-xl rounded-2xl transform rotate-45 hover:rotate-0 transition-transform duration-500 ease-in-out z-10"></div>
             <div className="relative z-20 text-center flex flex-col items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-1 text-purple-600">
                  <i className="fas fa-filter"></i>
                </div>
                <div className="font-bold text-slate-700 text-sm">Separator</div>
             </div>
          </div>

          {/* Connector Line */}
          <div className="flex-1 h-0.5 bg-slate-300 relative mx-4">
             <i className="fas fa-chevron-right absolute -right-1 -top-2 text-slate-400"></i>
          </div>

          {/* Crystallizer - Box */}
          <div className="w-40 h-32 bg-white border border-teal-200 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-teal-100 transition-all z-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
              <i className="fas fa-snowflake text-2xl text-teal-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="font-bold text-slate-700">Crystallization</span>
          </div>
          
          {/* Connector Line */}
          <div className="flex-1 h-0.5 bg-slate-300 relative mx-4">
             <i className="fas fa-chevron-right absolute -right-1 -top-2 text-slate-400"></i>
          </div>

          {/* Final Output */}
           <div className="w-36 h-36 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex flex-col items-center justify-center shadow-xl shadow-green-100 z-10 text-white transform hover:scale-105 transition-transform">
              <i className="fas fa-check-circle text-4xl mb-1"></i>
              <span className="font-bold text-lg">Final API</span>
          </div>

        </div>
      </div>
    </div>
  );
};

/**
 * 3. TEA (Techno-Economic) Section - Clean Modern Look
 */
export const TeaSection = () => {
  const chartData = [
    { year: '2025', revenue: 10, cost: 30 },
    { year: '2026', revenue: 45, cost: 32 },
    { year: '2027', revenue: 78, cost: 34 },
    { year: '2028', revenue: 110, cost: 36 },
    { year: '2029', revenue: 150, cost: 38 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Data Table */}
      <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-800 text-xl mb-6 flex items-center gap-2">
            <span className="p-2 bg-yellow-100 rounded-lg text-yellow-600"><i className="fas fa-coins"></i></span>
            Cost Structure
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <span className="text-slate-500 text-sm font-medium">Initial CAPEX</span>
               <span className="font-bold text-slate-800 text-lg">₹12.5 Cr</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <span className="text-slate-500 text-sm font-medium">Annual OPEX</span>
               <span className="font-bold text-slate-800 text-lg">₹4.2 Cr</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <span className="text-slate-500 text-sm font-medium">Raw Material</span>
               <span className="font-bold text-slate-800 text-lg">₹850/kg</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 text-white text-center shadow-lg shadow-green-200">
          <p className="opacity-80 text-sm mb-1 uppercase tracking-wide">Projected ROI (3 Yr)</p>
          <p className="text-4xl font-extrabold">145%</p>
        </div>
      </div>

      {/* Chart */}
      <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 flex flex-col">
        <h3 className="font-bold text-slate-800 text-xl mb-2">Profitability Forecast</h3>
        <p className="text-slate-500 text-sm mb-6">5-Year Revenue vs. Operational Cost Projection</p>
        
        <div className="flex-1 min-h-[300px]">
           <ResponsiveContainer width="100%" height="100%">
             <AreaChart data={chartData}>
               <defs>
                 <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                   <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                 </linearGradient>
               </defs>
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
               <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
               <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
               <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
               <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
               <Line type="monotone" dataKey="cost" stroke="#ef4444" strokeWidth={3} strokeDasharray="5 5" dot={false} />
             </AreaChart>
           </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-4">
           <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span> Revenue
           </div>
           <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span> Operational Cost
           </div>
        </div>
      </div>
    </div>
  );
};