import Sidebar from './_components/sidebar';
import Topbar from './_components/topbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />

      <div className="relative left-64 w-[calc(100%-256px)]">
        <Topbar />
        <main>{children}</main>
      </div>
    </>
  );
}
