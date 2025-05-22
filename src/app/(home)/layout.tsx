import Navbar from "@/components/common/main-navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <span></span>
      {children}
    </>
  );
}