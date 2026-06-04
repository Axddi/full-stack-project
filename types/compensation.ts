export interface Compensation {
  id: string;

  role: string;

  level: string;

  location: string;

  yearsExperience: number;

  baseSalary: number;

  bonus: number;

  stock: number;

  totalCompensation: number;

  company: {
    displayName: string;
  };
}