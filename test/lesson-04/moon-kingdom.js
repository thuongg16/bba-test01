function createCharacters() {
    const characters = [
        {
            name: "Mario",
            level: 3,
            health: 450
        },
        {
            name: "Thuong",
            level: 2,
            health: 250
        },
        {
            name: "Azura",
            level: 1,
            health: 100
        },
    ];

    const charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });
    console.log(charactersPowerUp);

    const possibleWinners = charactersPowerUp.filter(character => {
        return character.health > 1000;
    });
    console.log(possibleWinners);
}

createCharacters();

const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 }
];

function printLeaderboard(players) {
    // sort
    players.sort((a, b) => b.score - a.score);

    // add 🥇 🥈 🥉
    players.forEach((player, index) => {
        let medal = "";
        if (index === 0) {
            medal = "🥇";
        } else if (index === 1) {
            medal = "🥈";
        } else if (index === 2) {
            medal = "🥉";
        }

        console.log(`${medal} ${index + 1}. ${player.name} - ${player.score} pts`);
    });
}

printLeaderboard(players);