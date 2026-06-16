type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-zinc-700">{label}</span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
        className="rounded-lg border border-zinc-300 px-3 py-2 outline-none transition focus:border-pink-500"
      />
    </label>
  );
}