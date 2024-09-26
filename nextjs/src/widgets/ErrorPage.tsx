import Link from 'next/link';
 
export default function ErrorPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <h2 className="text-2xl font-semibold">404 Страница не найдена</h2>
      <Link
        href="/"
        className="mt-4 rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700"
      >
        На главную
      </Link>
    </main>
  );
}