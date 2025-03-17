import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white transition-transform duration-300 hover:scale-105">
        <Image src="/images/RAF-1.jpg" alt="me" fill className="object-cover" />
      </div>
      <h1 className="mt-4 md:mt-0 md:ml-4 text-3xl md:text-4xl font-bold">
        Hello, I&apos;m Radu!
      </h1>
    </div>
  );
}
