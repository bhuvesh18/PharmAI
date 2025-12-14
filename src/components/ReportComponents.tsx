import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area
} from 'recharts';

/**
 * 1. Grading Radar Chart - Futuristic Glassmorphism Style
 */
interface GradingProps {
  data: {
    market_demand: number;
    production_feasibility: number;
    demographics: number;
    patents_and_trials: number;
    competition: number;
    overall_score: number;
  };
}

export const GradingSection: React.FC<GradingProps> = ({ data }) => {
  // Convert 0-1 scores to 0-100 for charts
  const chartData = [
    { subject: 'Market Demand', A: data.market_demand * 100, fullMark: 100 },
    { subject: 'Patent Viability', A: data.patents_and_trials * 100, fullMark: 100 },
    { subject: 'Scalability', A: data.production_feasibility * 100, fullMark: 100 },
    { subject: 'Demographics', A: data.demographics * 100, fullMark: 100 },
    { subject: 'Competition', A: data.competition * 100, fullMark: 100 },
  ];

  const gradeLetter = data.overall_score > 0.75 ? "A+" : data.overall_score > 0.5 ? "B" : "C";
  const gradeColor = data.overall_score > 0.75 ? "text-emerald-500" : "text-yellow-500";

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 h-full flex flex-col overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
        <h3 className="font-bold text-slate-700">Feasibility Score</h3>
        <span className={`text-xl font-bold ${gradeColor}`}>Grade: {gradeLetter}</span>
      </div>
      <div className="flex-1 min-h-[350px] p-4">
         <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar name="Score" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} />
              <Tooltip />
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
interface TeaProps {
  visualData: {
    revenue_projection: any[];
  }
}
export const TeaSection: React.FC<TeaProps> = ({ visualData }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
        <h3 className="font-bold text-slate-800 text-xl mb-6">Profitability Forecast</h3>
        <div className="h-[300px]">
           <ResponsiveContainer width="100%" height="100%">
             <AreaChart data={visualData.revenue_projection}>
               <defs>
                 <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                   <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                 </linearGradient>
               </defs>
               <CartesianGrid strokeDasharray="3 3" vertical={false} />
               <XAxis dataKey="year" />
               <YAxis />
               <Tooltip />
               <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="url(#colorRev)" />
               <Line type="monotone" dataKey="cost" stroke="#ef4444" strokeDasharray="5 5" />
             </AreaChart>
           </ResponsiveContainer>
        </div>
    </div>
  );
};