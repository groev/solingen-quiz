import wappen from "../assets/images/Solingen_wappen.svg";
const intro = {
  image: wappen,
  headline: "Was weisst du über die Klingenstadt?",
  text:
    "Komm mit auf eine Reise durch die Geschichte der Klingenstadt. Lerne etwas neues und lass dich überraschen.",
};

const outro = {
  headline: "Das war's!",
  text:
    "Toll, dass du alle Fragen beantwortet hast. Wir hoffen, dass du etwas neues lernen konntest und Spaß hattest.",
};

const questions = [
  {
    id: 1,
    question: "Woher kommt wahrscheinlich der Name Solingen?",
    answers: [
      { text: "Von dem Wort 'Gelingen'.", isCorrect: false },
      { text: "Durch die Produktion von Sole.", isCorrect: false },
      { text: "Vom Gutshof Solagon", isCorrect: true },
      { text: "Eine Kombination aus Soll und Klingen", isCorrect: false },
    ],
    solution:
      "Die erste Besiedelung auf heutigem Solinger Stadtgebiet fand wahrscheinlich im 10. Jahrhundert statt. In einem Vermächtnis (Testament) des Kölner Erzbischofs Bruno aus dem Jahr 965 n. Chr. ist von einem kleinen Gutshof Namens <strong>Solagon</strong> die Rede, womit Solingen gemeint sein könnte.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Br%C3%BCcke_wikipedia.jpg",
  },
  {
    id: 2,
    question: "Von wem war Schloss Burg die Stammburg?",
    answers: [
      { text: "Karl dem Großen", isCorrect: false },
      { text: "Barbarossa", isCorrect: false },
      { text: "Kaiser Wilhelm der II.", isCorrect: false },
      { text: "Den Grafen von Berg", isCorrect: true },
    ],
    solution:
      "Die Anlage war seit dem 12. Jahrhundert die Stammburg der <strong>Grafen und späteren Herzöge von Berg</strong> und wurde erst im 19. Jahrhundert rekunstuiert.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Schloss_Burg%2C_Solingen%2C_Ansicht_von_Nordwesten.jpg",
  },
  {
    id: 3,
    question: "Seid wann ist Made in Solingen eine geschütze Marke?",
    answers: [
      { text: "1698", isCorrect: false },
      { text: "1832", isCorrect: false },
      { text: "1989", isCorrect: false },
      { text: "1938", isCorrect: true },
    ],
    solution:
      "Der Schutz der Marke Solingen wurde im Jahr <strong>1938</strong> von den Nationalsozialisten begründet. Es schützt noch heute Schneidwaren und Solingen ist die einzige Stadt weltweit, die so Ihre Produkte schützt.",
    image:
      "https://www.solinger-tageblatt.de/bilder/2019/03/01/11652250/438664876-cbschneidwaren61-iGYc2P8zzea.jpg",
  },
  {
    id: 3,
    question:
      "Für welches Produkt wurde die Firma Bremshey im 20. Jahrhundert bekannt?",
    answers: [
      { text: "Messer", isCorrect: false },
      { text: "Regenschirme", isCorrect: true },
      { text: "Waschmaschinen", isCorrect: false },
      { text: "Jagdgewehre", isCorrect: false },
    ],
    solution:
      "Hans Haupt aus Solingen erfand 1928 den zusammenschiebbaren <strong>Regenschirm</strong>. Dieser wurde am 23. November 1934 patentiert. Die Serienherstellung der später bekanntesten deutschen Schirmmarke übernahm ab 1932 Fritz Bremshey. Der Knirps war der erste Schirm mit Teleskop-Gestell.",
    image:
      "https://www.solinger-tageblatt.de/bilder/2018/06/15/9954330/2139962427-5af73ee5-b456-4357-ad22-0f58bd936313-Ta6.jpg",
  },
  {
    id: 3,
    question: "Wann war Solingen erstmals offiziell eine Stadt?",
    answers: [
      { text: "1602", isCorrect: false },
      { text: "1374", isCorrect: true },
      { text: "1820", isCorrect: false },
      { text: "982", isCorrect: false },
    ],
    solution:
      "Im Jahr <strong>1374</strong> bekam Solingen die Stadtrechte. Die damalige Solinger Bevölkerung musste nun immer im Herbst eine Steuer entrichten und hatte die Erlaubnis (wie es im Urkundentext steht), einen Bürgermeister zu wählen. Recht sprechen sollten seit dem „geschworene Schöffen“.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Windmuehle_Solingen_Theodor_Verhas_Henry_Winkles.jpg",
  },
];
export { intro, outro, questions };
