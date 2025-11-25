interface StatisticBoxProps {
  statistic: string;
  context?: string;
  citation: string;
  citationUrl?: string;
}

export const StatisticBox = ({ statistic, context, citation, citationUrl }: StatisticBoxProps) => {
  return (
    <div className="bg-gray-50 border-l-4 border-brand-red p-6 my-6 max-w-4xl">
      <div className="flex items-start gap-4">
        <div className="bg-brand-red/10 rounded-lg p-3 shrink-0">
          <svg 
            className="w-6 h-6 text-brand-red" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
            />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-2xl font-black text-gray-900 mb-2 leading-tight">
            {statistic}
          </p>
          {context && (
            <p className="text-base text-gray-700 mb-3">
              {context}
            </p>
          )}
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Source:</span>{" "}
            {citationUrl ? (
              <a 
                href={citationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-red hover:underline"
              >
                {citation}
              </a>
            ) : (
              <span>{citation}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
