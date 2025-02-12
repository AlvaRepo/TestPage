interface YesButtonProps {
  size: number;
  onClick: () => void;
}

// Función para generar corazones y flores
const createDecorations = () => {
  const container = document.body;
  const symbols = ['❤️', '🌻', '🌸', '🌺', '🌼']; // Predominan los girasoles
  for (let i = 0; i < 30; i++) {
    const decoration = document.createElement('div');
    decoration.textContent = Math.random() < 0.6 ? '🌻' : symbols[Math.floor(Math.random() * symbols.length)];
    decoration.style.position = 'absolute';
    decoration.style.left = Math.random() * 100 + 'vw';
    decoration.style.top = Math.random() * 100 + 'vh';
    decoration.style.fontSize = Math.random() * 30 + 10 + 'px';
    decoration.style.animation = 'fall 3s linear infinite';
    container.appendChild(decoration);
    setTimeout(() => decoration.remove(), 3000);
  }
};

function YesButton({ size, onClick }: YesButtonProps) {
  return (
    <button
      style={{ transform: `scale(${size})`, transition: 'transform 0.3s ease' }}
      className="button yes"
      onClick={() => {
        onClick();
        createDecorations(); // Llamamos a la animación de corazones y flores
      }}
    >
      Sí ❤️
    </button>
  );
}

export default YesButton;
