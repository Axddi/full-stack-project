import { SubmitForm } from "@/components/forms/submit-form";

export default function SubmitPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Submit Compensation
        </h1>

        <p className="mt-2 text-muted-foreground">
          Contribute anonymous salary data.
        </p>
      </div>

      <SubmitForm />
    </main>
  );
}