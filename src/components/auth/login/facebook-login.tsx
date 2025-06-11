import { signIn } from "next-auth/react";

const FacebookLoginButton = () => {
  return (
    <button
      onClick={() => signIn("facebook")}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Login dengan Facebook
    </button>
  );
};

export default FacebookLoginButton;
