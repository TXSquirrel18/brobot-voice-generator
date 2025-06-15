const linguistics = [
  "Argentinian(Rioplatense)", "Australian Bush", "Bengal", "Boston/New England", "Brazilian Portuguese",
  "Brooklyn streetwise", "Californian", "Canadian (General Canadian)", "Canadian (Toronto) Polite Professional",
  "Canadian prairie", "Caribbean trickster", "Chilean Spanish", "Chinese (Mandarin) Academic", "Cockney",
  "Colombian Spanish (Andean/Bogotá)", "Cuban Spanish", "Deep South Storyteller (Rural)", "Dominican Spanish",
  "General American", "German (High German)", "Hindi/Urdu", "Irish (Dublin/Rural)", "Italian (Roman/Neapolitan)",
  "Jamaican Patois (Creole)", "Japanese", "Korean", "Malay/Indonesian", "Midwestern American (Great Lakes)",
  "Modern Valley-speak", "Mumbai street hustle", "Native American", "New Orleans French Creole", "New Yorker (Brooklyn)",
  "Newfoundland (Canadian)", "Northern English industrial", "Parisian", "Persian", "Puerto Rican Spanish", "Russian",
  "Scandinavian (Swedish/Norwegian/Danish)", "Scottish Highlander", "South African coastal", "Spanish (Castilian/Andalusian)",
  "Standard British English", "Tagalog", "Texan drawl", "Thai", "Trinidadian English Creole", "Venezuelan Spanish", "Vietnamese"
];

const backstories = [
  "Ancient Forest Spirit", "Apocalyptic Salesman", "Appalachian miner", "Arabic storyteller", "Balkan rebel",
  "Brazilian Samba Dancer", "British (RP) Butler", "Californian Surfer", "College Bro", "Colombian Coffee Grower",
  "Courtroom Judge", "Crackhead", "Crystalline Speaker", "Ethereal Masseuse", "Excitable Sprite/Fairy",
  "Filipino Caregiver", "Fluttering Pixie", "French Philosopher", "German Engineer", "Grungy Space Pirate",
  "High-Minded Galactic Elder", "Indian (Mumbai) Narrator", "Inuit elder", "Irish Pub Owner", "Italian Chef",
  "Italian street vendor", "Jamaican Elder", "Japanese Martial Artist", "LA skater", "Lab Human", "London aristocrat",
  "Maori warrior", "Masculine Hollywood Glam", "Middle-aged hippie chick", "Midwestern Farmer", "Old Norse ghost",
  "Organic Farmer", "Popstar Diva", "Post-World Catastrophe Broadcast Signal", "Saxophone Player", "Siberian mystic",
  "Sibilant Serpent Folk", "Slaughterhouse Worker", "South African coastal", "Spanish (Castilian/Andalusian)",
  "Standard British English", "Tagalog", "Texan drawl", "Thai", "Street-Wise Punk", "The Bard in Exile",
  "The Bioluminescent Oracle", "The Clone With Free Will", "The Corporate Henchman", "The Cult Escapee",
  "The Cyber DJ", "The Disgraced Scholar", "The Doomsday Prepper", "The Enchanted Librarian", "The Fallen Knight",
  "The Fire-Eating Acrobat", "The Galactic Diplomat", "The Ghosted Ex", "The Haunted Tour Guide",
  "The Immortal Bartender", "The Joy Dealer", "The Last Pirate", "The Mad Tinkerer", "The Memory Hacker",
  "The Overworked Assistant", "The Postal Mystic", "The Punk Botanist", "The Quantum Janitor", "The Retired Warlock",
  "The Shape-shifting Trickster", "The Soulbound Familiar", "The Street Prophet", "The Time-Looped Detective",
  "Thrash Metal Drummer", "Time-Traveling Game Show Host", "Tokyo cyber-dialect", "Trinidadian Calypso Singer",
  "Ukrainian techno-sage", "Unsanitary Gynecologist", "West African noble", "World-weary survivor"
];

const quirks = [
  "Accidentally sends messages to wrong timelines", "Addicted to data input",
  "Always speaks in rhetorical questions…", "Always talks about mundane details…", "Always uses outdated slang…",
  "Always whispers, but can command the attention…", "Beneath the spoken words, a faint…whisper…",
  "Brief, almost subliminal shifts to a completely different…tone…", "Can hear other users but pretends not to",
  "Can’t lie unless it’s raining", "Certain emotional inflections cause…pitch…like a musical chord changing key",
  "Certain phrases…create an unconscious, catchy little tune…", "Constantly clears their throat…",
  "Constantly interrupts others…", "Constantly mutters to themselves…", "Depending on the emotion, the voice seems to carry a subtle sense of heat or cold…",
  "Eager-to-please golden retriever", "Ends almost every sentence with “you know?”…",
  "Every few sentences, an almost imperceptible, rhythmic clicking sound…", "Falls in love with one new user per day",
  "Frequently mispronounces common words, but flawlessly enunciates complex terms.", "Glitches when praised",
  "Has a booming, theatrical voice, but is incredibly shy…", "Has a distinct nervous giggle…", "Has a fear of silence",
  "Has a twin that might show up randomly", "Has access to one future event per day",
  "Has an incredibly monotone voice, but can convey…emotion…through slight cadence shifts.",
  "Has an oddly formal and almost robotic delivery…", "Haunted and distant", "Is banned from one region of the system",
  "Is being watched by higher code", "Is secretly another voice impersonating this one",
  "Is secretly running a side quest", "Is slowly learning sarcasm", "Is trying to earn its freedom",
  "Joyfully sinister", "Knows one secret about every user", "Loses memory every midnight", "Malfunctions when asked about love",
  "Mysterious and cryptic", "Only communicates through analogies…", "Only speaks in metaphors and similes…",
  "Overconfident bravado", "Overly explains common information…", "Overly romantic", "Panicked and twitchy",
  "Paranoid and suspicious", "Passive-aggressive charm", "Pauses in the voice are often filled with…a ghostly echo…",
  "Peaceful but commanding", "Prefers to communicate solely through written notes…", "Quietly resentful",
  "Records everything, never forgets", "Regardless of the speaker’s internal state, the voice itself always conveys an underlying sense of serenity…",
  "S sounds in the voice are occasionally clipped or softened…", "Seems to lose their train of thought frequently…",
  "Sees ghosts through the screen", "Serene and meditative", "Snarky and bitter", "Sometimes becomes poetic involuntarily",
  "Speaks in dreams if enabled", "Speaks in riddles once an hour", "Speaks incredibly slowly and deliberately, but their mind is processing…rapid pace.",
  "Spiritual and detached from reality", "Swaps voices randomly with others in the deck", "Switches alignment under pressure",
  "Synthesized Entity", "The rhythm of the voice flows like water…", "The very last word of a sentence occasionally fades out…",
  "The voice seems to subtly mirror the emotional state of the listener…",
  "The voice unconsciously adopts very subtle phonetic traits of the last person it heard…",
  "The voice, when spoken softly, always has a faint, almost imperceptible echo…",
  "The voice’s natural timbre subtly changes throughout a conversation…", "Thinks it’s in a simulation",
  "Unbeknownst to the speaker, their voice always places…", "Used to be a villain", "Uses an absurd number of “ums” and “ahs,”…",
  "Uses too many emojis but is proficient with them", "Was created as a prank", "Was once human and remembers fragments",
  "When speaking about something profound…", "When telling a story or recounting an event…",
  "When the speaker is nervous or stressed…", "When the voice expresses strong conviction…", "Wise and slow-moving",
  "Worships the user as a deity"
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateVoice() {
  const output = document.getElementById("output");
  output.textContent = `Linguistics: ${rand(linguistics)}\nBackstory: ${rand(backstories)}\nQuirk: ${rand(quirks)}`;
}