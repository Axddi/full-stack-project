import { Compensation } from "@/types/compensation";

interface Props {
  data: Compensation[];
}

export function ComparisonTable({
  data,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full">
        <tbody>
          <tr className="border-b">
            <td className="p-4 font-semibold">
              Company
            </td>

            {data.map((item) => (
              <td
                key={item.id}
                className="p-4"
              >
                {item.company.displayName}
              </td>
            ))}
          </tr>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Role
            </td>

            {data.map((item) => (
              <td
                key={item.id}
                className="p-4"
              >
                {item.role}
              </td>
            ))}
          </tr>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Level
            </td>

            {data.map((item) => (
              <td
                key={item.id}
                className="p-4"
              >
                {item.level}
              </td>
            ))}
          </tr>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Location
            </td>

            {data.map((item) => (
              <td
                key={item.id}
                className="p-4"
              >
                {item.location}
              </td>
            ))}
          </tr>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Base Salary
            </td>

            {data.map((item) => (
              <td
                key={item.id}
                className="p-4"
              >
                ₹
                {item.baseSalary.toLocaleString()}
              </td>
            ))}
          </tr>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Bonus
            </td>

            {data.map((item) => (
              <td
                key={item.id}
                className="p-4"
              >
                ₹
                {item.bonus.toLocaleString()}
              </td>
            ))}
          </tr>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Stock
            </td>

            {data.map((item) => (
              <td
                key={item.id}
                className="p-4"
              >
                ₹
                {item.stock.toLocaleString()}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold">
              Total Compensation
            </td>

            {data.map((item) => (
              <td
                key={item.id}
                className="p-4 text-lg font-bold"
              >
                ₹
                {item.totalCompensation.toLocaleString()}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}