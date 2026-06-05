import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const entries =
      await prisma.compensationEntry.findMany({
        include: {
          company: true,
        },
      });

    const totalComp = entries.reduce(
      (acc, curr) => acc + curr.totalCompensation,
      0
    );

    const averageComp =
      totalComp / entries.length;

    const highestPaying = entries.reduce((prev, curr) =>
      curr.totalCompensation >
      prev.totalCompensation
        ? curr
        : prev
    );

    return NextResponse.json({
      success: true,

      stats: {
        averageCompensation:
          Math.round(averageComp),

        highestPayingCompany:
          highestPaying.company.displayName,

        highestCompensation:
          highestPaying.totalCompensation,

        totalEntries: entries.length,
      },
    });
  } catch (error) {
    console.error("Stats API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },

      {
        status: 500,
      }
    );
  }
}