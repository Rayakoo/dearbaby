import Navbar from "@/components/common/main-navbar";
import Footer from "@/components/common/main-footer";
import ProfileCard from "@/components/profile/profile-card";
import LogoutButton from "@/components/profile/logout-button";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/services/user-service";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("api_token")?.value || "";
  const user = await getCurrentUser(token);
  console.log("Token:", token); // Debugging line to check token value
  console.log("User data yang disini:", user); // Debugging line to check user data

  return (
    <div className="bg-[#FAEFFF]">
      <Navbar />
      <br />
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="w-full max-w-5xl flex justify-end mb-2">
          <LogoutButton token={token} />
        </div>
        <ProfileCard user={user} />
      </div>
      <br />
      <Footer />
    </div>
  );
}