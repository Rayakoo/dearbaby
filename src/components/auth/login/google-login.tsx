import Image from "next/image";

const GoogleLoginButton = () => {
  return (
    <div className="w-sm">
      <button
        className="flex px-6 py-1 mt-2 bg-white text-black font-medium text-sm rounded-md hover:bg-gray-200 justify-center items-center w-full transition"
      >
        <Image 
          src="/google.svg" 
          alt="Google logo" 
          width={16}
          height={16}
          className="h-4 m-2"
        />
        Login dengan Google
      </button>
    </div>
  );
};

export default GoogleLoginButton;