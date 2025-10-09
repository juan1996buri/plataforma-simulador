import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen pt-16 overflow-hidden">
        <div className="w-64 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
