"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function CompensationFilters() {
  const router = useRouter();

  const searchParams = useSearchParams();

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/dashboard?${params.toString()}`);
  }

  return (
    <div className="mb-6 grid gap-4 md:grid-cols-4">
      <input
        placeholder="Search role..."
        className="rounded-lg border bg-background px-4 py-2"
        onChange={(e) =>
          updateFilter("search", e.target.value)
        }
      />

      <input
        placeholder="Company..."
        className="rounded-lg border bg-background px-4 py-2"
        onChange={(e) =>
          updateFilter("company", e.target.value)
        }
      />

      <input
        placeholder="Location..."
        className="rounded-lg border bg-background px-4 py-2"
        onChange={(e) =>
          updateFilter("location", e.target.value)
        }
      />

      <input
        placeholder="Level..."
        className="rounded-lg border bg-background px-4 py-2"
        onChange={(e) =>
          updateFilter("level", e.target.value)
        }
      />
    </div>
  );
}