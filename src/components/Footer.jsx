export default function Footer({ autor }) {
  return (
    <footer className="mt-12 text-center text-slate-500 text-xs py-4 border-t border-slate-200">
      <p>Desenvolvido por <strong>{autor}</strong> | EFG / UFG - 2026</p>
    </footer>
  );
}
