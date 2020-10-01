let ObiwanImage = $("#kenobi")
let MaceWinduImage = $("#windu")
let PalpatineImage = $("#palpatine")
let DarthVaderImage = $("#darthvader")


let ObiwanKenobi = { attack: 7, counterattack: 8, health: 90 };
let MaceWindu = { attack: 8, counterattack: 10, health: 115 };
let Palpatine = { attack: 9, counterattack: 12, health: 125 };
let DarthVader = { attack: 10, counterattack: 14, health: 140 };

let displayObiwanHealth = $("#ohealth")
let displayMaceWinduHealth = $("#mhealth")
let displayPalpatineHealth = $("#phealth")
let displayDarthVaderHealth = $("#dhealth")

displayObiwanHealth.text(ObiwanKenobi.health);
displayMaceWinduHealth.text(MaceWindu.health);
displayPalpatineHealth.text(Palpatine.health);
displayDarthVaderHealth.text(DarthVader.health);

let characterChose = false;
let enemyChose = false;
let selectedChar;
let defendingChar;
let defeatedOpponents = []
let baseAttack;


let charSelect = function () {

    if (characterChose === true && enemyChose === false) {
        if ((ObiwanKenobi != selectedChar) && ($(this).attr("id") === "kenobi")) {
            defendingChar = ObiwanKenobi;
            ObiwanImage.insertAfter($("#protagonist")).css("background", "black")
            $("#kt").css("color", "white")
            $("#ohealth").css("color", "white");
        }
        else if ((MaceWindu != selectedChar) && ($(this).attr("id") === "windu")) {
            defendingChar = MaceWindu;
            MaceWinduImage.insertAfter($("#protagonist")).css("background", "black")
            $("#gt").css("color", "white")
            $("#mhealth").css("color", "white");
        } 
        else if ((Palpatine != selectedChar) && ($(this).attr("id") === "palpatine")) {
            defendingChar = Palpatine;
            PalpatineImage.insertAfter($("#protagonist")).css("background", "black")
            $("#et").css("color", "white")
            $("#phealth").css("color", "white")
        } 
        else if ((DarthVader != selectedChar) && ($(this).attr("id") === "darthvader")) {
            defendingChar = DarthVader;
            DarthVaderImage.insertAfter($("#protagonist")).css("background", "black")
            $("#jt").css("color", "white")
            $("#dhealth").css("color", "white");
        }
        enemyChose = true;
    }

    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#antagonist")).css("background", "red")
        $(this).insertAfter($("#currentchar")).css("background", "white")
        if ($(this).attr("id") === "kenobi") {
            selectedChar = ObiwanKenobi;
        }
        else if ($(this).attr("id") === "windu") {
            selectedChar = MaceWindu;
        }
        else if ($(this).attr("id") === "palpatine") {
            selectedChar = Palpatine;
        }
        else if ($(this).attr("id") === "darthvader") {
            selectedChar = DarthVader;
        }
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}

ObiwanKenobiImage.on("click", charSelect);

MaceWinduImage.on("click", charSelect);

PalpatineImage.on("click", charSelect);

DarthVaderImage.on("click", charSelect);


function determineChar(x) {
    return x.counterattack === 8 ? "ObiwanKenobi"
        : x.counterattack === 10 ? "MaceWindu"
            : x.counterattack === 12 ? "Palpatine"
                : "DarthVader";
}


$("#attackbutton").on("click", function () {
    defendingChar.health -= selectedChar.attack;

    $("#displayattack").text(`You attacked ${determineChar(defendingChar)} for ${selectedChar.attack} damage`)

    $("#displaycounter").text(`${determineChar(defendingChar)} attacked you for ${defendingChar.counterattack} damage`)

    selectedChar.attack += baseAttack;

    if (defendingChar.health > 0) {
        selectedChar.health -= defendingChar.counterattack
    }

    displayObiwanHealth.text(ObiwanKenobi.health);
    displayMaceWinduHealth.text(MaceWindu.health);
    displayPalpatineHealth.text(Palpatine.health);
    displayDarthVaderHealth.text(DarthVader.health);


    if (Palpatine.health <= 0) {
        PalpatineImage.css("display", "none")
        enemyChose = false;
        if (!defeatedOpponents.includes("e"))
            defeatedOpponents.push("e")
    }
    if (MaceWindu.health <= 0) {
        MaceWinduImage.css("display", "none")
        enemyChose = false;
        if (!defeatedOpponents.includes("g"))
            defeatedOpponents.push("g")
    }
    if (DarthVader.health <= 0) {
        DarthVaderImage.css("display", "none")
        enemyChose = false;
        if (!defeatedOpponents.includes("j"))
            defeatedOpponents.push("j")
    }
    if (ObiwanKenobi.health <= 0) {
        obiwanImage.css("display", "none")
        enemyChose = false;
        if (!defeatedOpponents.includes("o"))
            defeatedOpponents.push("o")
    }

    if (selectedChar.health <= 0) {
        alert("Game over!");
        $("#restart").css("display", "block")

    }

    if (defeatedOpponents.length === 3 && selectedChar.health > 0) {
        alert("Congratulations! You have brought balance and tranquility to the universe");
        $("#restart").css("display", "block")
    }
})

$("#restart").on("click", function () {
    ObiwanKenobi = { attack: 7, counterattack: 8, health: 90 };
    MaceWindu = { attack: 8, counterattack: 10, health: 115 };
    Palpatine = { attack: 9, counterattack: 12, health: 125 };
    DarthVader = { attack: 10, counterattack: 14, health: 140 };

    displayObiwanHealth.text(ObiwanKenobi.health);
    displayMaceWinduHealth.text(MaceWindu.health);
    displayEmperorHealth.text(Palpatine.health);
    displayDarthVaderHealth.text(DarthVader.health);

    characterChose = false;
    enemyChose = false;

    selectedChar = "#";
    defendingChar = "#";

    defeatedOpponents = []
    baseAttack = 0;

    $("#darthvader").insertAfter($("#pickrow")).css("display", "inline-block")
    $("#palpatine").insertAfter($("#pickrow")).css("display", "inline-block")
    $("#windu").insertAfter($("#pickrow")).css("display", "inline-block")
    $("#kenobi").insertAfter($("#pickrow")).css("display", "inline-block")

    $("#displaycounter").text("")
    $("#displayattack").text("")

    $("#restart").css("display", "none")

    $(".characters").css("background", "white")

    $(".nametext").css("color", "black");

    $("#ohealth").css("color", "black");
    $("#mhealth").css("color", "black");
    $("#phealth").css("color", "black");
    $("#dhealth").css("color", "black");
})