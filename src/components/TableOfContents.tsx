import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without triggering navigation
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="bg-muted/30 border border-border rounded-lg p-6 my-8 max-w-2xl">
      {/* Mobile: Collapsible toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-between w-full text-left mb-2"
        aria-expanded={isOpen}
      >
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground/70">
          In This Guide
        </h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-foreground/70" />
        ) : (
          <ChevronDown className="h-5 w-5 text-foreground/70" />
        )}
      </button>

      {/* Desktop: Always visible heading */}
      <h3 className="hidden md:block text-sm font-bold uppercase tracking-wide text-foreground/70 mb-4">
        In This Guide
      </h3>

      {/* TOC List */}
      <ul
        className={`space-y-2 ${
          isOpen ? 'block' : 'hidden'
        } md:block`}
      >
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="text-foreground/80 hover:text-brand-red transition-colors flex items-start group"
            >
              <span className="text-brand-red mr-2 group-hover:font-bold">•</span>
              <span className="group-hover:underline">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
