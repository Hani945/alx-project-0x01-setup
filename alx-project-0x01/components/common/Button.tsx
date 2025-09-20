interface ButtonProps {
  title: string;
  onClick?: () => void;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, styles }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
