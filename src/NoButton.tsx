

interface NoButtonProps {
  onClick: () => void;
}

function NoButton({ onClick }: NoButtonProps) {
  return (
    <button className="button no" onClick={onClick}>
      No 😢
    </button>
  );
}

export default NoButton;
