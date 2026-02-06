import React from 'react';

interface Props {
  symptoms?: string[] | null;
  disease?: string | null;
  sideEffects?: string[] | string | null;
  /** Stack Symptoms / Disease / Side effects vertically (e.g. in narrow column) */
  vertical?: boolean;
}

export const SymptomsDiseaseSideEffectsSummary: React.FC<Props> = ({
  symptoms,
  disease,
  sideEffects,
  vertical = false,
}) => {
  const content = (
    <>
      <div className={vertical ? 'border-b border-slate-100 pb-3' : 'border-r border-slate-100 sm:border-r last:border-r-0 pr-4'}>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Symptoms</p>
        <p className="text-slate-800 font-medium text-sm">
          {symptoms?.length ? symptoms.join(', ') : '—'}
        </p>
      </div>
      <div className={vertical ? 'border-b border-slate-100 py-3' : 'border-r border-slate-100 sm:border-r last:border-r-0 pr-4'}>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Disease</p>
        <p className="text-slate-800 font-medium text-sm">{disease || '—'}</p>
      </div>
      <div className={vertical ? 'pt-3' : ''}>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Side effects</p>
        <p className="text-slate-800 font-medium text-sm">
          {Array.isArray(sideEffects) ? sideEffects.join(', ') : (sideEffects || '—')}
        </p>
      </div>
    </>
  );

  return (
    <div className="bg-white rounded-xl shadow border border-slate-100 p-4 h-full flex flex-col min-h-0">
      <div className={vertical ? 'flex flex-col gap-0 flex-1 min-h-0' : 'grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm'}>
        {content}
      </div>
    </div>
  );
};
