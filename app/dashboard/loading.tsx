export default function Loading() {
  return (
    <main className="p-8">
      <div className="space-y-4">
        <div className="h-10 w-64 animate-pulse rounded bg-muted" />

        <div className="grid gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-32 animate-pulse rounded-xl bg-muted"
            />
          ))}
        </div>

        <div className="h-[400px] animate-pulse rounded-xl bg-muted" />
      </div>
    </main>
  );
}