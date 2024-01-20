const wikiRight = document.querySelector(".wiki-right");
const slideshow = document.querySelector(".slideshow");
const slideshowCircles = document.querySelector(".slideshow-circles");
const questionText = document.querySelector(".question");
const answers = document.querySelector(".answers");

let circles = [];

// Data dumps that should probably be in a database somewhere and not here
// until around line 165

// quiz object for quiz questions
// WikiData = Wiki section data array
// slidesBG slideshow photos array

// You CAN add more data to quiz and slidesBG. Quiz object should follow the template I set in provided data. SlidesBG is a simple arrow of image URLs

//You CAN NOT add more data to wikidata.

const quiz = {
  question0: {
    qText: "What food is the favorite  of pandas:",
    answer0: { aText: "Snickers Candy Bar", isTrue: false },
    answer1: { aText: "Juicy Meat Chunk", isTrue: false },
    answer2: { aText: "Smelly Spoiled Fish", isTrue: false },
    answer3: { aText: "(Not)Nutritious Bamboo ", isTrue: true },
    correctA: 3,
  },
  question1: {
    qText: "Where do pandas live?",
    answer0: { aText: "Eindhoven", isTrue: false },
    answer1: { aText: "China", isTrue: true },
    answer2: { aText: "Canada", isTrue: false },
    answer3: { aText: "Bolivia", isTrue: false },
    correctA: 1,
  },
  question2: {
    qText: "Which Animal is the cutest",
    answer0: { aText: "Stinky Dogs", isTrue: false },
    answer1: { aText: "Noisy Parrots", isTrue: false },
    answer2: { aText: "Meanie Kittens", isTrue: false },
    answer3: { aText: "Magnificent Pandas", isTrue: true },
    correctA: 3,
  },
};

const wikiData = [
  `<h3 style="text-align:center ">Giant Panda</h3>
  <div class="wiki-text" style="text-align:center">   
    <strong>Scientific Name:</strong>
    <br />
    - Ailuropoda melanoleuca
    <hr >
    <strong>Habitat:</strong>
    <br />
    - Mountainous regions of central China
    <hr />
    <strong>Distinctive Features:</strong>
    <br />
    - Black and white fur with eye-catching patches
    <br />
    - A robust build, with a bear-like body shape
    <hr />
    <strong>Conservation Status:</strong>
    <br />
    - Vulnerable (IUCN)
    <hr />
    <strong>Behavior:</strong>
    <br />
    - Giant pandas are solitary animals and are known for their slow, deliberate
    movements
</div>`,
  `<h3>CLASSIFICATION</h3>
    <div class="wiki-text">
      <p>
        For many decades, the precise taxonomic classification of the
        giant panda was under debate because it shares characteristics
        with both bears and raccoons. However in 1985, molecular studies
        indicate the giant panda is a true bear, part of the family
        Ursidae.These studies show it diverged about 19 million years ago
        from the common ancestor of the Ursidae; it is the most basal
        member of this family and equidistant from all other extant bear
        species. The giant panda has been referred to as a living fossil.
      </p>
    </div>`,
  `<h3>SUBSPECIES</h3>
  <div class="wiki-text">
    <p>      
      Two subspecies of giant panda have been recognized on the basis of
      distinct cranial measurements, colour patterns, and population
      genetics.
      <hr>
      The nominate subspecies, A. m. melanoleuca, consists of most
      extant populations of the giant panda. These animals are
      principally found in Sichuan and display the typical stark black
      and white contrasting colours.
      <hr>
      The Qinling panda is restricted to the Qinling Mountains in
      Shaanxi. The typical black and
      white pattern of Sichuan giant pandas is replaced with a light
      brown and white pattern.The skull of Qinling panda is smaller than
      its relatives, and it has larger molars.
    </p>
  </div>`,
  `<h3>DESCRIPTION</h3>
  <div class="wiki-text">
      <p>
    Adults measure around 1.2 to 1.9 metres (3 feet 11 inches to 6 feet 3 inches)
    long, including a tail of about 10-15 cm (4-6 in), and 60 to 90 cm (24 to 35
    in) tall at the shoulder. Males can weigh up to 160 kg (350 lb). Females
    (generally 10-20% smaller than males)can weigh as little as 70 kg (150 lb),
    but can also weigh up to 125 kg (276 lb).The average weight for adults is 100
    to 115 kg (220 to 254 lb).
  
    <hr />
  
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem ullam
    doloribus odio dignissimos praesentium, tempore in dolore perferendis id,
    placeat velit, iure vel! Et eum nulla quasi corporis dolore.
  </p>
  </div>`,
  `<h3>DIET</h3>
  <div class="wiki-text">
      <p>
          Despite its taxonomic classification as a carnivoran, the giant
          panda's diet is primarily herbivorous, consisting almost exclusively
          of bamboo.However, the giant panda derives
          little energy and protein from bamboo. The
          ability to break down cellulose and lignin is very weak, and their
          main source of nutrients comes from starch and hemicelluloses. Important part of their bamboo diet is the shoots, that are
          rich in starch and have up to 32% protein content.
          
          <hr>
          
           pandas have a higher capability to digest starches. During the shoot season they put on a lot of weight, which allows them to get
          through the nutrient-scarce period when
          they feed mostly on bamboo leaves.
  </p>
  </div>`,
  `
  <h3>BEHAVIOR</h3>
  <div class="wiki-text">
    <p>
      The giant panda is a terrestrial animal and primarily spends its life
      roaming and feeding in the bamboo forests of the Qinling Mountains and in
      the hilly province of Sichuan. Giant pandas are generally solitary. Each
      adult has a defined territory and a female is not tolerant of other females
      in her range. Social encounters occur primarily during the brief breeding
      season in which pandas in proximity to one another will gather.After mating,
      the male leaves the female alone to raise the cub.

      <hr>

      Baby pandas behave extra cutely
    </p>
  </div>`,
];

const slidesBG = [
  "https://images.unsplash.com/photo-1566487097168-e91a4f38bee2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584315918341-a6017ae8869f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1582239255729-e53ed74f10f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  " https://images.unsplash.com/photo-1627209011444-a920214c51d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1574507459001-789293ff9f86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1632916305864-ca3cbd1c1979?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581499415152-6fe2625cda28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  " https://images.unsplash.com/photo-1599221355214-aebebbfbb3bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Codes Starts Here

//// Quiz  ////

// set quiz

let questionIndex = 0;
let correctAnswers = 0;

const counter = () => {
  correctAnswers += 1;
};

//q,a as in question and answer
function checkAnswer(q, a) {
  if (quiz["question" + q].correctA == a) {
    counter();
  }
  console.log(correctAnswers);
}

function setQuiz(Index) {
  if (questionIndex == 0) {
    correctAnswers = 0; //If the user click reset again setQuiz(0) will run and correct answers will be reset to 0
  }

  // basically just adds some innerHTML. Buttons have onclicks attached and as long as there are more questions in the quiz object, the question will be updated.
  if (questionIndex < Object.keys(quiz).length) {
    questionIndex += 1;
    questionText.innerHTML = quiz["question" + Index].qText;
    answers.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      answers.innerHTML += `
      <button class="answer" onclick="checkAnswer(${Index},${i}); setQuiz(${
        Index + 1
      }) "> ${quiz["question" + Index]["answer" + i].aText} </button>`;
    }
  } else {
    // if question index is >= quiz size "else" will run. because this means there are no more questions. and we want the results and the play again button
    questionIndex = 0;
    questionText.innerHTML = "";
    answers.innerHTML = `You got ${correctAnswers}/${
      Object.keys(quiz).length
    } Questions right! <button class="answer" onclick="setQuiz(questionIndex)">
    Play Again
  </button>`;
  }
}

setQuiz(questionIndex);

//// Wiki Buttons ////
const wikiIndex = 0;
const changeWiki = (wikiIndex) => {
  wikiRight.innerHTML = wikiData[wikiIndex];
};
changeWiki(0);

//// SlideShow ////
// set slide show circles
const activeCircle = `<div class="circle active"><i class="fa-solid fa-circle"></i></div>`;
const passiveCircle = `<div class="circle"><i class="fa-regular fa-circle"></i></div>`;

function circlesSetter(activeNumber) {
  circles = [];
  slideshowCircles.innerHTML = "";
  for (var i = 0; i < slidesBG.length; i++) {
    if (i == activeNumber) {
      slideshowCircles.innerHTML += activeCircle;
    } else {
      slideshowCircles.innerHTML += passiveCircle;
    }
  }

  circles.push(document.querySelectorAll(".circle"));

  for (var j = 0; j < circles[0].length; j++) {
    // console.log(j);
    let z = j; // interesting
    circles[0][j].addEventListener("click", () => {
      changeImage(z);
    });
  }
  // console.log(circles);
}

circlesSetter(0);

// Slide Show image change //

let y = 0; // bad variable name
const changeImage = (direction) => {
  if (direction == "next") {
    y += 1;
    slideshow.style.backgroundImage = ` url("${slidesBG[y % slidesBG.length]}"`;

    circlesSetter(y % slidesBG.length);
  } else if (direction == "previous") {
    y = y - 1 + slidesBG.length;
    slideshow.style.backgroundImage = ` url("${slidesBG[y % slidesBG.length]}"`;

    circlesSetter(y % slidesBG.length);
  } else {
    y = direction;
    circlesSetter(y);
    slideshow.style.backgroundImage = ` url("${slidesBG[y]}"`;
    console.log("fired");
  }
};
