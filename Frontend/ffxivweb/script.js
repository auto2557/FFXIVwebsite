const bosses = {
    alexander: [
        {
            name: "Oppressor",
            description: "Oppressor is a mechanical boss in Alexander's raid series. It uses devastating tank busters and AoE attacks, requiring careful positioning and coordination between healers and tanks.",
            image: "/Frontend/imges/boss/opessor.jpg"
        },
        {
            name: "Living Liquid",
            description: "Living Liquid features a unique transformation mechanic. It requires players to adapt to changing forms, which include a hand, a leg, and even a large tornado form.",
            image: "path/to/living-liquid-image.jpg"
        },
        {
            name: "Brute Justice",
            description: "Brute Justice is a fusion of previous raid bosses. It combines various mechanics, including heavy-hitting missiles and coordination-dependent mechanics like Limit Cut.",
            image: "path/to/brute-justice-image.jpg"
        },
        {
            name: "Cruise Chaser",
            description: "Cruise Chaser uses a combination of laser-based AoEs and sword attacks. The fight requires quick movement and tight coordination to handle split damage.",
            image: "path/to/cruise-chaser-image.jpg"
        },
        {
            name: "Alexander Prime",
            description: "Alexander Prime is the final boss in the Alexander raid series. The fight includes heavy raid-wide damage and a time-manipulation mechanic that requires players to carefully handle debuffs.",
            image: "path/to/alexander-prime-image.jpg"
        }
    ],
    // Continue the same for 'omega', 'eden', 'pandaemonium'
    omega: [ /* ... */ ],
    eden: [ /* ... */ ],
    pandaemonium: [ /* ... */ ]
};

function showBosses(expansion) {
    const bossList = document.getElementById('boss-list');
    const bossesToShow = bosses[expansion];
    
    bossList.innerHTML = `<h2>${expansion.charAt(0).toUpperCase() + expansion.slice(1)} Bosses</h2>`;
    
    let listHtml = '<ul>';
    bossesToShow.forEach((boss, index) => {
        listHtml += `<li><a href="#" onclick="showBossDetails('${expansion}', ${index})">${boss.name}</a></li>`;
    });
    listHtml += '</ul>';
    
    bossList.innerHTML += listHtml;
}

function showBossDetails(expansion, index) {
    const bossDetails = document.getElementById('boss-details');
    const boss = bosses[expansion][index];
    
    bossDetails.innerHTML = `
        <h3>${boss.name}</h3>
        <img src="${boss.image}" alt="${boss.name}" style="max-width: 100%; height: auto;">
        <p>${boss.description}</p>
    `;
}
