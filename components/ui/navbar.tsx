import Link from "next/link";

export function Navbar() {
  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },

    {
      href: "/compare",
      label: "Compare",
    },

    {
      href: "/submit",
      label: "Submit",
    },
  ];

  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link
          href="/dashboard"
          className="text-2xl font-bold"
        >
          LevelLens
        </Link>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}