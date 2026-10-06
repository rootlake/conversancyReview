addTopic("earth-view", {
  id: "earth",
  name: "Earth",
  threads: [
    {
      q: "Is the equator real, or did someone just draw it there?",
      key: ["Halfway between the poles, 0° latitude", "Real: the poles come from Earth's spin axis", "A great circle", "Projects into the sky as the celestial equator"],
      f: [
        "The equator sits exactly halfway between the ___. Since the poles come from Earth's spin, is the equator real or arbitrary?",
        "Why is the equator 'real' while the Prime Meridian isn't?",
        "If Earth's spin axis shifted, what would happen to the equator, and to the celestial equator?",
        "The equator is the only parallel that's also a great circle. Why can't the Tropic of Cancer be one?",
      ],
    },
    {
      q: "Why does zero longitude run through a London suburb?",
      key: ["North–south lines, pole to pole, all meet at the poles", "Arbitrary: any north–south line works", "Greenwich chosen in 1884 for historical/navigation reasons", "Sky has a local meridian: north → zenith → south"],
      f: [
        "Every meridian runs from the ___ pole to the ___ pole. Why did someone have to pick one to be zero?",
        "What makes Greenwich special, and could zero have been somewhere else?",
        "Your sky has a meridian too, running from north through the zenith to south. What happens when the Sun crosses it?",
        "Latitude has a natural zero and longitude doesn't. The sky has the same problem with Right Ascension. What did astronomers pick as RA's zero?",
      ],
    },
    {
      q: "What makes a circle on the globe 'great'?",
      key: ["Any circle centered on Earth's center", "Largest circle possible; shortest path between two points", "Equator and every pair of meridians are great circles; other parallels aren't", "Ecliptic and celestial equator are great circles on the celestial sphere"],
      f: [
        "A great circle is any circle around Earth whose center is Earth's ___. Can you name one?",
        "Why does a flight from New York to Tokyo go up over Alaska?",
        "Which are great circles: the equator, a meridian, the Tropic of Cancer, the Arctic Circle? Why?",
        "The ecliptic and celestial equator are both great circles in the sky, so they cross at exactly two points. What are those points called?",
      ],
    },
    {
      q: "Give me Pomfret's address in latitude and longitude, and explain what the numbers mean.",
      key: ["About 41.9° N, 71.9° W", "Degrees, minutes, seconds", "Latitude from the equator, longitude from the Prime Meridian", "Eastern Time: UT−5 standard, UT−4 daylight"],
      f: [
        "Pomfret is about 42° ___ and 72° ___. Which line is each number measured from?",
        "What units do latitude and longitude use, and what's a minute of arc?",
        "Each time zone is roughly 15° wide. At 72° west, how many hours behind Greenwich should we be, and does that match our clock?",
        "Find Pomfret's antipode. Roughly where is it, and what season is it there right now?",
      ],
    },
    {
      q: "What happens to your calendar when you fly across the Pacific?",
      key: ["Roughly 180°, opposite the Prime Meridian", "Zigzags around countries and island groups", "Westward: skip ahead a day. Eastward: repeat a day", "Political, not physical (Samoa switched sides in 2011)"],
      f: [
        "The Date Line sits near ___ degrees longitude. If you fly west across it, do you gain or lose a day?",
        "Why does the line zigzag instead of running straight?",
        "Why do we need a date line at all? What goes wrong if you keep traveling west around the world without one?",
        "Is the Date Line any more real than the Prime Meridian? Could a country choose which side it's on?",
      ],
    },
    {
      q: "Point straight up, then straight down through the Earth. What are those points called, and who's on the other side?",
      key: ["Zenith: straight overhead", "Nadir: straight down, through the Earth", "Antipodes: the point on Earth directly opposite you (flip latitude N/S, longitude 180° away)", "Your nadir is your antipode's zenith"],
      f: [
        "The point straight overhead is the ___. Straight down, through the Earth, is the ___.",
        "How are the nadir and the antipodes related?",
        "Your zenith and mine are different if we stand in different places. What does that mean for the altitude–azimuth system?",
        "A star is at your zenith. What can the person at your antipode say about that star right now?",
      ],
    },
    {
      q: "How would you tell the person next to you exactly where to look for a star?",
      key: ["Observer-based system", "Altitude: 0° horizon to 90° zenith", "Azimuth: 0° north, 90° east, 180° south, 270° west", "Changes with time and location"],
      f: [
        "Altitude measures height above the ___. Azimuth starts at ___ and goes around through east.",
        "What's the altitude of the zenith? Of the horizon? What's the azimuth of due east? Due south?",
        "Why are a star's altitude and azimuth useless to a friend in California, while its RA and Dec still work?",
        "The altitude of Polaris equals your latitude. Why? What would it be at the equator and at the North Pole?",
      ],
    },
    {
      q: "Stars need addresses that work for anyone, anywhere. How does the sky's coordinate system pull that off?",
      key: ["Latitude/longitude projected onto the celestial sphere", "Dec: degrees north or south of the celestial equator (±90°)", "RA: hours, 0–24, eastward from the vernal equinox point", "Fixed to the stars, not the observer"],
      f: [
        "Declination is like ___ in the sky, and Right Ascension is like ___.",
        "Why is Right Ascension measured in hours instead of degrees?",
        "Polaris has a declination near +90°. What does that tell you about where it is, and why does it barely move all night?",
        "A star sits at declination −50°. Can we ever see it from Pomfret? Work it out.",
      ],
    },
    {
      q: "How would you find north on campus without a phone?",
      key: ["Noon Sun is due south", "Sun rises due east only at the equinoxes; NE in summer, SE in winter", "Polaris at night", "Compass points to magnetic north, about 14° west of true north here"],
      f: [
        "The Sun rises in the ___, and at midday it's in the ___. How does that help you find north?",
        "Does the Sun rise due east every day? When does it?",
        "Stand in the quad at dawn in June and again in December. Does the Sun come up over the same building?",
        "Why would a compass and Polaris disagree about where north is?",
      ],
    },
  ],
});
