import { useState } from "react";
import Header from "./components/Header";
import CardFeature from "./components/CardFeature";
import Footer from "./components/Footer";

// Ícones personalizados
import iconComponentizacao from "./assets/icons/componentizacao.png";
import iconTailwind from "./assets/icons/tailwind.png";
import iconVite from "./assets/icons/vite.png";
import iconReact from "./assets/icons/react.png";
import iconVagas from "./assets/icons/vagas.png";

export default function App() {
  // Estado reativo: Contador de curtidas (recurso da Aula 07 preservado)
  const [curtidas, setCurtidas] = useState(0);

  // Estados reativos: Cadastro dinâmico de novos cards (recurso da Aula 07 preservado)
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");

  // Lista dinâmica de recursos com ícones personalizados + props
  const [recursos, setRecursos] = useState([
    {
      id: 1,
      icone: (
        <img
          src={iconComponentizacao}
          alt="Componentização"
          className="w-9 h-9 object-contain"
        />
      ),
      titulo: "Componentização",
      descricao: "Código modular dividindo a interface em pequenos blocos fáceis de manter.",
      tag: "React"
    },
    {
      id: 2,
      icone: (
        <img
          src={iconTailwind}
          alt="Tailwind CSS"
          className="w-9 h-9 object-contain"
        />
      ),
      titulo: "Tailwind CSS - Pedro",
      descricao: "Estilização utilitária e responsiva aplicada diretamente nos componentes.",
      tag: "CSS"
    },
    {
      id: 3,
      icone: (
        <div className="flex items-center gap-1.5">
          <img
            src={iconVite}
            alt="Vite"
            className="w-8 h-8 object-contain"
          />
          <span className="text-slate-400 font-bold text-xs">+</span>
          <img
            src={iconReact}
            alt="React"
            className="w-8 h-8 object-contain"
          />
        </div>
      ),
      titulo: "Vite + React",
      descricao: "Servidor local ultrarrápido e estrutura SPA moderna.",
      tag: "Build"
    },
    {
      id: 4,
      icone: (
        <img
          src={iconVagas}
          alt="DevConnect Vagas"
          className="w-9 h-9 object-contain"
        />
      ),
      titulo: "DevConnect Vagas",
      descricao: "Conectando estudantes da EFG com oportunidades no mercado de tecnologia.",
      tag: "Carreira"
    }
  ]);

  // Função para adicionar card dinamicamente com Imutabilidade (Spread Operator)
  function adicionarRecurso(e) {
    e.preventDefault();
    if (!novoTitulo.trim()) return;

    const novo = {
      id: Date.now(),
      icone: "🚀",
      titulo: novoTitulo.trim(),
      descricao: novaDescricao.trim() || "Nova funcionalidade cadastrada no DevConnect.",
      tag: "Novo"
    };

    setRecursos([...recursos, novo]);
    setNovoTitulo("");
    setNovaDescricao("");
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-8">
      {/* 1. Header modularizado recebendo dados via props */}
      <Header
        titulo="DevConnect · Pedro Henrique"
        subtitulo="Componentização Reutilizável, Props e Reatividade na Prática | EFG / UFG"
      />

      <main className="max-w-4xl mx-auto px-4">
        {/* Bloco de Interatividade: Contador reativo com useState */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between mb-6">
          <span className="font-semibold text-slate-700 text-sm md:text-base">
            Curtidas do DevConnect:{" "}
            <strong className="text-indigo-600 text-lg ml-1">{curtidas}</strong>
          </span>
          <button
            onClick={() => setCurtidas(curtidas + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition duration-200 cursor-pointer shadow-sm hover:shadow"
          >
            Curtir (+1)
          </button>
        </div>

        {/* Formulário Dinâmico para cadastrar novos cards */}
        <form
          onSubmit={adicionarRecurso}
          className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-8"
        >
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Cadastrar Novo Recurso / Card:
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
              placeholder="Título do recurso (ex: Chat em tempo real)..."
              className="flex-1 border border-slate-300 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
              placeholder="Descrição breve..."
              className="flex-1 border border-slate-300 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition duration-200 cursor-pointer shadow-sm"
            >
              Adicionar
            </button>
          </div>
        </form>

        {/* 2. Lista dinâmica utilizando map e props para os componentes CardFeature */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-700">Recursos do Sistema:</h2>
          <span className="text-xs bg-indigo-50 text-indigo-700 font-semibold px-3 py-1 rounded-full border border-indigo-100">
            {recursos.length} itens mapeados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recursos.map((item) => (
            <CardFeature
              key={item.id}
              icone={item.icone}
              titulo={item.titulo}
              descricao={item.descricao}
              tag={item.tag}
            />
          ))}
        </div>
      </main>

      {/* 3. Footer institucional recebendo autor via props */}
      <Footer autor="Pedro Henrique" />
    </div>
  );
}
