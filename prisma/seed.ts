import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.compensationEntry.deleteMany();
  await prisma.company.deleteMany();

  const companies = await prisma.company.createMany({
    data: [
      {
        displayName: "Google",
        normalizedName: "google",
      },

      {
        displayName: "Amazon",
        normalizedName: "amazon",
      },

      {
        displayName: "Microsoft",
        normalizedName: "microsoft",
      },

      {
        displayName: "Uber",
        normalizedName: "uber",
      },

      {
        displayName: "Atlassian",
        normalizedName: "atlassian",
      },
    ],
  });

  const google = await prisma.company.findFirst({
    where: {
      normalizedName: "google",
    },
  });

  const amazon = await prisma.company.findFirst({
    where: {
      normalizedName: "amazon",
    },
  });

  const microsoft = await prisma.company.findFirst({
    where: {
      normalizedName: "microsoft",
    },
  });

  const uber = await prisma.company.findFirst({
    where: {
      normalizedName: "uber",
    },
  });

  const atlassian = await prisma.company.findFirst({
    where: {
      normalizedName: "atlassian",
    },
  });

  await prisma.compensationEntry.createMany({
    data: [
      {
        companyId: google!.id,
        role: "Software Engineer",
        level: "L4",
        location: "Bangalore",
        yearsExperience: 3,

        baseSalary: 3200000,
        bonus: 400000,
        stock: 1200000,

        totalCompensation: 4800000,
      },

      {
        companyId: google!.id,
        role: "Senior Software Engineer",
        level: "L5",
        location: "Hyderabad",
        yearsExperience: 6,

        baseSalary: 5200000,
        bonus: 800000,
        stock: 2500000,

        totalCompensation: 8500000,
      },

      {
        companyId: amazon!.id,
        role: "Software Development Engineer",
        level: "SDE2",
        location: "Bangalore",
        yearsExperience: 4,

        baseSalary: 3600000,
        bonus: 300000,
        stock: 1000000,

        totalCompensation: 4900000,
      },

      {
        companyId: microsoft!.id,
        role: "Software Engineer",
        level: "62",
        location: "Noida",
        yearsExperience: 5,

        baseSalary: 4100000,
        bonus: 500000,
        stock: 1800000,

        totalCompensation: 6400000,
      },

      {
        companyId: uber!.id,
        role: "Backend Engineer",
        level: "L4",
        location: "Bangalore",
        yearsExperience: 4,

        baseSalary: 4700000,
        bonus: 700000,
        stock: 2200000,

        totalCompensation: 7600000,
      },

      {
        companyId: atlassian!.id,
        role: "Software Engineer",
        level: "P4",
        location: "Remote",
        yearsExperience: 4,

        baseSalary: 3900000,
        bonus: 400000,
        stock: 1500000,

        totalCompensation: 5800000,
      },
    ],
  });

  console.log("Database seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });