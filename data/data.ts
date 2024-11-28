type ChmapionsLista = {
  img: string;
  name: string;
  tipo: string;
  lore: string;
  lane: string;
  skins: { name: string; url: string }[]; // Novo atributo de skins
};

export const champions: ChmapionsLista[] = [
  {
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    name: "Aatrox",
    tipo: "Lutador",
    lore: "Aatrox, a Darkin Blade, foi outrora um defensor nobre de Shurima, agora uma força sombria.",
    lane: "top",
    skins: [
      {
        name: "Classic Aatrox",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      },
      {
        name: "Mecha Aatrox",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg",
      },
      {
        name: "Sea Hunter Aatrox",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg",
      },
    ],
  },
  {
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    name: "Ahri",
    tipo: "Mago",
    lore: "Ahri é uma vastaya de espírito raposa, habilidosa em manipular emoções e essência.",
    lane: "mid",
    skins: [
      {
        name: "Classic Ahri",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      },
      {
        name: "Dynasty Ahri",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg",
      },
      {
        name: "Star Guardian Ahri",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_2.jpg",
      },
    ],
  },
  {
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    name: "Ashe",
    tipo: "Atirador",
    lore: "Ashe é a arqueira glacinata líder da tribo Avarosana, buscando unir as tribos do Freljord.",
    lane: "adc",
    skins: [
      {
        name: "Classic Ashe",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
      },
      {
        name: "Sherwood Forest Ashe",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_1.jpg",
      },
      {
        name: "Cosmic Queen Ashe",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_2.jpg",
      },
    ],
  },
  {
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
    name: "Garen",
    tipo: "Lutador",
    lore: "Garen, o Poder de Demacia, é um defensor leal e de coração puro do reino de Demacia.",
    lane: "top",
    skins: [
      {
        name: "Classic Garen",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
      },
      {
        name: "Steel Legion Garen",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_1.jpg",
      },
    ],
  },
  {
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
    name: "Jinx",
    tipo: "Atirador",
    lore: "Jinx é uma criminosa impulsiva e imprudente de Zaun, obcecada pelo caos.",
    lane: "adc",
    skins: [
      {
        name: "Classic Jinx",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
      },
      {
        name: "Star Guardian Jinx",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_1.jpg",
      },
    ],
  },
  {
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
    name: "Katarina",
    tipo: "Assassino",
    lore: "Katarina, a Lâmina Sinistra, é uma assassina de elite de Noxus, com habilidades letais.",
    lane: "mid",
    skins: [
      {
        name: "Classic Katarina",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
      },
      {
        name: "Battle Queen Katarina",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_1.jpg",
      },
    ],
  },
  {
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
    name: "Irelia",
    tipo: "Lutador",
    lore: "Irelia nasceu em uma família nobre na região de Ionia, mais especificamente em Navori.",
    lane: "top",
    skins: [
      {
        name: "Classic Irelia",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
      },
      {
        name: "Order of the Lotus Irelia",
        url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_1.jpg",
      },
    ],
  },
];
