type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-zinc-900">{title}</h1>

      {subtitle && <p className="mt-1 text-zinc-600">{subtitle}</p>}
    </div>
  );
}