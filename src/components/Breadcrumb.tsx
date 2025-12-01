import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground [text-shadow:_0_1px_4px_rgba(0,0,0,0.6)]">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1 hover:text-brand-red transition-colors"
            aria-label="Go to homepage"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" aria-hidden="true" />
            {index === items.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link 
                to={item.url} 
                className="hover:text-brand-red transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
