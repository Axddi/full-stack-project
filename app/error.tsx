"use client";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-2 text-muted-foreground">
          Please try again later.
        </p>
      </div>
    </div>
  );
}