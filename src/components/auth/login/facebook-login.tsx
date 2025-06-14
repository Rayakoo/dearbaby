import Image from "next/image";

const FacebookLoginButton = () => {
  return (
    <div className="w-sm">
      <button
        className="flex px-6 py-1 my-4 bg-white text-black font-medium text-sm rounded-md hover:bg-gray-200 justify-center items-center w-full transition"
      >
        <Image 
          src="/facebook.svg" 
          alt="Facebook logo" 
          width={16}  // Approximate width based on your original h-4 class
          height={16} // Approximate height based on your original h-4 class
          className="h-4 m-2"
        />
        Login dengan Facebook
      </button>
    </div>
  );
};

export default FacebookLoginButton;