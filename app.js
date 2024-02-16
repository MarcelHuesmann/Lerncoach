function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Frage " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Welche Eigenschaft hat die Hypotenuse im rechtwinkligen Dreieck?", ["längste Seite", "kürzeste Seite","gebogene Seite ", "keine vorhanden"], "längste Seite"),
    new Question("Mit welchem Buchstaben wird meistens die UNabhängige Variable bezeichnet? ", ["mit u", "mit a", "mit x", "mit y"], "mit x"),
    new Question("Was ist die Ableitung der Sinusfunktion?", ["-sin", "e^x","tan", "cos"], "cos"),
    new Question("Das Quadrat des Radius r mal der Kreiszahl pi ergibt?", ["Umfang des Kreises", "Fläche des Kreises", "Volumen des Kreises", "Kreis des Kreises"], "Fläche des Kreises"),
    new Question("Bei der Primfaktorzerlegung zerlegt man", ["Primzahlen", "primitive Zahlen", "irrationale Zahlen", "natürliche Zahlen"], "natürliche Zahlen"),
    new Question("Anstatt immer wieder die gleiche Zahl zu addieren kann man auch?", ["aufhören", "subtrahieren", "multiplizieren", "konjugieren"], "multiplizieren"),
    new Question("Was ist die kleinste NATÜRLICHE Zahl?  ", ["Null", "Eins", "es gibt keine kleinste", "minus unendlich"], "Null"),
    new Question("Etwas dividiert DURCH Null ist?", ["nicht möglich", "Null", "unendlich ", "Eins"], "nicht möglich"),
    new Question("Wenn man ausdrücken möchte, dass sich etwas Vergangenes unmittelbar auf die Gegenwart auswirkt, verwendet man?", ["Past simple", "Present perfect", "Conditional", "Present simple"], "Present perfect"),
    new Question("Wie schreibt man „Farbe“ auf Englisch richtig- colour oder color?", ["color ", "colour", "beides richtig", "beides falsch"], "beides richtig"),
    new Question("Der Name welches Festes kommt von „Abend vor Allerheiligen“ ?", ["Christmas", "Halloween", "Easter", "Independence Day"], "Halloween"),
    new Question("Englisch gehört zur Familie welcher Sprachen?", ["romanische Sprachen", "amerikanische Sprachen", "spanische Sprachen", "germanische Sprachen"], "germanische Sprachen"),
    new Question("Wofür steht die Abkürzung www?", ["world web way", "wide web world", "world wide web", "world of wide web"], "world wide web"),
    new Question("Welches gilt als das beste, reinste Englisch?", ["Belfast English", "Texas English", "Oxford English", "London English"], "Oxford English"),
    new Question("Welches kurze Wort zeigt den Infinitiv von Verben an?", ["to", "go", "see", "be"], "to"),
    new Question("Wie heißt einer der berühmtesten englischen Dichter ?", ["Sony", "Bell", "Worchestershire", "Shakespeare"], "Shakespeare"),
    new Question("Wie nennt man den dritten Fall ?", ["Genitiv", "Ablativ", "Akkusativ", "Dativ"], "Dativ"),
    new Question("Welche Wortart beschreibt Eigenschaften?", ["Nomen", "Adjektiv", "Verb", "Konjunktion"], "Adjektiv"),
    new Question("Wenn man den aktuellen Abschnitt nicht versteht, was hat man dann bereits nicht  komplett verstanden?", ["den aktuellen Abschnitt", "alles", "den nächsten Abschnitt", "den vorangegangenen Abschnitt"], "den vorangegangenen Abschnitt"),
    new Question("Wozu dient eine Sprache hauptsächlich?", ["Konstruktion", "Konjunktion", "Kommunikation", "Korruption"], "Kommunikation"),
    new Question("Wie nennt man das Präteritum noch?", ["Mitvergangenheit", "Vorvergangenheit", "Vergangene Vergangenheit", "Gegenwärtige Vergangenheit"], "Mitvergangenheit"),
    new Question("Welche Form verwendet man, um zu zeigen, dass etwas von jemand anderem gesagt wurde?", ["Genitiv", "Konjunktiv I", "Konjunktiv II", "Akkusativ"], "Konjunktiv I"),
    new Question("Welches Nichtverständnis reicht oft schon aus, dass man aufgibt?", ["die Textart", "hauptsächliche Aussage", "ein Kapitel", "ein Wort / Ausdruck"], "ein Wort / Ausdruck"),
    new Question("Das Deutsche Volk ist (noch) bekannt als Volk der Dichter und ?", ["Fußballer", "Kobolde", "Denker", "Dichterinnen"], "Denker"),


];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
