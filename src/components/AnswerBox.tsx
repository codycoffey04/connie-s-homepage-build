interface AnswerBoxProps {
  question: string;
  answer: string;
  source?: string;
}

export const AnswerBox = ({ question, answer, source }: AnswerBoxProps) => {
  return (
    <div className="bg-gradient-to-br from-brand-red to-red-600 text-white p-8 rounded-lg shadow-xl mb-12 max-w-4xl speakable">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-white/20 rounded-full p-3 shrink-0">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm uppercase tracking-wide font-bold mb-2 text-white/90">
            Quick Answer
          </h3>
          <p className="text-2xl font-bold mb-4 leading-tight">
            {question}
          </p>
        </div>
      </div>
      <div className="pl-0 md:pl-14">
        <p className="text-lg leading-relaxed mb-4">
          {answer}
        </p>
        {source && (
          <p className="text-sm text-white/80 italic">
            Source: {source}
          </p>
        )}
      </div>
    </div>
  );
};
