import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { compensationSchema } from "@/lib/validations/compensation";

import { normalizeCompany } from "@/lib/utils/normalize";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validated =
      compensationSchema.parse(body);

    const normalizedName =
      normalizeCompany(validated.company);

    let company =
      await prisma.company.findFirst({
        where: {
          normalizedName,
        },
      });

    if (!company) {
      company = await prisma.company.create({
        data: {
          displayName: validated.company,

          normalizedName,
        },
      });
    }

    const totalCompensation =
      validated.baseSalary +
      validated.bonus +
      validated.stock;

    const entry =
      await prisma.compensationEntry.create({
        data: {
          companyId: company.id,

          role: validated.role,

          level: validated.level,

          location: validated.location,

          yearsExperience:
            validated.yearsExperience,

          baseSalary:
            validated.baseSalary,

          bonus: validated.bonus,

          stock: validated.stock,

          totalCompensation,
        },
      });

    return NextResponse.json({
      success: true,

      data: entry,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,

        message: "Failed to submit compensation",
      },

      {
        status: 500,
      }
    );
  }
}