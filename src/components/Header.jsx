export default function Header({ titulo, subtitulo }) {
  return (
    <header className="bg-indigo-600 text-white py-6 px-4 text-center rounded-b-xl shadow-md mb-8">
      <h1 className="text-3xl font-bold">{titulo}</h1>
      <p className="text-indigo-100 mt-2 text-sm md:text-base">{subtitulo}</p>
    </header>
  );
}
