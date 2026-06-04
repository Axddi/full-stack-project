interface Props {
  stats: {
    averageCompensation: number;

    highestPayingCompany: string;

    highestCompensation: number;

    totalEntries: number;
  };
}

export function StatsCards({
  stats,
}: Props) {
  const cards = [
    {
      title: "Average Compensation",

      value: `₹${stats.averageCompensation.toLocaleString()}`,
    },

    {
      title: "Highest Paying Company",

      value: stats.highestPayingCompany,
    },

    {
      title: "Highest Compensation",

      value: `₹${stats.highestCompensation.toLocaleString()}`,
    },

    {
      title: "Total Entries",

      value: stats.totalEntries,
    },
  ];

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border bg-card p-6"
        >
          <p className="text-sm text-muted-foreground">
            {card.title}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}