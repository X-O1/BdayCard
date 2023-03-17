//FRONT-END ELEMENTS
const container2 = document.getElementById("container2");
const wandOfLightButton = document.querySelector(".wand-of-light");
const cardContent = document.querySelector(".card-content");
const greeting = document.querySelector(".greeting");
const leftFireworks = document.querySelector(".container1");
const rightFireworks = document.querySelector(".container3");
const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
//ALL COLORS USED FOR FONTS
const gradientColors = [
  "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  // "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
  "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
  "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
  "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
  "linear-gradient(to top, #f77062 0%, #fe5196 100%)",
  "linear-gradient(to top, #4481eb 0%, #04befe 100%)",
  "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
  "linear-gradient(60deg, #abecd6 0%, #fbed96 100%)",
  "linear-gradient(to top, #209cff 0%, #68e0cf 100%)",
  "linear-gradient(to top, #b3ffab 0%, #12fff7 100%)",
  "linear-gradient(to right, #0acffe 0%, #495aff 100%)",
];
const plainColors = [
  "#F08080",
  "#7FFFD4",
  "#00FFFF",
  "#FFB6C1",
  "#48D1CC",
  "#FFC0CB",
  "#FFA07A",
  "#DDA0DD",
  "#FF6347",
];
//STYLES LANDING PAGE H1
const greetingText = "Happy Birthday My Love";
greetingText.split("").forEach((character) => {
  const characterSpan = document.createElement("span");
  characterSpan.innerText = character;
  greeting.appendChild(characterSpan);
});
const greetLetter = document.querySelectorAll(".greeting span");
greetLetter.forEach((letter) => {
  if (width > 980) {
    letter.addEventListener("mouseenter", () => {
      const randomNumberLetter = Math.floor(Math.random() * plainColors.length);
      letter.style.color = plainColors[randomNumberLetter];
    });
  } else {
    const randomNumberLetter = Math.floor(Math.random() * plainColors.length);
    letter.style.color = plainColors[randomNumberLetter];
  }
});
//STYLES "BIRTHDAY CARD" BUTTON
const randomNumber = Math.floor(Math.random() * plainColors.length);
const randomNumberPlain = Math.floor(Math.random() * plainColors.length);
const randomNumberborder = Math.floor(Math.random() * plainColors.length);
greeting.style.color = plainColors[randomNumber];
wandOfLightButton.style.color = plainColors[randomNumberPlain];
wandOfLightButton.style.borderColor = "buttonBorder";
wandOfLightButton.style.borderColor = plainColors[randomNumberborder];

wandOfLightButton.addEventListener("mouseenter", () => {
  const randomNumberPlain = Math.floor(Math.random() * plainColors.length);
  const randomNumberborder = Math.floor(Math.random() * plainColors.length);

  wandOfLightButton.style.borderColor = "buttonBorder";
  wandOfLightButton.style.borderColor = plainColors[randomNumberborder];
  wandOfLightButton.style.color = plainColors[randomNumberPlain];
});
wandOfLightButton.addEventListener("mouseleave", () => {
  wandOfLightButton.style.backgroundImage = "";
  wandOfLightButton.style.borderColor = "";
});
//BIRTHDAY CARD CONTENT AND STYLING
const bdayCard = () => {
  const speech =
    " My love, I am so proud to be your partner in life. Who you are and how you treat the people around you has always inspired me to be a version of myself that I could be proud of. The unconditional love and support you give is a rare thing to receive in life and I appreciate it with all my heart. You’ve grown into a beautiful, strong , intelligent women right in front of my eyes and I have the utmost confidence in you and all of your pursuits. I’ll always be there for you the way you’ve always been there for me. Happy Birthday my baby, I love you -Trent";
  speech.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    cardContent.appendChild(characterSpan);
  });
  const characters = document.querySelectorAll(".card-content span");

  characters.forEach((letter) => {
    if (width > 1400) {
      letter.addEventListener("mouseenter", () => {
        const randomNumberLetter = Math.floor(
          Math.random() * plainColors.length
        );
        letter.style.color = plainColors[randomNumberLetter];
      });
    } else {
      const randomNumberLetter = Math.floor(Math.random() * plainColors.length);
      letter.style.color = plainColors[randomNumberLetter];
    }
  });
};
//HANDLES ALL ANIMATION THAT HAPPENS AFTER PRESSING "BDAY CARD BUTTON"
const makeAnimation = () => {
  const greetingKeyFrames = new KeyframeEffect(
    greeting,
    { opacity: "0" },
    { duration: 800, fill: "forwards" }
  );
  const greetingAnimation = new Animation(greetingKeyFrames);
  greetingAnimation.play();

  const WOLButtonKeyFrames = new KeyframeEffect(
    wandOfLightButton,
    { opacity: "0" },
    { duration: 800, fill: "forwards" }
  );
  const WOLanimation = new Animation(WOLButtonKeyFrames);
  WOLanimation.play();
};
const mobileFireworks = new KeyframeEffect(
  container2,
  { opacity: ".5" },
  { duration: 300, fill: "forwards" }
);
const mobileFireworksAnimation = new Animation(mobileFireworks);

//OPENS BDAY CARD AND DISPLAYS CONTENT
const WOLSwitch = () => {
  makeAnimation();
  if (width < 480) {
    mobileFireworksAnimation.play();
    container2.style.display = "flex";
    cardContent.style.display = "block";
    container2.style.width = "100%";
    container2.style.height = "75%";
  }
  if (width > 480 && width < 880) {
    mobileFireworksAnimation.play();
    container2.style.display = "flex";
    cardContent.style.display = "block";
    container2.style.width = "50%";
    container2.style.height = "75%";
  }
  if (width > 880 && width < 1024) {
    mobileFireworksAnimation.play();
    container2.style.display = "flex";
    cardContent.style.display = "block";
    container2.style.width = "100%";
    container2.style.height = "75%";
  }
  wandOfLightButton.disabled = "true";
  cardContent.innerHTML = "";
  cardContent.style.transition = "opacity 2500ms ease-in-out";
  cardContent.style.opacity = "1";
  cardContent.style.color = "transparent";

  bdayCard();
};
//ADDS AUDIO OF ACTUAL FIREWORKS IF YOU CLICK ON FIREWORK IMAGES
leftFireworks.addEventListener("click", () => {
  const audioFile = document.getElementById("audio-file");
  setTimeout(() => {
    audioFile.play();
  }, 100);
});
rightFireworks.addEventListener("click", () => {
  const audioFile = document.getElementById("audio-file");
  setTimeout(() => {
    audioFile.play();
  }, 100);
});
if (width < 980) {
  container2.addEventListener("click", () => {
    const audioFile = document.getElementById("audio-file");
    setTimeout(() => {
      audioFile.play();
    }, 100);
  });
}
