"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Movie {
  id: number;
  name: string;
  description: string;
  imagem: string;
}

interface MainProps {
  searchTerm: string;
}

function useDragScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    isDragging.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;

    ref.current.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    if (!ref.current) return;

    isDragging.current = false;
    ref.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    if (!ref.current) return;

    isDragging.current = false;
    ref.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isDragging.current) return;

    e.preventDefault();

    const x = e.pageX - ref.current.offsetLeft;

    ref.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5;
  };

  return {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  };
}

function MovieCarousel({ movies }: { movies: Movie[] }) {
  const drag = useDragScroll();

  return (
    <div
      ref={drag.ref}
      onMouseDown={drag.onMouseDown}
      onMouseLeave={drag.onMouseLeave}
      onMouseUp={drag.onMouseUp}
      onMouseMove={drag.onMouseMove}
      className="flex gap-5 overflow-x-hidden pb-4 scroll-smooth select-none cursor-grab"
    >
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="group relative h-[150px] w-[260px] shrink-0 overflow-hidden rounded-2xl transition-all duration-300 hover:z-20 hover:scale-105"
        >
          <Image
            src={`/${movie.imagem}`}
            alt={movie.name}
            fill
            draggable={false}
            className="object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition duration-300 group-hover:opacity-100">
            <h3 className="text-lg font-semibold">{movie.name}</h3>

            <div className="mt-2 flex items-center gap-2">
              <button className="rounded-full bg-white px-3 py-1 text-sm text-black font-semibold uppercase cursor-pointer hover:bg-gray-300 duration-300">
                Assistir
              </button>

              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white cursor-pointer hover:bg-white/10 transition duration-300">
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SearchResult({ movie }: { movie: Movie }) {
  return (
    <div className="flex gap-6 bg-[#29292e] rounded-2xl p-5 max-w-4xl">
      <div className="relative w-[260px] h-[360px] shrink-0 overflow-hidden rounded-xl">
        <Image
          src={`/${movie.imagem}`}
          alt={movie.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
          Resultado da pesquisa
        </span>

        <h2 className="text-3xl font-bold">{movie.name}</h2>

        <p className="text-gray-300 leading-relaxed">{movie.description}</p>

        <div className="flex gap-3 pt-2">
          <button className="rounded-full bg-white px-6 py-2 uppercase text-sm font-semibold text-black hover:bg-gray-300 transition duration-300 cursor-pointer">
            Assistir
          </button>

          <button className="rounded-full border border-white px-6 py-2 text-sm font-semibold text-white hover:bg-white/10 transition duration-300 cursor-pointer">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Main({ searchTerm }: MainProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar filmes:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      setSearchLoading(false);
      return;
    }

    setSearchLoading(true);

    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data: Movie[]) => {
        const normalizeText = (text: string) => {
          return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
        };

        const search = normalizeText(searchTerm);

        const results = data.filter((movie) => {
          const name = normalizeText(movie.name);
          const description = normalizeText(movie.description);

          return name.includes(search) || description.includes(search);
        });

        setSearchResults(results);
        setSearchLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao pesquisar filme:", err);
        setSearchResults([]);
        setSearchLoading(false);
      });
  }, [searchTerm]);

  const featured = movies[5];

  const categories = [
    { title: "Em Alta", movies },
    { title: "Ação", movies: movies.slice(4) },
  ];

  if (loading) {
    return (
      <main className="w-full pl-[266px] pr-8 py-8 text-white flex items-center justify-center min-h-screen">
        <p className="text-gray-400 animate-pulse">Carregando filmes...</p>
      </main>
    );
  }

  if (!featured) return null;

  if (searchTerm) {
    return (
      <main className="w-full pl-[266px] pr-8 py-8 text-white">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Resultados para:{" "}
            <span className="text-gray-400">"{searchTerm}"</span>
          </h1>
        </div>

        {searchLoading && (
          <p className="text-gray-400 animate-pulse">Pesquisando filmes...</p>
        )}

        {!searchLoading && searchResults.length === 0 && (
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Nenhum filme encontrado</h2>

            <p className="text-gray-400">
              Não encontramos nenhum filme com o nome "{searchTerm}".
            </p>
          </div>
        )}

        {!searchLoading && searchResults.length > 0 && (
          <div className="space-y-6">
            {searchResults.map((movie) => (
              <SearchResult key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="w-full pl-[266px] pr-8 py-8 text-white">
      <section className="relative w-[168vh] h-[420px] rounded-3xl overflow-hidden mb-12">
        <Image
          src={`/${featured.imagem}`}
          alt={featured.name}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 p-10 space-y-3 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Em Destaque
          </span>

          <h1 className="text-4xl font-bold">{featured.name}</h1>

          <p className="text-sm text-gray-300 leading-relaxed">
            {featured.description}
          </p>

          <div className="flex gap-3 pt-2">
            <button className="rounded-full bg-white px-6 py-2 uppercase text-sm font-semibold text-black hover:bg-gray-300 transition duration-300 cursor-pointer">
              Assistir
            </button>

            <button className="rounded-full border border-white px-6 py-2 text-sm font-semibold text-white hover:bg-white/10 transition duration-300 cursor-pointer">
              +
            </button>
          </div>
        </div>
      </section>

      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category.title} className="space-y-4">
            <h2 className="text-3xl font-bold">{category.title}</h2>

            <MovieCarousel movies={category.movies} />
          </section>
        ))}
      </div>
    </main>
  );
}
