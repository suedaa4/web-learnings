const games = [
    "Stardew Valley",
    "Minecraft",
    "Valorant",
    "The Sims 4",
    "Terraria",
]

    for(const game of games){  //kendilerini verir
        console.log(game);
    }

    for (const game in games){  //indexleri verir
        console.log(game);
    }