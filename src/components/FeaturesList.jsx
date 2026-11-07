import './FeaturesList.css';

const funcionalidades = [
  { icon: '📝', texto: 'Cadastro de novos itens' },
  { icon: '🔍', texto: 'Filtro e busca em tempo real' },
  { icon: '📋', texto: 'Listagem dinâmica de dados' },
  { icon: '📱', texto: 'Interface responsiva e reativa' },
];

export default function FeaturesList() {
  return (
    <section className="features">
      <p className="features-heading">Funcionalidades do Projeto</p>
      <ul className="features-list">
        {funcionalidades.map((item, index) => (
          <li key={index} className="feature-item">
            <span className="feature-icon">{item.icon}</span>
            <span className="feature-text">{item.texto}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
