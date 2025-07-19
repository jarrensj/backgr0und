import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <main className="container mx-auto text-center flex-grow flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-bold mb-4">backgr0unds</h1>
          <p>free backgr0unds</p>
        </div>
      </main>
      <footer className="text-sm text-gray-600 mt-8 text-center">
        <p>made by <Link href="https://kwaji.com" target="_blank" rel="noopener noreferrer">kwaji</Link></p>
        <p className="mt-2">free for personal use, for commercial or other uses, please <Link href="mailto:">contact me</Link></p>
      </footer>
    </div>
  );
}