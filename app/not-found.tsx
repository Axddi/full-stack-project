import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        404
      </h1>

      <p className="mt-4 text-muted-foreground">
        Page not found
      </p>

      <Link
        href="/dashboard"
        className="mt-6 rounded-lg border px-6 py-2"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}