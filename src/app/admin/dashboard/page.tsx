import DashboardTable from "@/components/admin/dashboard-admin";


export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 text-purple-700">Dashboard</h1>
      <DashboardTable />
    </div>
  );
}
