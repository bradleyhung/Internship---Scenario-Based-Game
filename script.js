"use strict";

const opening = {
  title: "🎮 Lease or Lose: The Rental Riddle",
  prompt:
    "Your mission: survive the rental market with your finances, dignity, and sanity intact. One wrong move, and you may end up couch-surfing at Aunt Margie's... forever.",
  details:
    "🧠 Tenant Wisdom Score (starts at 0; choices will increase or decrease it!)",
  imageUrl: "https://www.myfili.com/wp-content/uploads/2025/07/opening_img.png",
  audioUrl:
    "https://www.myfili.com/wp-content/uploads/2025/07/opening_RealEstateL2.mp3",
};

const endingImageUrl =
  "https://www.myfili.com/wp-content/uploads/2025/07/ending_img.png";
const endingAudioUrl =
  "https://www.myfili.com/wp-content/uploads/2025/07/ending_RealEstateL2.mp3";

const scenes = [
  {
    title: "📍 Scene 1: Open House Madness",
    prompt:
      "You're at an open house for a cozy apartment. You look around — there are ten other people eyeballing the same unit. The landlord, Mr. Chang, smiles like a man who knows he holds all the power.",
    details: [
      "Rent: $1,800/month",
      "Supply: Low",
      "Demand: Through the roof",
      "Interest rates: Recently hiked, so everyone’s renting.",
    ],
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene_1_img.png",
    audioUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene1_RealEstateL2.mp3",
    choices: [
      {
        text: "A. Strike up friendly convo with Mr. Chang, subtly complimenting his sweater vest.",
        effect: +1,
        message: "+1 Tenant Wisdom: Relationships matter.",
      },
      {
        text: "B. Shout, “I’ll pay $100 more than anyone else!”",
        effect: -1,
        message:
          "–1 Tenant Wisdom: Congratulations, you just helped raise rent prices for everyone.",
      },
      {
        text: "C. Wait for a fall market dip.",
        effect: 0,
        message: "Neutral: Could be smart, but you might miss out now.",
      },
    ],
  },
  {
    title: "📍 Scene 2: The Lease Gauntlet",
    prompt:
      "You made the shortlist. Mr. Chang emails you a lease agreement that’s longer than a fantasy novel.",
    details: [
      "Rent: $1,800",
      "Lease Term: 12 months",
      "Late rent = $100 fee",
      "No pets, no subletting,",
      "60-day notice to vacate",
      "Must carry renter’s insurance",
    ],
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene_2_img.png",
    audioUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene2_RealEstateL2.mp3",
    choices: [
      {
        text: "A. Sign it blindly. Fine print is for chumps.",
        effect: -2,
        message:
          "–2 Tenant Wisdom: You’ve just agreed to pet-free, music-free solitude for a year.",
      },
      {
        text: "B. Ask for clarification on the 60-day clause and negotiate subletting permission.",
        effect: +2,
        message: "+2 Tenant Wisdom: Pro move.",
      },
      {
        text: "C. Suggest changing the lease to a month-to-month.",
        effect: 0,
        message: "Neutral: Some landlords hate flexibility, some love it.",
      },
    ],
  },
  {
    title: "📍 Scene 3: Application Anxiety",
    prompt:
      "Time to apply. The rental application asks for: the info below. You remember that one time you missed a rent payment because you thought Venmo was 'processing it spiritually.'",
    details: [
      "Income",
      "Credit score",
      "Rental history",
      "A background check",
      "First month’s rent",
      "A security deposit",
    ],
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene_3_img.png",
    audioUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene3_RealEstateL2.mp3",
    choices: [
      {
        text: "A. Fudge the numbers slightly.",
        effect: -3,
        message:
          "–3 Tenant Wisdom: You are now banned from the kingdom of Honest Renters.",
      },
      {
        text: "B. Be honest, explain the late payment, and offer a higher deposit.",
        effect: +2,
        message:
          "+2 Tenant Wisdom: Integrity counts, and landlords respect responsibility.",
      },
      {
        text: "C. Submit the app without checking for errors.",
        effect: -1,
        message: "–1 Tenant Wisdom: You misspelled your own name.",
      },
    ],
  },
  {
    title: "📍 Scene 4: Move-in Mayhem",
    prompt:
      "You’re approved! 🎉 But before you pop the La Croix, you step into the unit and notice: the info below. Mr. Chang is ready to hand over the keys.",
    details: [
      "A mysterious stain on the carpet",
      "A suspicious hole near the heater",
      "A faint, lingering smell of fish sticks",
    ],
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene_4_img.png",
    audioUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene4_RealEstateL2.mp3",
    choices: [
      {
        text: "A. Take photos and complete a walk-through inspection checklist.",
        effect: +2,
        message:
          "+2 Tenant Wisdom: Your future self thanks you during deposit battles.",
      },
      {
        text: "B. Ignore it. What’s a little smell among friends?",
        effect: -1,
        message: "–1 Tenant Wisdom: That smell was anchovy pizza... from 2017.",
      },
      {
        text: "C. Demand a full carpet replacement and repaint.",
        effect: 0,
        message: "Neutral: Assertive, but may backfire if the market is tight.",
      },
    ],
  },
  {
    title: "📍 Scene 5: Final Boss – Adulting",
    prompt:
      "You're in! A month in, you do the actions below. Additionally, your bandmate wants to crash on your couch 'just for 3 months' and 'maybe sublet the bathroom part-time.'",
    details: [
      "Pay rent on time",
      "Maintain the space",
      "Buy renter’s insurance",
      "Keep a budget",
    ],
    imageUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene_5_img.png",
    audioUrl:
      "https://www.myfili.com/wp-content/uploads/2025/07/scene5_RealEstateL2.mp3",
    choices: [
      {
        text: "A. Let them move in and don’t tell Mr. Chang.",
        effect: -2,
        message: "–2 Tenant Wisdom: Illegal subletting = eviction risk.",
      },
      {
        text: "B. Check the lease, ask Mr. Chang about subletting options.",
        effect: +2,
        message: "+2 Tenant Wisdom: You live in harmony and legality.",
      },
      {
        text: "C. Politely say no and offer to help them find a place.",
        effect: +1,
        message: "+1 Tenant Wisdom: Compassionate and responsible.",
      },
    ],
  },
];

// GLOBALS
let { sceneNum, effectTotal } = globals();

function globals() {
  let sceneNum = 0;
  let effectTotal = 0;
  return { sceneNum, effectTotal };
}

// Display prompts and choices
function displayScene(sceneIndex) {
  let mainMenuButton = document.getElementById("mainMenuButton");
  mainMenuButton.classList.add("hide");
  let question = document.getElementById("question");
  question.classList.remove("hide");
  let nextQuestion = document.getElementById("next-question");
  nextQuestion.classList.add("hide");
  const scene = scenes[sceneIndex];
  let sceneTitle = document.getElementById("scene-title");
  sceneTitle.textContent = scene.title;
  let scenePrompt = document.getElementById("scene-prompt");
  scenePrompt.textContent = scene.prompt;
  let sceneDetails = document.getElementById("scene-details");
  sceneDetails.innerHTML = scene.details.join("<br>");

  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.textContent = "";

  // Image
  const img = document.querySelector(".scene-image");
  img.src = scene.imageUrl;
  img.alt = scene.title;

  // Audio
  const audio = document.querySelector(".scene-audio");
  audio.src = scene.audioUrl;
  audio.play().catch(() => {});

  let clicked = false;

  scene.choices.forEach((choice) => {
    const h3 = document.createElement("button");
    h3.textContent = choice.text;
    choicesContainer.appendChild(h3);

    h3.addEventListener("click", () => {
      if (clicked) return;
      clicked = true;
      h3.textContent = choice.message;
      effectTotal += choice.effect;
      let score = document.getElementById("score");
      score.innerHTML = "Your total: " + effectTotal;
      const allButtons = choicesContainer.querySelectorAll("button");
      allButtons.forEach((btn) => (btn.disabled = true));
      if (sceneNum == 4) {
        console.log("done");
        let finalButton = document.getElementById("final-button");
        finalButton.classList.remove("hide");
      } else {
        let nextQuestion = document.getElementById("next-question");
        nextQuestion.classList.remove("hide");
      }
    });
  });
}

// Move to next question
function advanceSceneNum() {
  sceneNum += 1;
  console.log(sceneNum);
  displayScene(sceneNum);
  // return {'Scene Number' : sceneNum };
}

// Display end screen
function displayEnd() {
  const finalButton = document.getElementById("final-button");
  finalButton.classList.add("hide");
  const scene = document.getElementById("scene");
  scene.classList.add("hide");
  const nextQuest = document.getElementById("next-question");
  nextQuest.classList.add("hide");

  // Image and Audio
  const endImg = document.querySelector(".end-image");
  endImg.src = endingImageUrl;
  const endAudio = document.querySelector(".end-audio");
  endAudio.src = endingAudioUrl;
  endAudio.play().catch(() => {});

  // document.getElementById("end-score").textContent = "Your final 🧠 Tenant Wisdom Score: " + effectTotal;

  const endScore = document.getElementById("end-score");
  endScore.textContent = `Your final 🧠 Tenant Wisdom Score: ${effectTotal}`;

  let end = document.getElementById("end-text");

  if (effectTotal <= 4) {
    end.textContent =
      "🧃 Rookie Renter — At least you didn't sign up for a pyramid scheme (we hope).";
  } else if (effectTotal > 4 && effectTotal <= 7) {
    end.textContent =
      "🛠 Learning Leaser — You made some solid moves, with room to grow.";
  } else {
    end.textContent =
      "🎓 Lease Legend — You've mastered the rental system. You could probably teach a course.";
  }
  document.getElementById("end-scene").classList.remove("hide");
}

// Display Main menu
function mainMenu() {
  const mainMenuButton = document.getElementById("mainMenuButton");
  mainMenuButton.classList.remove("hide");
  const quest = document.getElementById("question");
  quest.classList.add("hide");
  const sceneTitle = document.getElementById("scene-title");
  sceneTitle.textContent = opening.title;
  const scenePrompt = document.getElementById("scene-prompt");
  scenePrompt.textContent = opening.prompt;
  const details = document.getElementById("scene-details");
  details.textContent = opening.details;

  // Image
  const img = document.querySelector(".scene-image");
  img.src = opening.imageUrl;
}

// Start a new game
function startGame() {
  displayScene(0);
}

const question = document.getElementById("question");
question.classList.add("hide");
const mmButton = document.getElementById("mainMenuButton");
mmButton.classList.add("hide");
mainMenu();
document.getElementById("start-overlay").addEventListener("click", () => {
  const audio = document.querySelector(".scene-audio");
  audio.src = opening.audioUrl;
  audio.play().catch(() => {});
  document.getElementById("start-overlay").remove();
});

document.getElementById("mainMenuButton").addEventListener("click", () => {
  startGame();
});

document.getElementById("next-question").addEventListener("click", () => {
  advanceSceneNum();
});

document.getElementById("final-button").addEventListener("click", () => {
  displayEnd();
});
