window.unitExercises = [
  [
    { type: "choice", title: "Choose the best answer", prompt: "She ___ from Poland.", options: ["am", "is", "are"], answer: "is", why: "Use is with she." },
    { type: "complete", title: "Complete the sentence", prompt: "We ___ from Türkiye.", answer: "are", why: "Use are with we." },
    { type: "build", title: "Build the sentence", tokens: ["five", "Can", "countries?", "you", "name"], answer: ["Can", "you", "name", "five", "countries?"], why: "Start a can question with Can + subject + base verb." },
    { type: "match", title: "Match the grammar", choices: ["Identity or fact", "Possibility or opportunity", "Question about ability"], pairs: [
      { left: "I am from Türkiye.", answer: "Identity or fact" },
      { left: "You can visit the museum.", answer: "Possibility or opportunity" },
      { left: "Can you speak English?", answer: "Question about ability" }
    ], why: "Be gives identity or facts; can describes ability or possibility." },
    { type: "fix", title: "Fix the mistake", prompt: "She can speaks English.", answer: "She can speak English.", why: "After can, use the base verb speak." }
  ],
  [
    { type: "choice", title: "Choose the best answer", prompt: "Mert ___ (study) English every evening.", options: ["study", "studies", "is study"], answer: "studies", why: "With he, she, or it, study changes to studies." },
    { type: "complete", title: "Complete the sentence", prompt: "James ___ (leave) home by half past seven.", answer: "leaves", why: "Add -s to the simple-present verb with James." },
    { type: "build", title: "Build the sentence", tokens: ["after", "English", "studies", "school.", "She"], answer: ["She", "studies", "English", "after", "school."], why: "Use the simple present for routines and habits." },
    { type: "match", title: "Match the grammar", choices: ["Routine or habit", "Negative statement", "Question"], pairs: [
      { left: "She walks to school every day.", answer: "Routine or habit" },
      { left: "He doesn't take the bus.", answer: "Negative statement" },
      { left: "Does James take the bus?", answer: "Question" }
    ], why: "Simple-present routines use the base verb or verb-s; negatives use don't/doesn't; questions use do/does." },
    { type: "fix", title: "Fix the mistake", prompt: "Does James takes the bus?", answer: "Does James take the bus?", why: "After does, use the base verb take." }
  ],
  [
    { type: "choice", title: "Choose the best answer", prompt: "Sam is ___ shy to start a conversation.", options: ["too", "enough", "many"], answer: "too", why: "Use too + adjective + to + verb for more than is suitable." },
    { type: "complete", title: "Complete the sentence", prompt: "Sam is clever ___ to solve difficult puzzles.", answer: "enough", why: "Enough follows an adjective: clever enough." },
    { type: "build", title: "Build the sentence", tokens: ["to", "confident", "things.", "Sophie", "try", "is", "enough", "new"], answer: ["Sophie", "is", "confident", "enough", "to", "try", "new", "things."], why: "Put enough after the adjective, then use to + base verb." },
    { type: "match", title: "Match the grammar", choices: ["too + adjective + to + verb", "adjective + enough + to + verb", "enough comes after the adjective"], pairs: [
      { left: "too shy to speak", answer: "too + adjective + to + verb" },
      { left: "clever enough to solve it", answer: "adjective + enough + to + verb" },
      { left: "confident enough", answer: "enough comes after the adjective" }
    ], why: "Too comes before the adjective; enough follows an adjective." },
    { type: "fix", title: "Fix the mistake", prompt: "Sophie is enough confident to try new things.", answer: "Sophie is confident enough to try new things.", why: "Place enough after the adjective confident." }
  ],
  [
    { type: "choice", title: "Choose the best answer", prompt: "Gökçe ___ (report) important news.", options: ["report", "reports", "is report"], answer: "reports", why: "Use the -s form with a singular subject in the simple present." },
    { type: "complete", title: "Complete the sentence", prompt: "Berkay works ___ a photography studio.", answer: "in", why: "Use in for a workplace viewed as an enclosed place or organisation." },
    { type: "build", title: "Build the sentence", tokens: ["Berkay", "work?", "does", "Where"], answer: ["Where", "does", "Berkay", "work?"], why: "Use Where + does + subject + base verb for a simple-present question." },
    { type: "match", title: "Match the grammar", choices: ["Enclosed place or organisation", "Workplace location", "Farm or land"], pairs: [
      { left: "in a photography studio", answer: "Enclosed place or organisation" },
      { left: "at a pharmacy", answer: "Workplace location" },
      { left: "on a farm", answer: "Farm or land" }
    ], why: "Learn common workplace prepositions with the place: in a studio, at a pharmacy, on a farm." },
    { type: "fix", title: "Fix the mistake", prompt: "Tolga design new buildings in an architecture firm.", answer: "Tolga designs new buildings in an architecture firm.", why: "Add -s to the simple-present verb with Tolga." }
  ],
  [
    { type: "choice", title: "Choose the best answer", prompt: "The children ___ (study) right now.", options: ["study", "are studying", "is studying"], answer: "are studying", why: "For an action happening now, use are + verb-ing with the children." },
    { type: "complete", title: "Complete the sentence", prompt: "___ name is Joyce.", answer: "Her", why: "Use her before a noun for something belonging to or describing a girl or woman." },
    { type: "build", title: "Build the sentence", tokens: ["in", "studying", "room.", "are", "their", "The", "children"], answer: ["The", "children", "are", "studying", "in", "their", "room."], why: "Use are + verb-ing for an action happening now; their shows whose room it is." },
    { type: "match", title: "Match the grammar", choices: ["Routine or fact", "Action happening now", "Shows whose thing it is"], pairs: [
      { left: "They live in a flat.", answer: "Routine or fact" },
      { left: "They are studying now.", answer: "Action happening now" },
      { left: "their room", answer: "Shows whose thing it is" }
    ], why: "Use simple present for routines, present continuous for now, and a possessive adjective before a noun." },
    { type: "fix", title: "Fix the mistake", prompt: "They are study in their room right now.", answer: "They are studying in their room right now.", why: "After are, use the -ing form studying." }
  ],
  [
    { type: "choice", title: "Choose the best answer", prompt: "The festival ___ (take) place every October.", options: ["take", "takes", "is taking"], answer: "takes", why: "Every October describes a regular event; use takes with the festival." },
    { type: "complete", title: "Complete the sentence", prompt: "Today the chefs ___ preparing food.", answer: "are", why: "Use are + verb-ing with the plural subject the chefs." },
    { type: "build", title: "Build the sentence", tokens: ["food", "are", "The", "today.", "preparing", "chefs"], answer: ["The", "chefs", "are", "preparing", "food", "today."], why: "Use are + verb-ing for an activity happening now or around now." },
    { type: "match", title: "Match the grammar", choices: ["Regular event", "Action happening now", "Connects alternatives"], pairs: [
      { left: "The festival takes place every October.", answer: "Regular event" },
      { left: "The chefs are preparing food.", answer: "Action happening now" },
      { left: "Would you like tea or coffee?", answer: "Connects alternatives" }
    ], why: "The simple present describes repeated events, the present continuous describes current actions, and or links choices." },
    { type: "fix", title: "Fix the mistake", prompt: "The festival take place every October.", answer: "The festival takes place every October.", why: "The singular subject festival takes the verb form takes." }
  ],
  [
    { type: "choice", title: "Choose the best answer", prompt: "There ___ thousands of animals in the past.", options: ["was", "were", "are"], answer: "were", why: "Use there were before a plural noun such as thousands." },
    { type: "complete", title: "Complete the sentence", prompt: "There ___ not enough food for them.", answer: "was", why: "Use there was with the uncountable noun food." },
    { type: "build", title: "Build the sentence", tokens: ["habitats.", "protect", "should", "We", "natural"], answer: ["We", "should", "protect", "natural", "habitats."], why: "Use should + base verb to give advice." },
    { type: "match", title: "Match the grammar", choices: ["Past existence with a plural noun", "Past existence with a singular or uncountable noun", "Advice or recommendation"], pairs: [
      { left: "There were many animals.", answer: "Past existence with a plural noun" },
      { left: "There was enough food.", answer: "Past existence with a singular or uncountable noun" },
      { left: "We should protect habitats.", answer: "Advice or recommendation" }
    ], why: "Use there were with plural nouns, there was with singular or uncountable nouns, and should + base verb for advice." },
    { type: "fix", title: "Fix the mistake", prompt: "There was thousands of animals in the past.", answer: "There were thousands of animals in the past.", why: "Use there were before the plural noun thousands." }
  ],
  [
    { type: "choice", title: "Choose the best answer", prompt: "AI ___ (help) with animation in the future.", options: ["helps", "will help", "will helps"], answer: "will help", why: "Use will + base verb for a future prediction." },
    { type: "complete", title: "Complete the sentence", prompt: "Films ___ let viewers choose plot lines in the future.", answer: "will", why: "Use will + base verb for a future prediction." },
    { type: "build", title: "Build the sentence", tokens: ["film-making.", "change", "will", "Technology"], answer: ["Technology", "will", "change", "film-making."], why: "After will, use the base verb change." },
    { type: "match", title: "Match the grammar", choices: ["Film story or plot", "Future prediction", "Future question"], pairs: [
      { left: "The film follows a young astronaut.", answer: "Film story or plot" },
      { left: "Technology will change cinema.", answer: "Future prediction" },
      { left: "Will cinemas disappear?", answer: "Future question" }
    ], why: "Film plots often use the simple present; will + base verb makes predictions and future questions." },
    { type: "fix", title: "Fix the mistake", prompt: "The film will follows a young astronaut.", answer: "The film will follow a young astronaut.", why: "After will, use the base verb follow." }
  ]
];
