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

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateVoice() {
  const output = document.getElementById("output");
  const randomVoice = rand(linguistics);
  output.textContent = `Generated Voice: ${randomVoice}`;
}