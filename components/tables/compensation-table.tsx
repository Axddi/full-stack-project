"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Link from "next/link";

import { Compensation } from "@/types/compensation";

interface Props {
  data: Compensation[];
}

export function CompensationTable({
  data,
}: Props) {
  const columns: ColumnDef<Compensation>[] = [
    {
      accessorKey: "company.displayName",

      header: "Company",

      cell: ({ row }) => (
        <Link
          href={`/companies/${row.original.company.displayName.toLowerCase()}`}
          className="font-medium hover:underline"
        >
          {row.original.company.displayName}
        </Link>
      ),
    },

    {
      accessorKey: "role",

      header: "Role",
    },

    {
      accessorKey: "level",

      header: "Level",
    },

    {
      accessorKey: "location",

      header: "Location",
    },

    {
      accessorKey: "totalCompensation",

      header: "Total Compensation",

      cell: ({ row }) => (
        <div className="font-semibold">
          ₹
          {row.original.totalCompensation.toLocaleString()}
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,

    columns,

    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          {table.getHeaderGroups().map(
            (headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(
                  (header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-left"
                    >
                      {flexRender(
                        header.column.columnDef
                          .header,
                        header.getContext()
                      )}
                    </th>
                  )
                )}
              </tr>
            )
          )}
        </thead>

        <tbody>
          {table.getRowModel().rows.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="py-8 text-center text-muted-foreground"
              >
                No compensation entries found.
              </td>
            </tr>
          )}
          {table.getRowModel().rows.map(
            (row) => (
              <tr
                key={row.id}
                className="border-t"
              >
                {row
                  .getVisibleCells()
                  .map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3"
                    >
                      {flexRender(
                        cell.column.columnDef
                          .cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}