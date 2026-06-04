import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const ids =
      searchParams.get("ids")?.split(",") || [];

    const data =
      await prisma.compensationEntry.findMany({
        where: {
          id: {
            in: ids,
          },
        },

        include: {
          company: true,
        },
      });

    return NextResponse.json({
      success: true,

      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },

      {
        status: 500,
      }
    );
  }
}