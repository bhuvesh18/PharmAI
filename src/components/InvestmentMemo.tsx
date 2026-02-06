import React from 'react';
import { FileText, TrendingUp, AlertTriangle, CheckCircle, Download } from 'lucide-react';

interface InvestmentMemoProps {
  reportContent: string;
  drugName?: string;
  grading?: {
    overall_score?: number;
  };
  onDownload?: () => void;
  onDownloadPPTX?: () => void;
  /** Export full report PDF (all sections in UI order, including details not shown in UI) */
  onExportReport?: () => void;
}

export const InvestmentMemo: React.FC<InvestmentMemoProps> = ({
  reportContent,
  drugName,
  grading,
  onDownload,
  onDownloadPPTX,
  onExportReport,
}) => {
  // Simple parser to split the AI report into sections based on headers
  // Assumes the AI generates headers like "1. EXECUTIVE THESIS" or "### Executive Thesis"
  const sections = reportContent.split(/(?=\d\.|###|SECTION:)/g).filter((s) => s.trim().length > 0);

  const getIconForSection = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('risk') || lower.includes('technical')) return <AlertTriangle className="text-amber-600" size={20} />;
    if (lower.includes('financial') || lower.includes('commercial')) return <TrendingUp className="text-emerald-600" size={20} />;
    if (lower.includes('thesis') || lower.includes('executive')) return <FileText className="text-cyan-600" size={20} />;
    return <CheckCircle className="text-slate-400" size={20} />;
  };

  const scoreColor = (score: number) => {
    if (score >= 0.8) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (score >= 0.6) return 'bg-amber-100 text-amber-800 border-amber-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden max-w-5xl mx-auto my-8 font-serif">
      {/* Header acting as a "Letterhead" */}
      <div className="bg-slate-900 text-white p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-cyan-500 rounded-full mix-blend-overlay opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 flex justify-between items-start">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-cyan-200 uppercase mb-2">Confidential Investment Memorandum</div>
            <h1 className="text-3xl font-bold font-sans tracking-tight mb-1">{drugName || 'Pharmaceutical Asset'}</h1>
            <p className="text-slate-400 text-sm">Automated Due Diligence Report • {new Date().toLocaleDateString()}</p>
          </div>

          {grading?.overall_score !== undefined && (
            <div className={`flex flex-col items-center justify-center p-4 rounded-lg border ${scoreColor(grading.overall_score)}`}>
              <span className="text-xs font-bold uppercase tracking-wider mb-1">Feasibility</span>
              <span className="text-3xl font-black font-sans">{(grading.overall_score * 100).toFixed(0)}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Toolbar */}
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
        <div className="flex gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-1"></span>Financials</span>
          <span><span className="w-2 h-2 rounded-full bg-amber-500 inline-block mr-1"></span>Risk Analysis</span>
          <span><span className="w-2 h-2 rounded-full bg-cyan-500 inline-block mr-1"></span>Market Fit</span>
        </div>
        <div className="flex items-center gap-3">
          {onExportReport && (
            <button
              onClick={onExportReport}
              className="flex items-center gap-2 text-xs font-bold text-cyan-700 hover:text-cyan-600 transition-colors"
            >
              <Download size={14} />
              EXPORT FULL REPORT (PDF)
            </button>
          )}
          {onDownloadPPTX && (
            <button
              onClick={onDownloadPPTX}
              className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-cyan-600 transition-colors"
            >
              <Download size={14} />
              EXPORT PPTX
            </button>
          )}
          <button
            onClick={onDownload}
            className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-cyan-600 transition-colors"
          >
            <Download size={14} />
            EXPORT PDF
          </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-10 space-y-10 bg-white">
        {sections.length > 0 ? (
          sections.map((section, idx) => {
            const lines = section.trim().split('\n');
            const title = lines[0];
            const body = lines.slice(1).join('\n');

            return (
              <section key={idx} className="relative pl-8 border-l-2 border-slate-100 hover:border-cyan-500 transition-colors">
                <div className="absolute -left-[11px] top-0 bg-white p-1">
                  {getIconForSection(title)}
                </div>
                <h3 className="text-lg font-bold font-sans text-slate-900 mb-4 uppercase tracking-wide">{title.replace(/[*#]/g, '')}</h3>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
                  {body}
                </div>
              </section>
            );
          })
        ) : (
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap">
            {reportContent}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-slate-50 p-6 text-center border-t border-slate-200">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">Generated by EY PharmAI • Strategic Intelligence Engine</p>
      </div>
    </div>
  );
};
