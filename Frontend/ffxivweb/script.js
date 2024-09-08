const bosses = {
    alexander: [
        {
            name: "Oppressor",
            description: "Oppressor is a mechanical boss in Alexander's raid series. It uses devastating tank busters and AoE attacks, requiring careful positioning and coordination between healers and tanks.",
            image: "/Frontend/imges/boss/opessor.jpg",
            skills: [
                { 
                    name: "Mega Beam", 
                    description: "A heavy-hitting frontal laser attack that requires the tank to use mitigation."
                },
                { 
                    name: "Sluice", 
                    description: "A ground-targeted AoE that deals damage to all players within its range."
                },
                { 
                    name: "Wired Axe", 
                    description: "A spinning axe attack that targets a random player, dealing splash damage in a radius."
                },
                { 
                    name: "Quarantine", 
                    description: "Traps a player in a quarantine zone, requiring other players to break them out."
                }
            ]
        },
        {
            name: "Living Liquid",
            description: "Living Liquid features a unique transformation mechanic. It requires players to adapt to changing forms, which include a hand, a leg, and even a large tornado form.",
            skills: [
                { 
                    name: "Fluid Strike", 
                    description: "A wide AoE attack that must be dodged by all players."
                },
                { 
                    name: "Liquid Hand", 
                    description: "Summons a massive hand that grabs and stuns the tank, requiring a quick response from healers."
                },
                { 
                    name: "Cascade", 
                    description: "A room-wide AoE that deals damage to all players. Must be mitigated with shields and heals."
                },
                { 
                    name: "Hydraulic Ram", 
                    description: "A knockback attack that forces players to reposition quickly or fall off the arena."
                }
            ]
        },
        {
            name: "Brute Justice",
            description: "Brute Justice is a fusion of the bosses Blaster, Brawler, Vortexer, and Swindler, combining their abilities into a powerful new form.",
            skills: [
                { 
                    name: "Apocalyptic Ray", 
                    description: "A powerful linear AoE that requires precise positioning to avoid massive damage."
                },
                { 
                    name: "Double Rocket Punch", 
                    description: "Targets the tank with two consecutive punches, dealing massive damage and applying debuffs."
                },
                { 
                    name: "Flarethrower", 
                    description: "A wide frontal cone of fire that must be avoided by moving behind Brute Justice."
                },
                { 
                    name: "Long Needle", 
                    description: "Targets a random player with a high-damage ranged attack."
                }
            ]
        },
        {
            name: "Cruise Chaser",
            description: "Cruise Chaser is a mechanical boss equipped with advanced weaponry and powerful lasers. It transforms into a powerful mecha, increasing its mobility and attack speed.",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        }
    ],
    

    omega: [
        {
            name: "Omega",
            description: "Omega is a powerful mechanical being with the ability to replicate itself and others. Its raid involves challenging mechanics that test the coordination of the party.",
            image: "/Frontend/imges/boss/omega.jpg",
            skills: [
                { 
                    name: "Hyper Pulse", 
                    description: "Room-wide AoE, needs mitigation."
                },
                { 
                    name: "Enrage Countdown", 
                    description: "Time-limited mechanic."
                },
                { 
                    name: "Guided Missile", 
                    description: "Targets random players with missiles."
                },
                { 
                    name: "Wave Cannon", 
                    description: "Line AoE that can knock back players."

                }
            ]
        },
        {
            name: "Exdeath",
            description: "Exdeath appears in the Omega raid series, bringing his signature attacks from earlier Final Fantasy games, including the infamous 'Void' mechanic.",
            image: "/Frontend/imges/boss/exdeath.jpg",
            skills: [
                { 
                    name: "Void", 
                    description: "Massive AoE, players need to position properly."
                },
                { 
                    name: "Doom", 
                    description: "Inflicts a curse that kills players if not cleansed."
                },
                { 
                    name: "White Hole", 
                    description: "Lowers the health of all players."
                },
                { 
                    name: "Fire/Blizzard/Thunder", 
                    description: "Elemental AoEs."
                }
            ]
        },
        {
            name: "Kefka",
            description: "Kefka is the final boss of one of the Omega tiers. Known for his chaotic and unpredictable attacks, the fight challenges players with random debuffs and AoE patterns.",
            image: "/Frontend/imges/boss/kefka.jpg",
            skills: [
                { 
                    name: "Light of Judgment", 
                    description: "Random AoE dealing heavy damage."
                },
                { 
                    name: "Forsaken", 
                    description: "A combination of debuffs and AoEs."
                },
                { 
                    name: "Ultima Upheaval", 
                    description: "Room-wide AoE."
                },
                { 
                    name: "Hyperdrive", 
                    description: "Single-target high damage."
                }
            ]
        },
        {
            name: "Chaos",
            description: "Chaos is another boss in the Omega series, presenting a variety of elemental-based attacks that force players to adapt to shifting elements during the fight.",
            image: "/Frontend/imges/boss/chaos.jpg",
            skills: [
                { 
                    name: "Flame", 
                    description: "Fire AoE that deals continuous damage."
                },
                { 
                    name: "Flood", 
                    description: "Water-based mechanic that shifts arena features."
                },
                { 
                    name: "Wind Slash", 
                    description: "AoE knockback."
                },
                { 
                    name: "Earthquake", 
                    description: "Targets the ground with a room-wide quake."
                }
            ]
        }
    ],
    eden: [
        {
            name: "Eden Prime",
            description: "Eden Prime is the first boss in the Eden raid series, using a combination of light and dark attacks to challenge players with positional mechanics.",
            image: "/Frontend/imges/boss/eden-prime.jpg",
            skills: [
                { 
                    name: "Eternal Breath", 
                    description: "Room-wide AoE, mitigated with shields."
                },
                { 
                    name: "Delta Attack", 
                    description: "Deals damage in a cross pattern."
                },
                { 
                    name: "Flood of Light", 
                    description: "Covers parts of the arena in light."
                },
                { 
                    name: "Dark Shockwave", 
                    description: " Knockback mechanic."
                }
            ]
        },
        {
            name: "Voidwalker",
            description: "Voidwalker is a boss that requires players to manage darkness-infused mechanics and handle split damage across the party.",
            image: "/Frontend/imges/boss/voidwalker.jpg",
            skills: [
                { 
                    name: "Void Arrow", 
                    description: "Targets random players with AoE."
                },
                { 
                    name: "Entropy", 
                    description: "Inflicts a curse that must be healed."
                },
                { 
                    name: "Flood of Shadow", 
                    description: "Arena-wide AoE mechanic."
                },
                { 
                    name: "Punishment", 
                    description: "High-damage tank buster."
                }
            ]
        },
        {
            name: "Ramuh",
            description: "Ramuh appears as a reimagined version in the Eden raids, combining his lightning-based attacks with new mechanics involving tethers and orbs.",
            image: "/Frontend/imges/boss/ramuh.jpg",
            skills: [
                { 
                    name: "Judgment Bolt", 
                    description: "Massive AoE lightning attack."
                },
                { 
                    name: "Levinforce", 
                    description: "Lightning orb that must be absorbed."
                },
                { 
                    name: "Tribunal Summons", 
                    description: "Summons clones to assist."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        },
        {
            name: "Shiva",
            description: "Shiva is the final boss in one of the Eden tiers, presenting players with ice and mirror-based mechanics that reflect and duplicate attacks.",
            image: "/Frontend/imges/boss/shiva.jpg",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        }
    ],
    pandaemonium: [
        {
            name: "Hesperos",
            description: "Hesperos is the first boss of the Pandæmonium raid series. His fight is themed around theater, with dramatic attack patterns that require precise movement.",
            image: "/Frontend/imges/boss/hesperos.jpg",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        },
        {
            name: "Phoinix",
            description: "Phoinix uses a combination of fire and resurrection mechanics, forcing players to carefully handle phase transitions to avoid being overwhelmed.",
            image: "/Frontend/imges/boss/phoinix.jpg",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        },
        {
            name: "Erichthonios",
            description: "Erichthonios is a towering foe who challenges players with brute force and multi-target attacks. Coordination and timing are key to surviving his enrage.",
            image: "/Frontend/imges/boss/erichthonios.jpg",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        },
        {
            name: "Lahabrea",
            description: "Lahabrea is the final boss of the Pandæmonium raid, presenting a series of memory and flame-based mechanics that test the reflexes and coordination of the party.",
            image: "/Frontend/imges/boss/lahabrea.jpg",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        }
    
    ],
    dawntrail: [
        {
            name: "Tlaloc",
            description: "Tlaloc is the first boss in the Dawntrail raid series, drawing power from storms and weather-based mechanics. Players need to adapt to changing environmental conditions to avoid devastating attacks.",
            image: "/Frontend/imges/boss/tlaloc.jpg",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        },
        {
            name: "Quetzalcoatl",
            description: "Quetzalcoatl, the thunderbird, rains lightning and wind-based attacks on the raid. The fight features large-scale AoEs that must be mitigated and dodged with precise movement.",
            image: "/Frontend/imges/boss/quetzalcoatl.jpg",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        },
        {
            name: "Ix Chel",
            description: "Ix Chel is a healer-type boss that tests the raid's coordination with healing debuffs and phases that require coordinated dispels and interrupts.",
            image: "/Frontend/imges/boss/ixchel.jpg",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        },
        {
            name: "Ah Puch",
            description: "Ah Puch, the god of death, uses mechanics centered around curses and deathly shadows. Players must manage curse timers and coordinate their movements to survive his onslaught.",
            image: "/Frontend/imges/boss/ahpuch.jpg",
            skills: [
                { 
                    name: "Photon", 
                    description: "Targets a random player with a high-damage beam attack."
                },
                { 
                    name: "Spin Crusher", 
                    description: "A spinning melee attack that deals massive damage to players in close proximity."
                },
                { 
                    name: "Laser Sword", 
                    description: "A wide sweeping attack that hits players in front of Cruise Chaser."
                },
                { 
                    name: "Optical Sight", 
                    description: "Cruise Chaser locks onto a random player and fires a powerful laser, requiring the group to stack together."
                }
            ]
        }
    ]
};

// Function to display the list of bosses when an expansion is selected
function showBosses(expansion) {
    const bossList = document.getElementById('boss-list');
    const bossDetails = document.getElementById('boss-details');
    
    // Clear the previous boss details and list when selecting a new expansion
    bossList.innerHTML = '';
    bossDetails.innerHTML = '';
    
    const bossesToShow = bosses[expansion];
    
    bossList.innerHTML = `<h2>${expansion.charAt(0).toUpperCase() + expansion.slice(1)} Bosses</h2>`;
    
    let listHtml = '<ul>';
    bossesToShow.forEach((boss, index) => {
        listHtml += `<li><a href="#" onclick="showBossDetails('${expansion}', ${index})">${boss.name}</a></li>`;
    });
    listHtml += '</ul>';
    
    bossList.innerHTML += listHtml;
}

// Function to display the detailed boss information, including skills
function showBossDetails(expansion, index) {
    const bossDetails = document.getElementById('boss-details');
    
    // Clear the previous boss details
    bossDetails.innerHTML = '';
    
    const boss = bosses[expansion][index];
    
    bossDetails.innerHTML = `
        <h3>${boss.name}</h3>
        <img src="${boss.image}" alt="${boss.name}" class="boss-image">
        <p>${boss.description}</p>
    `;
    
    // Show boss skills if available
    if (boss.skills) {
        let skillsHtml = '<h4>Skills:</h4><ul>';
        boss.skills.forEach(skill => {
            skillsHtml += `<li><strong>${skill.name}:</strong> ${skill.description}</li>`;
        });
        skillsHtml += '</ul>';
        
        bossDetails.innerHTML += skillsHtml;
    }
}
