export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">

        <div className="construction-card text-center p-8 rounded-2xl shadow-lg max-w-2xl w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-pulse" style={{ color: 'var(--color-light-blue)' }}>
            🚧 PÁGINA EN CONSTRUCCIÓN 🚧
        </h1>
        <p className="text-lg md:text-xl" style={{ color: 'var(--color-very-light-blue)' }}>
            Estamos trabajando arduamente para traerte algo increíble. <br />Por favor, vuelve pronto.
        </p>
    </div>
</div>
  );
}
