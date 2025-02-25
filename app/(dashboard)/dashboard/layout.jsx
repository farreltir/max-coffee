import NavDashboard from "@/components/dashboard/NavDashboard";
import Sidebar from "@/components/dashboard/Sidebar";

const layout = ({children}) => {
  return (
    <main className="grid lg:grid-cols-5">
        {/* Sidebar Divice PC */}
        <div className="hidden lg:block lg:col-span-1 lg:main-h-screen">
          <Sidebar />
        </div>
        {/* Navigasi */}
        <div className="lg:col-span-4">
            <NavDashboard />
            <div className="py-16 px-4 sm:px-8 lg:px-16">
                {/* Main Content */}
                {children}
            </div>
        </div>
    </main>
  )
};

export default layout;