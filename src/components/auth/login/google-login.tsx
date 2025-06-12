import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
  return (
    <div className="w-sm">
      <button
        onClick={() => signIn("google")}
        className="flex px-6 py-1 mt-2 bg-white text-black font-medium text-sm rounded-md hover:bg-gray-200 justify-center items-center w-full transition"
      >
        <img src="/google.svg" alt="logo google" className="h-4 m-2"/>
        Login dengan Google
      </button>
    </div>
    
  );
};

export default GoogleLoginButton;
