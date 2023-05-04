const containerPlay = document.querySelector(".container-play");
const btnPlay = document.querySelector(".btn-play");
const container = document.querySelector(".container"); // le container du quizz

btnPlay.addEventListener("click", () => {
  container.style.display = "grid";
  containerPlay.style.display = "none";
  title.style.display = "none";
});

function init() {
  const quizz = [
    {
      question: "Quel est le nom de la plus grande lune de Saturne ?",
      reponses: ["lo", "Ganyméde", "titan"],
      bonneReponse: "titan",
    },
    {
      question: "Combien de remplacent y a-t-il dans une équipe de football ?",
      reponses: ["5", "9", "11"],
      bonneReponse: "9",
    },
    {
      question: "Quel célèbre parc se trouve au cœur de Manhattan ?",
      reponses: ["Hyde Park", "Central park", "Park Asterix"],
      bonneReponse: "Central park",
    },
    {
      question:
        "Quel est le langage de programmation utilisé pour créer des sites web interactifs ?",
      reponses: ["Javascript", "HTML", "Python"],
      bonneReponse: "Javascript",
    },
    {
      question:
        "Quel acteur a joué le rôle de Walter White dans la série télévisée Breaking Bad ?",
      reponses: ["Bob Odenkirk", "Aaron Paul", "Bryan Cranston"],
      bonneReponse: "Bryan Cranston",
    },
    {
      question:
        "Quel est le nom de l'océan qui borde la côte Est des Etats-Unis ?",
      reponses: ["Océan Atlantique", "Océan Pacifique", "Océan Indien"],
      bonneReponse: "Océan Atlantique",
    },
    {
      question: "Quel est le nom de la plus haute montagne du monde ?",
      reponses: ["Kilimandjaro", "Mont Everest", "Mont Blanc"],
      bonneReponse: "Mont Everest",
    },
    {
      question:
        "Quel est le nom de l'empereur romain qui a construit le Colisée ?",
      reponses: ["Auguste", "Néron", "Vespasien"],
      bonneReponse: "Vespasien",
    },
    {
      question: "Dans quelle ville se trouve la Sagrada Familia ?",
      reponses: ["Barcelone", "Madrid", "Valence"],
      bonneReponse: "Barcelone",
    },
    {
      question: "Quel est le nom de la plus grande île du monde ?",
      reponses: ["Australie", "Groenland", "Java"],
      bonneReponse: "Groenland",
    },
  ];

  const btn = document.querySelectorAll("#btn"); // boutton reponse
  const reponseOne = document.querySelector(".reponse1"); //reponse 1
  const reponsetwo = document.querySelector(".reponse2"); //reponse 1
  const reponseThree = document.querySelector(".reponse3"); //reponse 1
  const questionActuel = document.getElementById("questionForm"); //La question du quizz
  const submit = document.getElementById("send"); //btn submit
  const container = document.querySelector(".container"); // le container du quizz
  const containerResult = document.querySelector(".container-result"); // le container du result
  const ourScore = document.querySelector(".our-score"); // le score en fin de partie
  const btnReplay = document.getElementById("replay-btn"); //le btn rejouer

  console.log(ourScore);
  let i = 0;
  let score = 0;

  reponseOne.innerHTML = quizz[i].reponses[0];
  reponsetwo.innerHTML = quizz[i].reponses[1];
  reponseThree.innerHTML = quizz[i].reponses[2];
  questionActuel.textContent = quizz[i].question;

  /*Pour rejouer*/
  btnReplay.addEventListener("click", () => {
    i = 0;
    score = 0;
    reponseOne.innerHTML = quizz[i].reponses[0];
    reponsetwo.innerHTML = quizz[i].reponses[1];
    reponseThree.innerHTML = quizz[i].reponses[2];
    questionActuel.textContent = quizz[i].question;
    container.style.display = "grid";
    containerResult.style.display = "none";
    ourScore.innerHTML = "";
    title.style.display = "none";

    btn.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    init();
  });

  submit.addEventListener("click", () => {
    if (i === quizz.length - 1) {
      container.style.display = "none";
      containerResult.style.display = "grid";
      title.style.display = "grid";
    }

    if (valeur == quizz[i].bonneReponse) {
      score++;
      ourScore.innerHTML = `Voici votre score: ${score}/${quizz.length}`;
    } else if (score === 0) {
      ourScore.innerHTML = `Voici votre score: 0/${quizz.length}`;
    }

    i++;
    if (i < quizz.length) {
      reponseOne.innerHTML = quizz[i].reponses[0];
      reponsetwo.innerHTML = quizz[i].reponses[1];
      reponseThree.innerHTML = quizz[i].reponses[2];
      questionActuel.textContent = quizz[i].question;
    }

    btn.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    send.style.display = "none";
  });

  let valeur;

  btn.forEach((btns) => {
    btns.addEventListener("click", (event) => {
      valeur = event.target.textContent;

      btn.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove("active");
          send.style.display = "flex";
        }
      });
      btns.classList.add("active");
    });
  });
}

init(); // appeler la fonction pour démarrer le script
