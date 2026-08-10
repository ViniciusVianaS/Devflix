"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const LIMIT = 5;

const categories = [
  {
    title: "Em Alta",
    movies: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      title: `Filme ${i + 1}`,
      image: "/images/bladerunner.jpg",
    })),
  },
  {
    title: "Ação",
    movies: Array.from({ length: 6 }, (_, i) => ({
      id: i + 11,
      title: `Ação ${i + 1}`,
      image: "/images/bladerunner.jpg",
    })),
  },
  {
    title: "Ficção Científica",
    movies: Array.from({ length: 6 }, (_, i) => ({
      id: i + 21,
      title: `Sci-Fi ${i + 1}`,
      image: "/images/bladerunner.jpg",
    })),
  },
];

const featured = {
  title: "A Odisseia",
  description:
    "Após a Guerra de Troia, Odisseu enfrenta uma perigosa jornada de volta para Ítaca.",
  image: "/images/odisseia.jpg",
};

// const categories = [
//   // ... suas categorias aqui
// ];

export default function Main() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <main className="w-full px-8 py-8 text-white ml-[250px]">
      <section className="relative w-[167vh] h-[420px] rounded-3xl overflow-hidden mb-12">
        <Image
          src={featured.image}
          alt={featured.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 p-10 space-y-3 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
            Em Destaque
          </span>
          <h1 className="text-4xl font-bold">{featured.title}</h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            {featured.description}
          </p>
          <div className="flex gap-3 pt-2">
            <button className="rounded-full bg-white px-6 py-2 text-sm font-bold text-black hover:bg-gray-300 transition duration-300 cursor-pointer">
              Assistir
            </button>
            <button className="rounded-full border border-white px-6 py-2 text-sm font-semibold text-white hover:bg-white/10 transition duration-300 cursor-pointer">
              +
            </button>
          </div>
        </div>
      </section>
      <div className="space-y-12">
        {categories.map((category) => {
          const isExpanded = expanded[category.title];
          const visibleMovies = isExpanded
            ? category.movies
            : category.movies.slice(0, LIMIT);

          return (
            <section key={category.title} className="space-y-4">
              <h2 className="text-3xl font-bold">{category.title}</h2>

              <div className="relative">
                <div
                  className="
                    flex
                    gap-5
                    overflow-x-auto
                    overflow-y-hidden
                    pb-4
                    scroll-smooth
                    scrollbar-hide
                  "
                >
                  {visibleMovies.map((movie) => (
                    <div
                      key={movie.id}
                      className="
                        group
                        relative
                        h-[150px]
                        w-[260px]
                        shrink-0
                        overflow-hidden
                        rounded-2xl
                        transition-all
                        duration-300
                        hover:z-20
                        hover:scale-105
                      "
                    >
                      <Image
                        src={movie.image}
                        alt={movie.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/90
                          via-black/30
                          to-transparent
                          opacity-0
                          transition
                          duration-300
                          group-hover:opacity-100
                        "
                      />

                      <div
                        className="
                          absolute
                          bottom-0
                          left-0
                          right-0
                          p-4
                          opacity-0
                          transition
                          duration-300
                          group-hover:opacity-100
                        "
                      >
                        <h3 className="text-lg font-semibold">{movie.title}</h3>

                        <div className="mt-2 flex items-center gap-2">
                          <button
                            className="
                              rounded-full
                              bg-white
                              px-3
                              py-1
                              text-sm
                              font-bold
                              text-black
                              cursor-pointer
                              hover:bg-gray-300
                              duration-300
                            "
                          >
                            Assistir
                          </button>

                          <button
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white
                              text-white
                              cursor-pointer
                              hover:bg-white/10 
                              transition 
                              duration-300
                            "
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {category.movies.length > LIMIT && (
                    <div className="flex shrink-0 items-center">
                      <button
                        onClick={() => toggleExpand(category.title)}
                        className="
                          text-sm
                          font-semibold
                          text-white
                          cursor-pointer
                        "
                      >
                        {isExpanded ? <ChevronLeft /> : <ChevronRight />}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
