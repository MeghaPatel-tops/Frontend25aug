import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
         <h1>Welcome to Next js tutorials</h1>
         <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/home">Home</a></li>
          <li><a href="/contact">Contact</a></li>
         </ul>
      </main>
    </div>
  );
}
