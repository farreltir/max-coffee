"use client";
import { usePathname } from "next/navigation";
import DashboardList from "@/utils/DashboardNavList";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    const path = usePathname();
    console.log(path)
  return (
    <aside className="py-2 px-4 bg-base-300 h-full">
        <Image height={100} width={100} src={Logo} className="mx-auto" alt="alt"/>
        <Image height={100} width={100} src={Logo} className="mx-auto" alt="alt"/>
        <div className="flex flex-col mt-10 gap-y-2">
            {DashboardList.map((item) => (
                <Link key={item.label} href={item.href} className="btn btn-sm">
                    <span className="capitalize">{item.label}</span>
                </Link>
              
            ))}
        </div>
    </aside>
  );
};

export default Sidebar;