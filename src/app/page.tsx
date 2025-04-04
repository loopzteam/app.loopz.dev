import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center animate-fade-in">
      
      <h1 className="text-4xl font-semibold mb-6">Loopz</h1>

      <Image
        src="/assets/loopz-logo.png"
        alt="Loopz Logo"
        width={200}
        height={200}
        className="mb-6"
      />

      <p className="text-gray-500 italic mb-10">
        "Clarity isn't about doing more. It's about knowing why you're doing anything at all."
      </p>

      <Link href="/dashboard">
        <button className="bg-black text-white font-medium py-3 px-8 rounded-full shadow-md">
          Untangle Your Mind
        </button>
      </Link>
    </div>
  );
}