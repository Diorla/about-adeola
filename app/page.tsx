import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen">
        <div className="flex-1 flex align-center justify-center flex-col ml-4">
          <h1 className="text-4xl font-bold">Hi, I am Adeola</h1>
          <p className="text-xl max-w-xl">
            I&apos;m a web developer specializing in creating modern,
            responsive, and user-friendly websites. Explore my projects and blog
            to see what I can do!
          </p>
        </div>
        <div className="flex-1 hidden sm:flex items-center justify-center">
          <Image src="/laptop.png" alt="Laptop" width={500} height={500} />
        </div>
        <div className="flex-1 sm:hidden flex items-center justify-center">
          <Image src="/tablet.png" alt="Laptop" width={500} height={500} />
        </div>
      </div>
    </main>
  );
}
