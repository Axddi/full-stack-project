import { prisma } from "@/lib/prisma";

import { ComparisonTable } from "@/components/tables/comparison-table";

async function getData() {
  return prisma.compensationEntry.findMany({
    include: {
      company: true,
    },

    take: 3,
  });
}

export default async function ComparePage() {
  const data = await getData();

  return (
    <main className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Compensation Comparison
        </h1>

        <p className="mt-2 text-muted-foreground">
          Compare compensation across top companies.
        </p>
      </div>

      <ComparisonTable data={data} />
    </main>
  );
}