'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
};

export default function PaginationControls({
  currentPage,
  totalPages,
}: PaginationControlsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goToPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', String(page));
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[#19322F]/10 bg-white dark:bg-white/5 text-sm font-medium text-[#19322F] dark:text-white hover:border-[#006655] hover:text-[#006655] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#19322F]/10 disabled:hover:text-[#19322F]"
      >
        <span className="material-icons text-base">arrow_back</span>
        Anterior
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
              page === currentPage
                ? 'bg-[#006655] text-white shadow-lg shadow-[#006655]/20'
                : 'bg-white dark:bg-white/5 border border-[#19322F]/10 text-[#5C706D] hover:border-[#006655] hover:text-[#006655] dark:text-white'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[#19322F]/10 bg-white dark:bg-white/5 text-sm font-medium text-[#19322F] dark:text-white hover:border-[#006655] hover:text-[#006655] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#19322F]/10 disabled:hover:text-[#19322F]"
      >
        Siguiente
        <span className="material-icons text-base">arrow_forward</span>
      </button>
    </div>
  );
}
