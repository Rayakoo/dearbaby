import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
    >
      Login dengan Google
    </button>
  );
};

export default GoogleLoginButton;
