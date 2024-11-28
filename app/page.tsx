"use client";

import { useEffect, useState } from "react";
import { Card, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useRouter } from "next/navigation";

export default function Home() {
  const [champions, setChampions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLane, setSelectedLane] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const response = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json"
        );
        const data = await response.json();
        const championsArray = Object.values(data.data);
        setChampions(championsArray);
      } catch (error) {
        console.error("Erro ao buscar os campeões:", error);
      }
    };

    fetchChampions();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleLaneChange = (lane) => {
    setSelectedLane(lane.currentKey || "");
  };

  const handleClick = (champion) => {
    router.push(
      `/details?name=${encodeURIComponent(
        champion.name
      )}&image=${encodeURIComponent(
        `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
      )}`
    );
  };

  // Filtros aplicados ao array de campeões
  const filteredChampions = champions.filter(
    (champion) =>
      champion.name.toLowerCase().includes(searchQuery) &&
      (selectedLane === "" || champion.tags.includes(selectedLane))
  );

  return (
    <div className="flex flex-col items-center gap-12 p-6 bg-gray-900 w-full min-h-screen">
      {/* Header */}
      <header className="w-full flex flex-col items-center gap-4 px-6">
        <h1 className="text-4xl font-bold text-white mb-2">
          League of Legends Champions
        </h1>
        <p className="text-white text-lg">
          Explore todos os campeões e descubra suas histórias e skins.
        </p>
      </header>

      {/* Barra de Pesquisa e Select de Filtro */}
      <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-4xl">
        <Input
          placeholder="Search champion..."
          className="w-full sm:w-2/3 h-10"
          value={searchQuery}
          onChange={handleSearchChange}
          startContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m2.1-4.95a7.875 7.875 0 11-15.75 0 7.875 7.875 0 0115.75 0z" />
          </svg>}
        />
        <Select
          placeholder="Filter by lane"
          className="w-full sm:w-1/3"
          onSelectionChange={handleLaneChange}
        >
          <SelectItem key="">All Lanes</SelectItem>
          <SelectItem key="Tank">Tank</SelectItem>
          <SelectItem key="Fighter">Fighter</SelectItem>
          <SelectItem key="Assassin">Assassin</SelectItem>
          <SelectItem key="Mage">Mage</SelectItem>
          <SelectItem key="Marksman">Marksman</SelectItem>
          <SelectItem key="Support">Support</SelectItem>
        </Select>
      </div>

      {/* Lista de Campeões */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-6">
        {filteredChampions.map((champion) => (
          <Card
            key={champion.id}
            isFooterBlurred
            radius="lg"
            className="border-none transition-transform duration-500 ease-in-out hover:scale-105"
          >
            {/* Imagem */}
            <Image
              alt={champion.name}
              className="object-cover rounded-t-lg"
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
              width="100%"
              height={200}
            />

            {/* Rodapé com Nome e Botão */}
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">{champion.name}</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
                onClick={() => handleClick(champion)}
              >
                See More
              </Button>
            </CardFooter>
          </Card>
        ))}
        {filteredChampions.length === 0 && (
          <p className="text-white col-span-full text-center">No champions found.</p>
        )}
      </div>
    </div>
  );
}
