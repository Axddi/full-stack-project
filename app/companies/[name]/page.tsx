import { prisma } from "@/lib/prisma";

import { CompanyChart } from "@/components/charts/company-chart";

async function getCompanyData(name: string) {
  return prisma.company.findFirst({
    where: {
      normalizedName: name,
    },

    include: {
      entries: true,
    },
  });
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{
    name: string;
  }>;
}) {
  const { name } = await params;

  const company = await getCompanyData(name);

  if (!company) {
    return (
      <div className="p-8">
        Company not found
      </div>
    );
  }

  const averageComp =
    company.entries.reduce(
      (acc, curr) =>
        acc + curr.totalCompensation,
      0
    ) / company.entries.length;

  const chartData = company.entries.map(
    (entry) => ({
      level: entry.level,

      compensation:
        entry.totalCompensation,
    })
  );

  return (
    <main className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          {company.displayName}
        </h1>

        <p className="mt-2 text-muted-foreground">
          Compensation insights and level analysis
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-6">
          <p className="text-muted-foreground">
            Average Compensation
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            ₹
            {Math.round(
              averageComp
            ).toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-muted-foreground">
            Total Entries
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {company.entries.length}
          </h2>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-muted-foreground">
            Highest Level
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {
              company.entries.length > 0
                ? company.entries[
                    company.entries.length - 1
                  ].level
                : "N/A"
            }
          </h2>
        </div>
      </div>

      <div className="rounded-xl border p-6">
        <h2 className="mb-6 text-2xl font-bold">
          Compensation by Level
        </h2>

        <CompanyChart data={chartData} />
      </div>
    </main>
  );
}