import React, { useState } from 'react';

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
  onToggle?: (isMinimized: boolean) => void;
  onLogoutClick?: () => void;
  initialMinimized?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ history, onSelectHistory, onNewChat, onToggle, onLogoutClick, initialMinimized = true }) => {
  const [isMinimized, setIsMinimized] = useState(initialMinimized);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMinimize = () => {
    const newState = !isMinimized;
    setIsMinimized(newState);
    onToggle?.(newState);
  };

  return (
    <aside className={`${isMinimized ? 'w-16' : 'w-80'} bg-slate-50 text-slate-800 flex flex-col h-screen fixed left-0 top-0 z-50 border-r border-slate-200 shadow-lg transition-all duration-300 ease-in-out`}>
      {/* Header */}
      <div className={`${isMinimized ? 'p-3' : 'p-5'} border-b border-slate-200 relative bg-white`}>
        {!isMinimized ? (
          <div className="flex items-center justify-between">
            <div onClick={onNewChat} className="cursor-pointer group">
              <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 group-hover:from-cyan-400 group-hover:via-teal-400 group-hover:to-cyan-500 transition-all">
                PharmAI
              </h1>
              <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wider font-medium">Intelligence Platform</p>
            </div>
            <button
              onClick={toggleMinimize}
              className="w-7 h-7 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-lg transition-all border border-slate-200 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-500/10 group"
              title="Minimize sidebar"
            >
              <i className="fas fa-chevron-left text-slate-500 group-hover:text-cyan-600 text-[10px] transition-colors"></i>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div 
              onClick={onNewChat}
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl cursor-pointer hover:from-cyan-400 hover:to-teal-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-105"
            >
              <i className="fas fa-dna text-white text-lg"></i>
            </div>
            <button
              onClick={toggleMinimize}
              className="w-7 h-7 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-lg transition-all border border-slate-200 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-500/10 group"
              title="Expand sidebar"
            >
              <i className="fas fa-chevron-right text-slate-500 group-hover:text-cyan-600 text-[10px] transition-colors"></i>
            </button>
          </div>
        )}
      </div>

      {/* New Chat Button */}
      <div className={`${isMinimized ? 'p-3' : 'p-4'}`}>
        {!isMinimized ? (
          <button 
            onClick={onNewChat}
            className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <i className="fas fa-plus-circle"></i> 
            <span>New Analysis</span>
          </button>
        ) : (
          <button 
            onClick={onNewChat}
            className="w-full flex items-center justify-center bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95"
            title="New Analysis"
          >
            <i className="fas fa-plus-circle text-lg"></i>
          </button>
        )}
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {!isMinimized && (
          <div className="px-4 pt-2 pb-3">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-2 flex items-center gap-2">
              <i className="fas fa-clock-rotate-left text-[10px]"></i>
              <span>Recent Inquiries</span>
            </div>
          </div>
        )}
        
        {history.length === 0 ? (
          !isMinimized && (
            <div className="text-center py-12 px-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-200 flex items-center justify-center">
                <i className="fas fa-inbox text-slate-500 text-xl"></i>
              </div>
              <p className="text-slate-600 text-xs font-medium">No history yet</p>
              <p className="text-slate-500 text-[10px] mt-1">Start a new analysis</p>
            </div>
          )
        ) : (
          <div className={`space-y-1.5 ${isMinimized ? 'px-2' : 'px-3'}`}>
            {history.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onSelectHistory(item)}
                className={`w-full ${isMinimized ? 'flex items-center justify-center p-2.5' : 'text-left p-3'} rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-all group border border-transparent hover:border-slate-200 relative overflow-hidden`}
                title={isMinimized ? item.query : undefined}
              >
                {isMinimized ? (
                  <div className="relative">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 group-hover:bg-cyan-50 flex items-center justify-center transition-all">
                      <i className="fas fa-file-lines text-slate-500 group-hover:text-cyan-600 text-sm transition-colors"></i>
                    </div>
                    {index === 0 && (
                      <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-cyan-500 rounded-full border-2 border-slate-50"></div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center mt-0.5 group-hover:bg-cyan-100 transition-all">
                        <i className="fas fa-file-lines text-cyan-600 text-xs"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-slate-700 truncate group-hover:text-cyan-700 transition-colors">
                          {item.query}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1.5">
                          <i className="fas fa-clock text-[9px]"></i> 
                          <span>{item.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* User Footer — click opens menu with Log out option */}
<div className={`${isMinimized ? 'p-3' : 'p-4'} border-t border-slate-200 bg-white relative`}>
        {!isMinimized ? (
          <>
            <button
              type="button"
              onClick={() => setUserMenuOpen((o) => !o)}
              className="w-full flex items-center gap-3 bg-slate-100 hover:bg-slate-200 p-3 rounded-xl border border-slate-200 transition-all cursor-pointer group text-left"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all">
                  U
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">User Admin</p>
                <p className="text-[10px] text-teal-600 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span className="font-medium">Online</span>
                </p>
              </div>
              <i className={`fas fa-chevron-down text-slate-500 text-xs transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {userMenuOpen && (
              <div className="absolute bottom-full left-4 right-4 mb-1 py-1 bg-white border border-slate-200 rounded-lg shadow-xl z-50">
                <button
                  type="button"
                  onClick={() => { setUserMenuOpen(false); onLogoutClick?.(); }}
                  className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2 text-red-600 hover:text-red-700 rounded-lg transition-colors"
                >
                  <i className="fas fa-sign-out-alt w-4"></i>
                  Log out
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setUserMenuOpen((o) => !o)}
              className="w-full flex items-center justify-center rounded-lg hover:bg-slate-200 transition-all p-1"
              title="User menu"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all">
                  U
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-teal-500 border-2 border-white"></div>
              </div>
            </button>
            {userMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" aria-hidden onClick={() => setUserMenuOpen(false)} />
                <div className="absolute left-full bottom-0 ml-2 py-1 min-w-[140px] bg-white border border-slate-200 rounded-lg shadow-xl z-50">
                  <button
                    type="button"
                    onClick={() => { setUserMenuOpen(false); onLogoutClick?.(); }}
                    className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2 text-red-600 hover:text-red-700 rounded-lg transition-colors"
                  >
                    <i className="fas fa-sign-out-alt w-4"></i>
                    Log out
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </aside>
  );
};