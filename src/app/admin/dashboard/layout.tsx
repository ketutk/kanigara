import { Metadata } from "next";
import { GetServerSideProps } from "next";
import jwt from "jsonwebtoken";
import DynamicSidebar from "@/components/admin/dashboard/sidebar";

export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "Manage your site with the admin panel",
};

export default function DashboardAdminLayout({ children }: { children: React.ReactNode }) {
  return <DynamicSidebar children={children} />;
}
