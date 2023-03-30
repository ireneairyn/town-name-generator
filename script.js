function generatePuebloName() {
  const prefix = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Ash",
    "Brad",
    "Bur",
    "Combe",
    "East",
    "Great",
    "High",
    "North",
    "South",
    "West",
    "Al",
    "Barton",
    "Bishops ",
    "Castle",
    "Castle ",
    "Church ",
    "Cle",
    "Kirk",
    "New",
    "Old",
    "New ",
    "Old ",
    "Wibble",
  ];
  const nouns = [
    "",
    "",
    "",
    "cock",
    "ball",
    "end",
    "crap",
    "well",
    "castle",
    "shit",
    "boggle",
    "worth",
    "gobble",
    "wack",
    "nimcom",
    "cuppa",
    "chuffed",
    "cheeky",
    "bloke",
    "mate",
    "posh",
    "bosh",
    "boss",
    "lad",
    "brolly",
    "miff",
    "innit",
    "chinwag",
    "quid",
    "bum",
    "cup",
    "butter",
    "fish",
    "chips",
    
  ];
  const suffix = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "by",
    "ford",
    "ham",
    "stead",
    "ton",
    "wick",
    "-on-Avon",
    "-by-the-woods",
    "-in-the-marsh",
    "-on-the-hill",
    "-in-the-rain",
    "loo",
    "ffle",
    "puff",
    "dor",
    "warts",
    "poop",
    "key",
    "bury",
    "thorpe",
    "let",
    "meade",
    "alley",
    "stick",
    "bridge",
    "ville",
  ];
  let randomPrefix, randomNoun, randomSuffix;

  do {
    randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    randomSuffix = suffix[Math.floor(Math.random() * suffix.length)];
  } while (randomPrefix === "" && randomNoun === "" && randomSuffix === "");

  return `${randomPrefix}${randomNoun}${randomSuffix}`;
}

window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("generate");
  button.addEventListener("click", () => {
    const response = document.getElementById("response");
    const responseText = generatePuebloName();
    response.innerText = responseText;
  });
});
