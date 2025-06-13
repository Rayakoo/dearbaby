import { Spinner } from "@nextui-org/spinner";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4 bg-gradient-to-br from-purple-200 to-blue-50">
      <div className="flex flex-row items-center scale-up fade-in">
        <Image src="/logo.svg" alt="dearbaby Logo" className="h-10 w-auto mr-2" width={100} height={100} />
        <div className="text-4xl font-bold text-black">
          
          <span className="text-purple-600 text-4xl">Dear</span>Baby
        </div>
      </div>
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;