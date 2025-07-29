import Image from "next/image";
import FirebaseStatus from "@/components/FirebaseStatus";
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
}
