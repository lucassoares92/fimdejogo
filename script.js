(function () {
  const gameCards = document.querySelector(".js-gameCards");
  const buscaInput = document.querySelector("#busca-jogo");
  const filtroAno = document.querySelector("#filtro-ano");

  const games = [
    {
      title: "Doom 3: BFG Edition",
      image:
        "https://steamcdn-a.akamaihd.net/steam/apps/208200/capsule_616x353.jpg",
      completionTime: "15 horas",
      year: "2025",
      platform: "PC",
    },
    {
      title: "Call of Juarez: Bound in Blood",
      image:
        "https://steamcdn-a.akamaihd.net/steam/apps/21980/capsule_616x353.jpg",
      completionTime: "12 horas",
      year: "2025",
      platform: "PC",
    },
    {
      title: "Ultimate Spider-Man",
      image: "Imagens/Ultimate_Spider-Man_capa.png",
      completionTime: "7 horas e 43 minutos",
      year: "2025",
      platform: "PC",
    },
    {
      title: "Teenage Mutant Ninja Turtles: Shredder's Revenge",
      image:
        "https://steamcdn-a.akamaihd.net/steam/apps/1361510/capsule_616x353.jpg",
      completionTime: "7 horas e 5 minutos",
      year: "2025",
      platform: "PC",
    },
    {
      title: "Star Wars Episode I: Racer",
      image:
        "https://steamcdn-a.akamaihd.net/steam/apps/808910/capsule_616x353.jpg",
      completionTime: "8 horas e 7 minutos",
      year: "2025",
      platform: "PC",
    },
    {
      title: "DOOM (2016)",
      image:
        "https://steamcdn-a.akamaihd.net/steam/apps/379720/capsule_616x353.jpg",
      completionTime: "13 horas e 6 minutos",
      year: "2025",
      platform: "PS4",
    },
    {
      title: "Goof Troop",
      image: "Imagens/Goof_Troop_capa.png",
      completionTime: "2 horas e 21 minutos",
      year: "2025",
      platform: "SNES",
    },
    {
      title: "Unravel Two",
      image:
        "https://steamcdn-a.akamaihd.net/steam/apps/1225570/capsule_616x353.jpg",
      completionTime: "10 horas e 19 minutos",
      year: "2025",
      platform: "PS4",
    },
    {
      title: "Kaze and the Wild Masks",
      image:
        "https://steamcdn-a.akamaihd.net/steam/apps/829280/capsule_616x353.jpg",
      completionTime: "19 horas",
      year: "2025",
      platform: "PC",
    },
    {
      title: "Dolphin Blue",
      image: "Imagens/Dolphin_Blue_capa.png",
      completionTime: "1 hora e 30 minutos",
      year: "2025",
      platform: "Dreamcast",
    },
    {
      title: "Battlefield 4",
      image: "Imagens/Battlefield 4_capa.png",
      completionTime: "10 horas e 43 minutos",
      year: "2025",
      platform: "PS4",
    },
    {
      title: "A Lenda do Herói: Edição Definitiva",
      image: "Imagens/A_Lenda_do_Herói_capa.png",
      completionTime: "18 horas e 4 minutos",
      year: "2025",
      platform: "PC",
    },
    {
      title: "198X",
      image: "Imagens/198X_capa.png",
      completionTime: "2 horas",
      year: "2025",
      platform: "PC",
    },
    {
      title: "Final Vendetta",
      image: "Imagens/Final_Vendetta_capa.png",
      completionTime: "2 horas",
      year: "2025",
      platform: "PC",
    },
    {
      title: "Capcom Beat 'Em Up Bundle",
      image: "Imagens/Capcom_Beat_'Em_Up_Bundle_capa.png",
      completionTime: "7 horas e 12 minutos",
      year: "2025",
      platform: "PC",
    },
    {
      title: "Mega Man X4",
      image: "Imagens/Mega_Man_ X4_capa.png",
      completionTime: "3 horas",
      year: "2025",
      platform: "PS1",
    },
    {
      title: "X-Men Origins: Wolverine",
      image: "Imagens/X-Men_Origins_Wolverine_capa.png",
      completionTime: "11 horas e 27 minutos",
      year: "2025",
      platform: "PC",
    },
  ];

  function renderizarJogos(jogosFiltrados) {
    gameCards.innerHTML = "";
    jogosFiltrados.forEach((game) => {
      gameCards.insertAdjacentHTML(
        "beforeend",
        `
                <div class="cartao-jogo-wrapper">
                    <div class="cartao-jogo">
                        <img src="${game.image}" alt="${game.title}">
                        <div class="cartao-jogo-body">
                            <h5 class="cartao-jogo-title">${game.title}</h5>
                            <p class="cartao-jogo-text">Tempo de zeramento: ${game.completionTime}</p>
                            <p class="cartao-jogo-text">Plataforma: ${game.platform}</p>
                            <p class="cartao-jogo-text cartao-jogo-text-muted">Zerado em: ${game.year}</p>
                        </div>
                    </div>
                </div>
            `
      );
    });
  }

  function filtrarJogos() {
    const busca = buscaInput.value.toLowerCase();
    const ano = filtroAno.value;

    const jogosFiltrados = games.filter((game) => {
      const matchBusca = game.title.toLowerCase().includes(busca);
      const matchAno = !ano || game.year === ano;
      return matchBusca && matchAno;
    });

    renderizarJogos(jogosFiltrados);
  }

  window.limparFiltros = function () {
    buscaInput.value = "";
    filtroAno.value = "";
    renderizarJogos(games);
  };

  buscaInput.addEventListener("input", filtrarJogos);
  filtroAno.addEventListener("change", filtrarJogos);

  renderizarJogos(games);
})();
