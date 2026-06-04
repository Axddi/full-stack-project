import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";

    const company = searchParams.get("company") || "";

    const location = searchParams.get("location") || "";

    const level = searchParams.get("level") || "";

    const page = Number(searchParams.get("page")) || 1;

    const limit = Number(searchParams.get("limit")) || 10;

    const skip = (page - 1) * limit;

    const compensations = await prisma.compensationEntry.findMany({
      where: {
        role: {
          contains: search,
          mode: "insensitive",
        },

        level: {
          contains: level,
          mode: "insensitive",
        },

        location: {
          contains: location,
          mode: "insensitive",
        },

        company: {
          displayName: {
            contains: company,
            mode: "insensitive",
          },
        },
      },

      include: {
        company: true,
      },

      orderBy: {
        totalCompensation: "desc",
      },

      skip,

      take: limit,
    });

    const total = await prisma.compensationEntry.count();

    return NextResponse.json({
      success: true,

      data: compensations,

      pagination: {
        total,

        page,

        limit,

        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,

        message: "Failed to fetch compensations",
      },

      {
        status: 500,
      }
    );
  }
}