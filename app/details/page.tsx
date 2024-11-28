"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function Details() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name"); // Nome do campeão
  const image = searchParams.get("image"); // URL da imagem do campeão
  const router = useRouter();

  // Estado para armazenar os dados do campeão
  const [championData, setChampionData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para buscar os dados do campeão
  const fetchChampionData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/11.24.1/data/pt_BR/champion/${name}.json`
      );
      const data = await response.json();
      setChampionData(data.data[name]);
    } catch (error) {
      console.error("Erro ao buscar dados do campeão:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name) {
      fetchChampionData();
    }
  }, [name]);

  const handleBack = () => {
    router.push("/"); // Redireciona para a página inicial
  };

  // Exibir enquanto os dados estão sendo carregados
  if (loading) {
    return (
      <div className="text-center text-white">
        <p>Carregando dados do campeão...</p>
      </div>
    );
  }

  // Verifica se os dados do campeão estão disponíveis
  if (!championData) {
    return (
      <div className="text-center text-white">
        <p>Campeão não encontrado.</p>
        <Button onClick={handleBack} className="mt-4">
          Voltar
        </Button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center bg-gray-900 overflow-y-auto">
      {/* Botão de voltar */}
      <div
        className="absolute top-4 left-4 z-50 text-white cursor-pointer flex items-center"
        onClick={handleBack}
      >
        <IoArrowBack size={24} />
        <span className="ml-2 text-sm">Voltar</span>
      </div>

      {/* Imagem principal com informações sobrepostas */}
      <div className="w-full relative">
        <div className="relative">
          <img
            src={image} // Aqui a imagem deve ser a URL passada
            alt={name || "Detalhes do Campeão"}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4 text-white">
            <h1 className="text-5xl font-bold mb-4">{championData.name}</h1>
            <h2 className="text-lg italic text-yellow-400 mb-4">
              {championData.title}
            </h2>
            <p className="text-base leading-relaxed">{championData.blurb}</p>
          </div>
        </div>
      </div>

      {/* Skins do campeão */}
      <div className="w-full max-w-5xl mx-auto px-8 py-8 text-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Skins</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {championData.skins.map((skin) => (
            <Card
              key={skin.id}
              isFooterBlurred
              radius="lg"
              className="border-none  hover:scale-105 transition-transform shadow-lg"
            >
              {/* Imagem da skin */}
              <Image
                alt={skin.name}
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${skin.num}.jpg`} // Exemplo de URL de skin
                className="object-center rounded-t-lg "
              />
              {/* Nome da skin */}
              <CardFooter className="justify-center py-2 text-center ">
                <p className="text-sm font-medium text-white">{skin.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
