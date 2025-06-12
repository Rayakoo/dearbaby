import { signIn } from "next-auth/react";

const FacebookLoginButton = () => {
  return (
    <div className="w-sm">

      <button
        onClick={() => signIn("facebook")}
        className="flex px-6 py-1 my-4 bg-white text-black font-medium text-sm rounded-md hover:bg-gray-200 justify-center items-center w-full transition"
      >
        <img src="/facebook.svg" alt="logo facebook" className="h-4 m-2"/>
        Login dengan Facebook
      </button>
    </div>

    
  );
};

export default FacebookLoginButton;
