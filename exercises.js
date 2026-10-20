window.unitExercises = [
  [
    { type: "choice", title: "Read the situation", prompt: "Mina and I ___ from Ankara, but our exchange partner ___ speak three languages.", options: ["are / can", "is / can", "are / cans", "am / can"], answer: "are / can", why: "Use are with the plural subject Mina and I. Can is followed by the base verb speak." },
    { type: "complete", title: "Complete the exchange", prompt: "___ your classmates from Izmir, or are they from another city?", answer: "Are", why: "Use are before the plural subject your classmates." },
    { type: "sequence", title: "Put the dialogue in order", instruction: "Tap the four lines in a logical order.", tokens: ["B: I can show you the science lab after lunch.", "A: Are you and your classmates in the robotics club?", "B: Yes, we are.", "A: Can you show me where you meet?"], answer: ["A: Are you and your classmates in the robotics club?", "B: Yes, we are.", "A: Can you show me where you meet?", "B: I can show you the science lab after lunch."], why: "The question and answer should follow a natural conversation order." },
    { type: "match", title: "Match form and meaning", choices: ["Gives identity or a fact", "Describes ability or possibility", "Asks about ability"], pairs: [
      { left: "Our new student is from Spain.", answer: "Gives identity or a fact" },
      { left: "You can borrow a city map.", answer: "Describes ability or possibility" },
      { left: "Can your brother play the bağlama?", answer: "Asks about ability" }
    ], why: "Be describes identity or facts. Can + base verb describes ability or possibility; Can begins an ability question." },
    { type: "fix", title: "Edit the sentence", prompt: "My brother can plays chess in the school club.", answer: "My brother can play chess in the school club.", why: "After can, use the base verb play." }
  ],
  [
    { type: "choice", title: "Choose the accurate routine", prompt: "On school days, Arda ___ the bus at 7:30 and ___ home at 4:00.", options: ["catches / gets", "catch / gets", "catches / get", "is catching / gets"], answer: "catches / gets", why: "Use the simple present for routines. With Arda, both verbs take the third-person -s form." },
    { type: "complete", title: "Use the correct verb form", prompt: "Despite the early start, Ela ___ (finish) her homework before dinner.", answer: "finishes", why: "With a singular third-person subject, finish changes to finishes." },
    { type: "transform", title: "Change the sentence", prompt: "Make this sentence negative: “Mert walks to school every day.”", answer: "Mert doesn't walk to school every day.", accepted: ["Mert does not walk to school every day."], why: "Use doesn't + base verb with Mert. The -s moves from walks to does." },
    { type: "match", title: "Match the sentence to its pattern", choices: ["Third-person affirmative", "Negative with doesn't", "Question with does"], pairs: [
      { left: "Lara studies in the library.", answer: "Third-person affirmative" },
      { left: "Lara doesn't study at home.", answer: "Negative with doesn't" },
      { left: "Does Lara study after school?", answer: "Question with does" }
    ], why: "Use verb-s in affirmative statements, doesn't + base verb in negatives, and Does + subject + base verb in questions." },
    { type: "fix", title: "Edit the question", prompt: "What time does the first lesson starts?", answer: "What time does the first lesson start?", why: "After does, use the base verb start." }
  ],
  [
    { type: "choice", title: "Use the context clue", prompt: "The corridor is ___ noisy for the class to hear the announcement clearly.", options: ["too", "enough", "many", "such"], answer: "too", why: "Too + adjective shows that the noise is more than is suitable for hearing the announcement." },
    { type: "complete", title: "Complete with a degree word", prompt: "The team captain is reliable ___ to organise the trip without help.", answer: "enough", why: "Enough follows an adjective: reliable enough." },
    { type: "transform", title: "Rewrite without changing the meaning", prompt: "Rewrite using “old enough”: “Nora is too young to vote.”", answer: "Nora is not old enough to vote.", accepted: ["Nora isn't old enough to vote."], why: "Too young to do something can be restated as not old enough to do it." },
    { type: "match", title: "Match the form and example", choices: ["too + adjective + to + verb", "adjective + enough + to + verb", "enough follows an adjective"], pairs: [
      { left: "too tired to continue", answer: "too + adjective + to + verb" },
      { left: "careful enough to use the equipment", answer: "adjective + enough + to + verb" },
      { left: "patient enough", answer: "enough follows an adjective" }
    ], why: "Too comes before the adjective; enough comes after it. Both patterns can be followed by to + base verb." },
    { type: "fix", title: "Edit the description", prompt: "Ozan is enough patient to explain the rules calmly.", answer: "Ozan is patient enough to explain the rules calmly.", why: "Put enough after the adjective patient." }
  ],
  [
    { type: "choice", title: "Choose both correct forms", prompt: "A journalist usually ___ the news from a studio, while a photographer ___ at different locations.", options: ["reports / works", "report / works", "reports / work", "is reporting / work"], answer: "reports / works", why: "These describe regular jobs. Singular subjects take the simple-present -s form." },
    { type: "complete", title: "Complete the workplace phrase", prompt: "Berkay works ___ a photography studio near the river.", answer: "in", why: "Use in for a workplace viewed as an enclosed place or organisation." },
    { type: "transform", title: "Ask for the missing information", prompt: "Write a Where question for this answer: “Tolga designs buildings in an architecture firm.”", answer: "Where does Tolga design buildings?", why: "Use Where + does + subject + base verb." },
    { type: "match", title: "Match the preposition to the place", choices: ["in: enclosed place or organisation", "at: workplace location", "on: farm or land"], pairs: [
      { left: "___ a photography studio", answer: "in: enclosed place or organisation" },
      { left: "___ a pharmacy", answer: "at: workplace location" },
      { left: "___ a farm", answer: "on: farm or land" }
    ], why: "Common workplace phrases use in, at, or on depending on the place." },
    { type: "fix", title: "Edit the question", prompt: "Where does Gökçe reports the news?", answer: "Where does Gökçe report the news?", why: "After does, use the base verb report." }
  ],
  [
    { type: "choice", title: "Read the time clues", prompt: "Joyce usually ___ in a flat, but this month she ___ with her aunt while her parents renovate their home.", options: ["lives / is staying", "is living / stays", "live / is staying", "lives / stay"], answer: "lives / is staying", why: "Usually signals a routine; this month describes a temporary situation happening around now." },
    { type: "complete", title: "Choose the possessive adjective", prompt: "The twins are using ___ parents' study as a music room this week.", answer: "their", why: "Use their for something belonging to the twins." },
    { type: "transform", title: "Change to the present continuous", prompt: "Rewrite for an action happening now: “The children do their homework at the moment.”", answer: "The children are doing their homework at the moment.", why: "Use are + verb-ing with the plural subject the children." },
    { type: "match", title: "Match the sentence to its use", choices: ["Regular routine", "Happening now", "Shows ownership"], pairs: [
      { left: "The dog sleeps by the door each night.", answer: "Regular routine" },
      { left: "The dog is sleeping on the sofa now.", answer: "Happening now" },
      { left: "their room", answer: "Shows ownership" }
    ], why: "Use simple present for routines, present continuous for current actions, and a possessive adjective before a noun." },
    { type: "fix", title: "Edit the update", prompt: "Joyce and her brother is preparing their rooms for guests right now.", answer: "Joyce and her brother are preparing their rooms for guests right now.", why: "Use are with the compound subject Joyce and her brother." }
  ],
  [
    { type: "choice", title: "Choose the forms that fit", prompt: "The city festival ___ every June, but this year local chefs ___ traditional dishes in the park.", options: ["takes place / are preparing", "is taking place / prepare", "take place / are preparing", "takes place / prepares"], answer: "takes place / are preparing", why: "Every June signals a regular event; this year describes a temporary activity around now." },
    { type: "complete", title: "Offer a choice", prompt: "Would you rather visit the craft market ___ watch the parade from the main square?", answer: "or", why: "Use or to connect alternatives." },
    { type: "sequence", title: "Put the festival exchange in order", instruction: "Tap the four lines to make a logical conversation.", tokens: ["B: It takes place every June.", "A: What are the chefs preparing today?", "B: They are preparing traditional dishes.", "A: When does the festival take place?"], answer: ["A: When does the festival take place?", "B: It takes place every June.", "A: What are the chefs preparing today?", "B: They are preparing traditional dishes."], why: "The question about the regular event comes before its answer; the question about today's activity comes next." },
    { type: "match", title: "Match the time or connector", choices: ["Regular event", "Action happening now", "Choice between alternatives"], pairs: [
      { left: "The market opens every Saturday.", answer: "Regular event" },
      { left: "The chefs are serving lunch now.", answer: "Action happening now" },
      { left: "Would you prefer tea or lemonade?", answer: "Choice between alternatives" }
    ], why: "The simple present describes repeated events, the present continuous describes current actions, and or links choices." },
    { type: "fix", title: "Edit the event notice", prompt: "The festival is taking place every June.", answer: "The festival takes place every June.", why: "Use the simple present for a regular event." }
  ],
  [
    { type: "choice", title: "Read the history clue", prompt: "Before conservation work began, there ___ only a few nesting sites, and many birds ___ in danger.", options: ["were / were", "was / were", "were / was", "was / was"], answer: "were / were", why: "Use there were with plural nesting sites and were with the plural subject birds." },
    { type: "complete", title: "Complete the past description", prompt: "There ___ less clean water available before the river was restored.", answer: "was", why: "Use there was with the uncountable noun water." },
    { type: "transform", title: "Turn the recommendation into advice", prompt: "Rewrite with should: “It is a good idea for visitors to stay on marked paths.”", answer: "Visitors should stay on marked paths.", why: "Use should + base verb to give advice." },
    { type: "match", title: "Match the grammar and meaning", choices: ["Past existence with a plural noun", "Past existence with an uncountable noun", "Advice or recommendation"], pairs: [
      { left: "There were several safe nesting sites.", answer: "Past existence with a plural noun" },
      { left: "There was enough clean water.", answer: "Past existence with an uncountable noun" },
      { left: "Visitors should stay on marked paths.", answer: "Advice or recommendation" }
    ], why: "Use there were with plural nouns, there was with singular or uncountable nouns, and should + base verb for advice." },
    { type: "fix", title: "Edit the report", prompt: "There was many reasons to protect the wetland.", answer: "There were many reasons to protect the wetland.", why: "Use there were before the plural noun reasons." }
  ],
  [
    { type: "choice", title: "Separate plot from prediction", prompt: "The story ___ a young astronaut, and reviewers predict that audiences ___ the ending.", options: ["follows / will enjoy", "will follow / enjoy", "follow / will enjoys", "is following / enjoys"], answer: "follows / will enjoy", why: "Use the simple present for events in a film plot and will + base verb for a prediction." },
    { type: "complete", title: "Complete the prediction", prompt: "By 2040, viewers probably ___ choose the ending of some films themselves.", answer: "will", why: "Use will + base verb for a prediction about the future." },
    { type: "transform", title: "Rewrite as a prediction", prompt: "Use will: “Experts think that AI changes the way studios produce films.”", answer: "Experts think that AI will change the way studios produce films.", why: "Use will + base verb after the subject AI." },
    { type: "match", title: "Match the tense to its job", choices: ["Describes a film plot", "Makes a future prediction", "Asks about the future"], pairs: [
      { left: "The final scene follows a lost explorer.", answer: "Describes a film plot" },
      { left: "Viewers will choose the ending.", answer: "Makes a future prediction" },
      { left: "Will viewers choose the ending?", answer: "Asks about the future" }
    ], why: "Film plots often use the simple present; will + base verb makes predictions and future questions." },
    { type: "fix", title: "Edit the review question", prompt: "Do you think cinemas will disappears within ten years?", answer: "Do you think cinemas will disappear within ten years?", why: "After will, use the base verb disappear." }
  ]
];