type ButtonProps = {
  texto: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({ texto, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-lg bg-pink-600 px-4 py-2 font-semibold text-white transition hover:bg-pink-700"
    >
      {texto}
    </button>
  );
}