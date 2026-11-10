addTopic("final", {
  id: "missions",
  name: "Exploration Missions",
  threads: [
    {
      q: "Why are the Voyager probes still such a big deal, almost 50 years after launch?",
      key: ["Launched 1977 during a rare planetary alignment", "Voyager 2: only spacecraft to visit Uranus (1986) and Neptune (1989)", "Voyager 1 entered interstellar space in 2012, Voyager 2 in 2018", "Golden Records: sounds and images of Earth", "Pale Blue Dot photo (1990)", "Nuclear power fading; instruments being shut off"],
      f: [
        "The two Voyager probes launched in ___ and are now in ___ space.",
        "Which planets did Voyager 2 visit that no other spacecraft has?",
        "Why was 1977 such a lucky time to launch?",
        "The Voyagers carry a Golden Record for anyone who finds them. What would you put on one today, and why?",
      ],
    },
    {
      q: "What's a gravity assist, and why do almost all deep-space missions use one?",
      key: ["Fly close to a planet to change speed and direction", "Borrows a tiny bit of the planet's orbital motion", "Saves huge amounts of fuel", "Voyager, Cassini, New Horizons, Parker Solar Probe"],
      f: [
        "A gravity assist uses a planet's ___ to speed up or redirect a spacecraft.",
        "Where does the extra speed come from? Does the planet lose anything?",
        "Parker Solar Probe uses Venus to slow down. Why would getting close to the Sun require slowing down?",
        "It takes more energy to reach the Sun than to leave the solar system. Why?",
      ],
    },
    {
      q: "How do spacecraft get power and talk to us from billions of kilometers away?",
      key: ["Solar panels work in the inner solar system (Juno uses giant ones at Jupiter)", "Far out: RTGs, nuclear batteries powered by plutonium-238 decay", "Deep Space Network: antennas in California, Spain, Australia, ~120° apart", "Signals take hours (nearly a day for Voyager 1)"],
      f: [
        "Far from the Sun, solar panels are weak, so many probes use nuclear batteries called ___.",
        "Why does NASA have giant antennas in California, Spain, and Australia?",
        "A command to Voyager 1 takes nearly a day to arrive. How does that change how you fly a spacecraft?",
        "The Voyagers' power is fading. If you were in charge, which instrument would you keep on last, and why?",
      ],
    },
    {
      q: "What did Cassini discover at Saturn, and why did NASA crash it on purpose?",
      key: ["Launched 1997; orbited Saturn 2004–2017", "Huygens probe landed on Titan in 2005: most distant landing ever", "Enceladus: water plumes from an underground ocean", "Titan: methane lakes and rain", "2017 'Grand Finale': dove between the rings, then into Saturn to avoid contaminating moons"],
      f: [
        "Cassini studied ___ and its moons; its partner probe Huygens landed on ___.",
        "What did Cassini discover spraying out of Enceladus?",
        "Why did NASA deliberately crash Cassini into Saturn?",
        "Planetary protection means not contaminating other worlds. How careful should we be, and what about bringing samples home?",
      ],
    },
    {
      q: "What did New Horizons find at Pluto and beyond?",
      key: ["Launched 2006; Pluto flyby July 14, 2015", "Giant heart-shaped nitrogen-ice plain, water-ice mountains, blue haze", "Possible ocean beneath the surface", "Arrokoth flyby (2019): two-lobed 'snowman', most distant object ever visited"],
      f: [
        "New Horizons flew past ___ in 2015 and found a giant ___-shaped plain.",
        "Why could it only fly past instead of going into orbit?",
        "Arrokoth looks like two pieces gently stuck together. What does that tell us about how planets started forming?",
        "Pluto is geologically active, despite being so far from the Sun. What could keep it warm inside?",
      ],
    },
    {
      q: "Tell me about the Mars rovers. How has each one built on the last?",
      key: ["Sojourner (1997): first rover", "Spirit & Opportunity (2004): found evidence of past water; Opportunity lasted ~14 years", "Curiosity (2012): Gale Crater was once habitable; nuclear powered", "Perseverance (2021): Jezero Crater delta, caching samples, made oxygen (MOXIE)", "Ingenuity: first powered flight on another planet, 72 flights"],
      f: [
        "NASA's newest Mars rover is ___, and it brought a helicopter named ___.",
        "What were Spirit and Opportunity looking for, and what did they find?",
        "Why did Perseverance land in an old river delta?",
        "Perseverance's samples are waiting to come home, but the return plan is uncertain. Is it worth the cost and risk?",
      ],
    },
    {
      q: "Why keep going back to Jupiter? Tell me about Galileo, Juno, and the missions to its icy moons.",
      key: ["Galileo (1995–2003): dropped a probe into Jupiter; found signs of Europa's ocean; crashed into Jupiter to protect Europa", "Juno (2016–): polar orbit, studies Jupiter's interior and storms", "Europa Clipper (launched 2024, arrives 2030)", "ESA's JUICE (launched 2023, will orbit Ganymede)"],
      f: [
        "Galileo found evidence of a hidden ___ under Europa's ice.",
        "Why was Galileo crashed into Jupiter at the end of its mission?",
        "Europa Clipper won't land. How can it study an ocean from above?",
        "If Clipper shows Europa's ocean could support life, what should the next mission be, and what makes it hard?",
      ],
    },
    {
      q: "What have we learned by visiting asteroids and comets up close?",
      key: ["Rosetta (2014): orbited comet 67P; Philae lander bounced and landed", "Dawn: orbited Vesta and Ceres; Ceres's bright spots are salts", "Hayabusa2 (Ryugu) and OSIRIS-REx (Bennu, 2023) returned samples", "Bennu samples: amino acids and water-bearing minerals", "Lucy (Trojans) and Psyche (metal asteroid) on the way"],
      f: [
        "OSIRIS-REx brought back a sample from the asteroid ___.",
        "Why do scientists call asteroids and comets 'time capsules'?",
        "Bennu samples contained amino acids and water-bearing minerals. What does that suggest about how Earth got the ingredients for life?",
        "Psyche is heading to an asteroid that may be the leftover metal core of a baby planet. What could that teach us about Earth's core?",
      ],
    },
    {
      q: "Could we stop an asteroid from hitting Earth? What did DART prove?",
      key: ["DART crashed into Dimorphos, the moonlet of Didymos, Sept 26, 2022", "Shortened its orbit by ~32 minutes, far more than the minimum goal", "Proved a 'kinetic impactor' can nudge an asteroid", "ESA's Hera is following up", "Early detection matters most: years of warning needed"],
      f: [
        "DART crashed into a small asteroid called ___ to change its orbit.",
        "Why test on a moonlet orbiting another asteroid instead of one orbiting the Sun?",
        "Why does finding dangerous asteroids early matter more than having a big rocket?",
        "The dinosaur-killer was ~10 km wide. Could a DART-style mission have saved the dinosaurs? What would it take?",
      ],
    },
    {
      q: "Why put telescopes in space instead of on mountaintops?",
      key: ["Atmosphere blurs starlight and blocks UV, X-rays, much infrared", "Hubble (1990): flawed mirror fixed by astronauts in 1993", "JWST (launched Dec 25, 2021): infrared, 6.5 m gold mirror, sunshield, 1.5 million km away", "JWST sees the earliest galaxies and exoplanet atmospheres"],
      f: [
        "Earth's ___ blurs starlight and blocks some kinds of light completely.",
        "What kind of light does JWST see, and why does it need a giant sunshield?",
        "Hubble launched with a flawed mirror. How was it fixed, and why couldn't we fix JWST the same way?",
        "Ground telescopes keep getting bigger and sharper. Will we always need telescopes in space? Why?",
      ],
    },
    {
      q: "How do we find planets around other stars?",
      key: ["Transit method: star dims as a planet crosses it (Kepler, TESS)", "Wobble (radial velocity): planet tugs its star back and forth", "Direct imaging and microlensing", "More than 6,000 exoplanets confirmed", "JWST reads exoplanet atmospheres from starlight passing through them"],
      f: [
        "Most exoplanets were found by watching for a planet to pass in front of its star, the ___ method.",
        "What's the 'wobble' method, and what does it measure?",
        "How can a telescope tell what an exoplanet's atmosphere is made of?",
        "Why are Earth-sized planets in the habitable zone still the hardest kind to find?",
      ],
    },
    {
      q: "What is the Parker Solar Probe doing, and why is it so extreme?",
      key: ["Launched 2018; flies through the Sun's corona", "Dec 2024: ~6 million km from the surface, ~690,000 km/h", "Fastest object humans have ever built", "Carbon heat shield faces ~1,000 °C+ while instruments stay near room temperature", "Goals: why the corona is so hot, how the solar wind speeds up"],
      f: [
        "Parker Solar Probe flies through the Sun's outer atmosphere, called the ___.",
        "How does it survive that close to the Sun?",
        "Why do we want to understand the solar wind? Connect it to Earth.",
        "Parker is the fastest object humans have ever built. Where does all that speed come from?",
      ],
    },
    {
      q: "If you could plan the next big mission, where would you go, and what would you want to find out?",
      key: ["Uranus orbiter and probe: scientists' top-ranked flagship", "Dragonfly: rotorcraft to Titan (planned launch 2028)", "Enceladus lander/orbiter to sample plumes", "Venus missions (DAVINCI, VERITAS)", "An interstellar probe beyond the Voyagers"],
      f: [
        "Pick a destination: a planet, a ___, an asteroid, or interstellar space.",
        "What's the one big question your mission would answer?",
        "Would you send a flyby, an orbiter, a lander, or a sample return? Why that one?",
        "Scientists ranked a Uranus mission as their top priority. Why would a planet visited only once, in 1986, matter so much?",
      ],
    },
  ],
});
