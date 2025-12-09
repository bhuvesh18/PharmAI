// import React, { useState, useRef } from 'react';
// import { Sidebar, HistoryItem } from '../components/Sidebar'; // Ensure this matches your file path
// import { GradingSection, FlowDiagramSection, TeaSection } from '../components/ReportComponents';

// export const Dashboard: React.FC = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState<any | null>(null); 
//   const [loading, setLoading] = useState(false);
//   const [history, setHistory] = useState<HistoryItem[]>([]);
//   const resultsRef = useRef<HTMLDivElement>(null);

//   const handleRun = () => {
//     if (!input) return;
//     setLoading(true);
    
//     // Simulate Processing
//     setTimeout(() => {
//       const mockResult = {
//         agent_id: `AG-${Math.floor(Math.random() * 1000)}`,
//         recommendation: "High Potential Candidate for Generic Repurposing based on expired patents and high demand in Tier-2 regions."
//       };

//       setResult(mockResult);
      
//       const newItem: HistoryItem = {
//         id: Date.now(),
//         query: input,
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         data: mockResult
//       };
//       setHistory(prev => [newItem, ...prev]);
//       setLoading(false);
      
//       // Auto-scroll
//       setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
//     }, 2000);
//   };

//   const startNewChat = () => {
//     setResult(null);
//     setInput('');
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
//       {/* 1. Fixed Sidebar */}
//       <Sidebar 
//         history={history} 
//         onSelectHistory={(item) => setResult(item.data)}
//         onNewChat={startNewChat}
//       />

//       {/* 2. Main Content Wrapper (Margin Left to clear Sidebar) */}
//       <div className="ml-72 min-h-screen flex flex-col relative">
        
//         {/* Top Header */}
//         <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex justify-between items-center shadow-sm">
//            <div>
//              <h2 className="text-lg font-bold text-slate-800 tracking-tight">Innovation Dashboard</h2>
//              <p className="text-xs text-slate-500 font-medium">Multi-Agent Architecture Active</p>
//            </div>
//            <div className="flex gap-4">
//               {result && (
//                 <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-slate-900/20 active:scale-95">
//                   <i className="fas fa-file-pdf"></i> Export PDF Report
//                 </button>
//               )}
//               <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 text-xs font-bold shadow-sm">
//                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> System Active
//               </div>
//            </div>
//         </header>

//         {/* Scrollable Main Area */}
//         <main className="flex-1 p-8 max-w-[1600px] mx-auto w-full flex flex-col">
          
//           {/* SEARCH SECTION - Transitions to top when result exists */}
//           <div className={`transition-all duration-700 ease-in-out flex flex-col ${result ? 'py-0 mb-8' : 'py-32 items-center justify-center text-center'}`}>
            
//             {!result && (
//               <div className="animate-fade-in-up">
//                  <div className="inline-block p-6 bg-white rounded-3xl mb-8 shadow-xl shadow-blue-100 border border-blue-50">
//                     <i className="fas fa-dna text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500"></i>
//                  </div>
//                  <h1 className="text-6xl font-black text-slate-800 mb-6 tracking-tight leading-tight">
//                    Discover the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Future of Pharma</span>
//                  </h1>
//                  <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
//                    Enter a molecule or disease area to launch agents for market analysis, patent landscape, and manufacturing feasibility.
//                  </p>
//               </div>
//             )}

//             {/* Input Field */}
//             <div className={`w-full relative group z-20 ${result ? '' : 'max-w-3xl'}`}>
//                <div className={`absolute -inset-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 ${result ? 'hidden' : ''}`}></div>
//                <input 
//                  type="text"
//                  value={input}
//                  onChange={(e) => setInput(e.target.value)}
//                  onKeyDown={(e) => e.key === 'Enter' && handleRun()}
//                  placeholder="Search e.g., 'Roflumilast Repurposing'..." 
//                  className={`relative w-full bg-white border-0 text-slate-700 placeholder-slate-400 focus:ring-0 outline-none rounded-2xl shadow-2xl transition-all ${
//                    result 
//                     ? 'py-4 pl-6 pr-32 text-lg border border-slate-200 shadow-sm' 
//                     : 'py-6 pl-8 pr-40 text-xl font-medium'
//                  }`}
//                />
//                <button 
//                   onClick={handleRun}
//                   disabled={loading}
//                   className={`absolute top-2 bottom-2 right-2 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${result ? 'px-6 text-sm' : 'px-8 text-lg'}`}
//                >
//                  {loading ? <i className="fas fa-circle-notch animate-spin"></i> : <span>Analyze <i className="fas fa-arrow-right ml-1"></i></span>}
//                </button>
//             </div>
//           </div>

//           {/* LOADING STATE */}
//           {loading && (
//              <div className="flex flex-col items-center justify-center py-20 flex-1">
//                 <div className="w-24 h-24 border-4 border-slate-100 border-t-blue-500 rounded-full animate-spin mb-8"></div>
//                 <h3 className="text-2xl font-bold text-slate-800 animate-pulse">Orchestrating Agents</h3>
//                 <div className="flex gap-3 mt-4 text-slate-400 text-sm font-mono">
//                    <span>[IQVIA]</span><span>•</span><span>[USPTO]</span><span>•</span><span>[PUBMED]</span>
//                 </div>
//              </div>
//           )}

//           {/* RESULTS DASHBOARD */}
//           {result && !loading && (
//             <div ref={resultsRef} className="space-y-8 animate-fade-in-up pb-20">
              
//               {/* Row 1: Terminal Log & Grading */}
//               <div className="grid grid-cols-12 gap-8 h-[550px]">
//                  {/* Terminal */}
//                  <div className="col-span-12 lg:col-span-7 bg-[#0f172a] rounded-3xl p-8 shadow-2xl border border-slate-800 flex flex-col overflow-hidden relative group">
//                     <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition">
//                        <i className="fas fa-terminal text-slate-600 text-4xl"></i>
//                     </div>
//                     <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
//                        <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider flex items-center gap-2">
//                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
//                          MASTER_AGENT_LOGS
//                        </span>
//                        <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded font-mono">ID: {result.agent_id}</span>
//                     </div>
//                     <div className="flex-1 font-mono text-sm space-y-4 overflow-y-auto custom-scrollbar text-slate-300 leading-relaxed z-10">
//                        <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">System Initialization...</p>
//                        <p> <span className="text-purple-400 font-bold">MASTER:</span> Received query "{input}"</p>
//                        <p> <span className="text-blue-400 font-bold">MARKET_AGENT:</span> Analyzing global demand patterns...</p>
//                        <p className="pl-4 border-l-2 border-slate-700 text-xs text-slate-500 italic">Found 12 relevant datasets in IQVIA.</p>
//                        <p> <span className="text-teal-400 font-bold">PATENT_AGENT:</span> Checking FTO status...</p>
//                        <p className="text-emerald-400 pl-4 bg-emerald-500/10 p-2 rounded inline-block border border-emerald-500/20">✔ Patent Expiry: 2024 (Generic Entry Allowed)</p>
//                        <p> <span className="text-orange-400 font-bold">PROCESS_AGENT:</span> Simulating continuous manufacturing model...</p>
//                        <div className="bg-slate-800/80 backdrop-blur p-4 rounded-xl border-l-4 border-blue-500 mt-4 shadow-lg">
//                           <p className="text-white font-bold mb-1 text-xs uppercase text-blue-400">Final Recommendation</p>
//                           <p className="text-slate-100 text-lg font-medium">{result.recommendation}</p>
//                        </div>
//                     </div>
//                  </div>

//                  {/* Grading */}
//                  <div className="col-span-12 lg:col-span-5 h-full">
//                     <GradingSection />
//                  </div>
//               </div>

//               {/* Row 2: Flow Diagram */}
//               <div className="w-full">
//                  <FlowDiagramSection />
//               </div>

//               {/* Row 3: TEA */}
//               <div className="w-full">
//                  <TeaSection />
//               </div>

//             </div>
//           )}

//         </main>
//       </div>
//     </div>
//   );
// };

import React, { useState, useRef } from 'react';
import { Sidebar, HistoryItem } from '../components/Sidebar'; 
import { GradingSection, FlowDiagramSection, TeaSection } from '../components/ReportComponents';
// IMPORT THE API CLIENT
// Note: Ensure the path '../endpoints' matches where you saved endpoints.ts relative to Dashboard.tsx
import { AgentAPI } from '../api/endpoints'; 

export const Dashboard: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any | null>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added error state
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  // UPDATED: Async function to call Backend
  const handleRun = async () => {
    if (!input) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // 1. Call the API
      // We default complexity to 2 since your UI doesn't have a slider for it yet
      const responseData = await AgentAPI.runAgent({
        query: input,
        complexity: 2 
      });
      console.log("Response Data",responseData);
      // 2. Set Real Data
      setResult(responseData);

      // 3. Update History
      const newItem: HistoryItem = {
        id: Date.now(),
        query: input,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        data: responseData
      };
      setHistory(prev => [newItem, ...prev]);

      // 4. Auto-scroll
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);

    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to connect to the Agent Backend. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const startNewChat = () => {
    setResult(null);
    setInput('');
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      <Sidebar 
        history={history} 
        onSelectHistory={(item) => setResult(item.data)}
        onNewChat={startNewChat}
      />

      <div className="ml-72 min-h-screen flex flex-col relative">
        
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex justify-between items-center shadow-sm">
           <div>
             <h2 className="text-lg font-bold text-slate-800 tracking-tight">Innovation Dashboard</h2>
             <p className="text-xs text-slate-500 font-medium">Multi-Agent Architecture Active</p>
           </div>
           <div className="flex gap-4">
              {result && (
                <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-slate-900/20 active:scale-95">
                  <i className="fas fa-file-pdf"></i> Export PDF Report
                </button>
              )}
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 text-xs font-bold shadow-sm">
                 <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> System Active
              </div>
           </div>
        </header>

        <main className="flex-1 p-8 max-w-[1600px] mx-auto w-full flex flex-col">
          
          <div className={`transition-all duration-700 ease-in-out flex flex-col ${result ? 'py-0 mb-8' : 'py-32 items-center justify-center text-center'}`}>
            
            {!result && !loading && (
              <div className="animate-fade-in-up">
                 {/* ... (Header content unchanged) ... */}
                 <div className="inline-block p-6 bg-white rounded-3xl mb-8 shadow-xl shadow-blue-100 border border-blue-50">
                    <i className="fas fa-dna text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500"></i>
                 </div>
                 <h1 className="text-6xl font-black text-slate-800 mb-6 tracking-tight leading-tight">
                   Discover the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Future of Pharma</span>
                 </h1>
                 <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                   Enter a molecule or disease area to launch agents for market analysis, patent landscape, and manufacturing feasibility.
                 </p>
              </div>
            )}

            {/* Input Field */}
            <div className={`w-full relative group z-20 ${result ? '' : 'max-w-3xl'}`}>
               <input 
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleRun()}
                 placeholder="Search e.g., 'Roflumilast Repurposing'..." 
                 className={`relative w-full bg-white border-0 text-slate-700 placeholder-slate-400 focus:ring-0 outline-none rounded-2xl shadow-2xl transition-all ${
                   result 
                    ? 'py-4 pl-6 pr-32 text-lg border border-slate-200 shadow-sm' 
                    : 'py-6 pl-8 pr-40 text-xl font-medium'
                 }`}
               />
               <button 
                  onClick={handleRun}
                  disabled={loading}
                  className={`absolute top-2 bottom-2 right-2 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${result ? 'px-6 text-sm' : 'px-8 text-lg'}`}
               >
                 {loading ? <i className="fas fa-circle-notch animate-spin"></i> : <span>Analyze <i className="fas fa-arrow-right ml-1"></i></span>}
               </button>
            </div>
            {/* Error Message Display */}
            {error && <div className="mt-4 text-red-500 font-semibold">{error}</div>}
          </div>

          {loading && (
             <div className="flex flex-col items-center justify-center py-20 flex-1">
                <div className="w-24 h-24 border-4 border-slate-100 border-t-blue-500 rounded-full animate-spin mb-8"></div>
                <h3 className="text-2xl font-bold text-slate-800 animate-pulse">Orchestrating Agents</h3>
                <div className="flex gap-3 mt-4 text-slate-400 text-sm font-mono">
                   <span>[IQVIA]</span><span>•</span><span>[USPTO]</span><span>•</span><span>[PUBMED]</span>
                </div>
             </div>
          )}

          {result && !loading && (
            <div ref={resultsRef} className="space-y-8 animate-fade-in-up pb-20">
              
              <div className="grid grid-cols-12 gap-8 h-[550px]">
                 <div className="col-span-12 lg:col-span-7 bg-[#0f172a] rounded-3xl p-8 shadow-2xl border border-slate-800 flex flex-col overflow-hidden relative group">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                       <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider flex items-center gap-2">
                         <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                         MASTER_AGENT_LOGS
                       </span>
                       <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded font-mono">ID: {result.agent_id}</span>
                    </div>
                    
                    {/* UPDATED: Display Real Backend Analysis */}
                    <div className="flex-1 font-mono text-sm space-y-4 overflow-y-auto custom-scrollbar text-slate-300 leading-relaxed z-10 whitespace-pre-wrap">
                       <p> <span className="text-purple-400 font-bold">MASTER:</span> Analysis Completed for "{input}"</p>
                       
                       {/* This displays the text block returned by your python backend */}
                       <p className="text-slate-300">{result.analysis}</p>

                       <div className="bg-slate-800/80 backdrop-blur p-4 rounded-xl border-l-4 border-blue-500 mt-4 shadow-lg">
                          <p className="text-white font-bold mb-1 text-xs uppercase text-blue-400">Final Recommendation</p>
                          <p className="text-slate-100 text-lg font-medium">{result.recommendation}</p>
                       </div>
                    </div>
                 </div>

                 <div className="col-span-12 lg:col-span-5 h-full">
                    <GradingSection />
                 </div>
              </div>

              <div className="w-full">
                 <FlowDiagramSection />
              </div>
              <div className="w-full">
                 <TeaSection />
              </div>

            </div>
          )}

        </main>
      </div>
    </div>
  );
};