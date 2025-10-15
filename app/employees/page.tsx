// app/employee-list/page.js (Next.js 13+ App Router)
import fs from "fs";
import path from "path";

export default function EmployeeList() {
  const filePath = path.join(process.cwd(), "data", "employees.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const employees = JSON.parse(jsonData);

  type User = { id: 0; name: ""; role: "" };

  return (
    <div className="relative w-full h-screen flex justify-center flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <ul className="space-y-3">
        {employees.map((emp: User) => (
          <li key={emp.id} className="border p-4 rounded shadow">
            <strong>{emp.name}</strong> – {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
