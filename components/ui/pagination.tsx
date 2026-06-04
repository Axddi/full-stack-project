"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  currentPage: number;
}

export function Pagination({
  currentPage,
}: Props) {
  const router = useRouter();

  const params = useSearchParams();

  function navigate(page: number) {
    const query = new URLSearchParams(params);

    query.set("page", String(page));

    router.push(`/dashboard?${query.toString()}`);
  }

  return (
    <div className="mt-6 flex gap-4">
      <button
        onClick={() =>
          navigate(currentPage - 1)
        }
        disabled={currentPage <= 1}
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <button
        onClick={() =>
          navigate(currentPage + 1)
        }
        className="rounded-lg border px-4 py-2"
      >
        Next
      </button>
    </div>
  );
}