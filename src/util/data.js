import wappen from "../assets/images/Solingen_wappen.svg";
const intro = {
  image: wappen,
  headline: "Was weisst du über die Klingenstadt?",
  text:
    "Komm mit auf eine Reise durch die Geschichte der Klingenstadt. Lerne etwas neues und lass dich überraschen.",
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
    id: 4,
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
    id: 5,
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
  {
    id: 6,
    question: "Welcher Solinger Oberbürgermeister war am längsten im Amt?",
    answers: [
      { text: "Gerhard Kaimer", isCorrect: false },
      { text: "August Dicke", isCorrect: true },
      { text: "Gottlieb Heinrich", isCorrect: false },
      { text: "Gustav van Meenen", isCorrect: false },
    ],
    solution:
      "Der Jurist <strong>August Dicke</strong> war von 1896 bis 1928 über 30 Jahre im Amt. Dabei war er mit Verantwortlich für verschiedene Projekte, wie z.B den Bau der Sengbachtalsperre. Seine größte Vision, die Zusammenfassung der Stadtteile zur Großstadt Solingen, konnte er nichtmehr erleben.",
    image:
      "https://lh3.googleusercontent.com/proxy/6cCQavwMHK7qcO8lYgNBC2-kFEQKcfY3UFm6ktBN_7dnDtRaOWLj-yiiSynAkvP-8RWX6R5f7lJuTJ02I9L1zh3duMJ25WULbr_LMn9Mw6hYGQt3Jw",
  },
  {
    id: 7,
    question: "Wie hoch ist die jährliche Durchschnittstemperatur in Solingen?",
    answers: [
      { text: "18,2 °C", isCorrect: false },
      { text: "14,2 °C", isCorrect: false },
      { text: "10,8 °C", isCorrect: true },
      { text: "8,9 °C", isCorrect: false },
    ],
    solution:
      "Die Temperatur in Solingen beträgt 10,8 °C im Jahresdurchschnitt. Solingen gehört nach der Nachbarstadt Wuppertal zu den Städten in Deutschland mit den höchsten Niederschlagsmengen. Dies ist primär darin begründet, dass das Bergische Land von Nordwesten her die erste nennenswerte Erhebung darstellt, so dass sich Wolken vielfach anstauen.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/M%C3%BCngsten-SG-002%2BRS-019-02.09.05_1.JPG",
  },
  {
    id: 8,
    question: "Was ist das älteste erhaltene Bauwerk Solingens?",
    answers: [
      { text: "Walder Kirchturm", isCorrect: true },
      { text: "Wipperkotten", isCorrect: false },
      { text: "Höhscheider Rathaus", isCorrect: false },
      { text: "Kloster Gräfrath", isCorrect: false },
    ],
    solution:
      "Den <strong>Walder Kirchturm</strong> umgibt eine 1.000 Jährige Geschichte. Um 1150 ließ die Deutzer Abtei eine steinerne Basilika errichten, von welcher der Turm heute noch erhalten ist.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Walder_Kirche_1.jpg",
  },
  {
    id: 9,
    question: "Wofür ist in Solingen der Name 'Accept' bekannt?",
    answers: [
      { text: "Integrationsprogramm", isCorrect: false },
      { text: "Heavy Metal Band", isCorrect: true },
      { text: "Messermarke", isCorrect: false },
      { text: "Computersoftware", isCorrect: false },
    ],
    solution:
      "Die Band 'Accept' stieg in den 80er Jahren zu einen der erfolgreichsten deutschen Metalbands auf. Mit Erfolgen in den USA verkaufte die Band über 2 Millionen Tonträger.",
    image:
      "https://www.solinger-tageblatt.de/bilder/2020/05/06/13752009/1869952023-de010c21-19e5-438d-83ac-6713c5b6f15c-WYIamvzouea.jpg",
  },
  {
    id: 10,
    question: "Welcher ist der größte Arbeitgeber Solingens?",
    answers: [
      { text: "Wilkinson Sword", isCorrect: false },
      { text: "Walbusch", isCorrect: false },
      { text: "Stadtwerverwaltung Solingen", isCorrect: true },
      { text: "Haribo", isCorrect: false },
    ],
    solution:
      "Die Stadtverwaltung Solingen ist heute mit 2.400 Mitarbeitern mit Abstand der größte Arbeitgeber in Solingen.",
    image:
      "https://www.solinger-tageblatt.de/bilder/2017/03/16/7787959/1199189060-6bbafd2d-4843-4bd8-8726-89c421462bf9-MorFS30Bdea.jpg",
  },
  {
    id: 11,
    question: "Wofür steht der Anker im Wappen der Stadt?",
    answers: [
      { text: "Schiffsverkehr auf der Wupper", isCorrect: false },
      { text: "Gedenken an den Schutzpatron der Stadt", isCorrect: true },
      { text: "Historie der Ankerproduktion", isCorrect: false },
      { text: "Fester Verankerung in der Klingenproduktion", isCorrect: false },
    ],
    solution:
      "Der Schutzpatron Solingens ist der Heilige Clemens. Der Legende nach starb er den Märtyrertod durch Ertränken mit einem Anker.",
    image:
      "https://www.solinger-tageblatt.de/bilder/2018/07/09/10018147/1686579822-wappen-stadtwappen-solingen-1Uf9.jpg",
  },
];
const outro = {
  headline: "Das war's!",
  text:
    "Toll, dass du alle Fragen beantwortet hast. Du hast <strong>" +
    localStorage.getItem("correct") +
    " von " +
    questions.length +
    "</strong> Fragen richtig beantwortet. Wir hoffen, dass du etwas neues lernen konntest und Spaß hattest.",
};
export { intro, outro, questions };
