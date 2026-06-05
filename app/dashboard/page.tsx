import { CompensationTable } from "@/components/tables/compensation-table";
import { StatsCards } from "@/components/charts/stats-cards";
import { CompensationFilters } from "@/components/filters/compensation-filters";
import { headers } from "next/headers";

interface Props {
  searchParams: Promise<{
    search?: string;
    company?: string;
    location?: string;
    level?: string;
  }>;
}

async function getBaseUrl() {
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = headersList.get("x-forwarded-proto") || "http";
  return `${protocol}://${host}`;
}

async function getCompensations(params: {
  search?: string;
  company?: string;
  location?: string;
  level?: string;
}) {
  try {
    const baseUrl = await getBaseUrl();
    const query = new URLSearchParams(
      params as Record<string, string>
    ).toString();

    const res = await fetch(
      `${baseUrl}/api/compensations?${query}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return { data: [], pagination: {} };
    }

    return res.json();
  } catch {
    return { data: [], pagination: {} };
  }
}

async function getStats() {
  try {
    const baseUrl = await getBaseUrl();
    const res = await fetch(
      `${baseUrl}/api/stats`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return {
        stats: {
          averageCompensation: 0,
          highestPayingCompany: "N/A",
          highestCompensation: 0,
          totalEntries: 0,
        },
      };
    }

    return res.json();
  } catch {
    return {
      stats: {
        averageCompensation: 0,
        highestPayingCompany: "N/A",
        highestCompensation: 0,
        totalEntries: 0,
      },
    };
  }
}

export default async function DashboardPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const statsData = await getStats();

  const data =
    await getCompensations(params);

  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Compensation Explorer
        </h1>

        <p className="mt-2 text-muted-foreground">
          Compare compensation across top tech
          companies.
        </p>
      </div>

      <div className="rounded-xl border bg-card p-6 transition hover:scale-[1.01] hover:border-white/40">
        <StatsCards stats={statsData.stats} />
      </div>

      <CompensationFilters />

      <CompensationTable data={data.data} />
    </main>
  );
}