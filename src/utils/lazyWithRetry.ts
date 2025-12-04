import { ComponentType, LazyExoticComponent, lazy } from "react";

/**
 * Creates a lazy-loaded component with retry logic for failed imports
 * This helps handle network issues or temporary server problems
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  retries = 3,
  delay = 1000
): LazyExoticComponent<T> {
  return lazy(() => {
    return new Promise((resolve, reject) => {
      const attemptImport = (attempt: number) => {
        importFn()
          .then(resolve)
          .catch((error) => {
            if (attempt < retries) {
              console.warn(`Failed to load module, retrying... (${attempt}/${retries})`);
              setTimeout(() => attemptImport(attempt + 1), delay * attempt);
            } else {
              console.error("Failed to load module after retries:", error);
              // Reload the page as a last resort
              if (typeof window !== "undefined") {
                window.location.reload();
              }
              reject(error);
            }
          });
      };
      attemptImport(1);
    });
  });
}

