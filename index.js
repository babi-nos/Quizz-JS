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
];

let numberQuestion = 0;
let questionFrom = document.getElementById("question-form");

let questionActuel = quizz[numberQuestion].question;

questionFrom.innerHTML = quizz[numberQuestion].question;

reponse1.innerHTML = quizz[0].reponses[0];
reponse2.innerHTML = quizz[0].reponses[1];
reponse3.innerHTML = quizz[0].reponses[2];

// btn.addEventListener("click", () => {
//   numberQuestion++;
//   quizz[numberQuestion].question;
//   reponse1.innerHTML = quizz[numberQuestion].reponses[0];
//   reponse2.innerHTML = quizz[numberQuestion].reponses[1];
//   reponse3.innerHTML = quizz[numberQuestion].reponses[2];
//   questionFrom.innerHTML = quizz[numberQuestion].question;
// });

const response = [reponse1, reponse2, reponse3];

response.forEach((span) => {
    span.addEventListener('click', (event) => {
      // Récupérer l'élément actif et la couleur de fond sélectionnée
      const activeSpan = document.querySelector('.active');
      const selectedColor = 'green'; // Remplacer par la couleur de votre choix
  
      // Vérifier si l'élément cliqué est l'élément actif ou non
      if (event.target !== activeSpan) {
        // Réinitialiser la couleur de fond de tous les éléments
        response.forEach((span) => {
          span.style.backgroundColor = 'transparent';
        });
  
        // Appliquer la couleur de fond sélectionnée à l'élément cliqué
        event.target.style.backgroundColor = selectedColor;
  
        // Mettre à jour l'élément actif
        activeSpan.classList.remove('active');
        event.target.classList.add('active');
      }


      numberQuestion++;
      quizz[numberQuestion].question;
      reponse1.innerHTML = quizz[numberQuestion].reponses[0];
      reponse2.innerHTML = quizz[numberQuestion].reponses[1];
      reponse3.innerHTML = quizz[numberQuestion].reponses[2];
      questionFrom.innerHTML = quizz[numberQuestion].question;


    });
  });
    
