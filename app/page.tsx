import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <h1 className="max-w-4xl text-6xl font-bold leading-tight">
        Compensation Intelligence for Software Engineers
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Compare compensation across top tech companies
        using levels, location, and structured salary
        insights.
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          href="/dashboard"
          className="rounded-xl border px-6 py-3"
        >
          Explore Compensation
        </Link>

        <Link
          href="/compare"
          className="rounded-xl border px-6 py-3"
        >
          Compare Salaries
        </Link>
      </div>
    </main>
  );
}