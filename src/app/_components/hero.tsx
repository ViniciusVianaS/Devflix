export default function Hero() {
  return (
    <>
      <div
        className="relative w-full h-80 rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat shadow-lg"
        style={{ backgroundImage: "url('public/images/blade-runner.jpg')" }}
      >
        {/* camada de escurecimento com blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* conteúdo sobre a imagem */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Blade Runner 2049</h1>
          <p className="text-sm mb-4 max-w-md">
            A young blade runner's discovery of a long-buried secret...
          </p>
          <div className="flex gap-4">
            <button className="bg-red-500/20 border border-red-500/30 text-red-200 hover:bg-red-500/40 hover:text-white backdrop-blur-sm hover:backdrop-blur-md transition px-4 py-2 rounded-lg">
              Watch
            </button>
            <button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:backdrop-blur-md px-4 py-2 rounded-lg transition">
              + Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
