import React from 'react';

// Define the structure of a history item
export interface HistoryItem {
  id: number;
  query: string;
  timestamp: string;
  data: any; // Using 'any' for flexibility in this example, ideally use your Type
}

interface SidebarProps {
  history: HistoryItem[];
  onSelectHistory: (item: HistoryItem) => void;
  onNewChat: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ history, onSelectHistory, onNewChat }) => {
  return (
    <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0 z-50 border-r border-slate-800 shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-slate-800">
        <h1 
          onClick={onNewChat}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 cursor-pointer hover:opacity-80 transition"
        >
          PharmAI
        </h1>
        <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-semibold">Pharma Intelligence</p>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <button 
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl transition-all shadow-lg shadow-blue-900/40 font-medium"
        >
          <i className="fas fa-plus"></i> New Analysis
        </button>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">Recent Inquiries</div>
        
        {history.length === 0 ? (
          <div className="text-center py-10 text-slate-600 italic text-sm">
            No history yet.
          </div>
        ) : (
          <div className="space-y-2">
            {history.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectHistory(item)}
                className="w-full text-left p-3 rounded-lg hover:bg-slate-800 transition-colors group border border-transparent hover:border-slate-700"
              >
                <div className="text-sm font-medium text-slate-200 truncate group-hover:text-blue-300">
                  {item.query}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                  <i className="fas fa-clock"></i> {item.timestamp}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* User Footer */}
      <div className="p-4 border-t border-slate-800 bg-slate-900/50 backdrop-blur">
        <div className="flex items-center gap-3 bg-slate-800/50 p-2 rounded-lg border border-slate-700">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center font-bold text-white text-xs">
            U
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-200">User Admin</p>
            <p className="text-[10px] text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};