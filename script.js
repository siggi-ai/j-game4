function game() {

    var userPunkte = 0;
    var computerPunkte = 0;
    var anzahlRunden = 0;

    do{
        var computerHand = Math.random()*3 + 0.5;
        computerHand = Math.round(computerHand);

        var userHand = prompt("Schere(1), Stein(2) oder Papier(3)?", "");

        if(userHand != 1 && userHand != 2 && userHand != 3){
            alert("Gib bitte die Zahlen 1, 2, oder 3 ein!")
        }

        if(computerHand == 1 && userHand == 1){
            alert("Schere gegen Schere. Keiner gewinnt.");
            anzahlRunden++;
        }
        if(computerHand == 1 && userHand == 2){
            alert("Schere zerbricht an Stein. Du gewinnst!");
            userPunkte++;
            anzahlRunden++;
        }
        if(computerHand == 1 && userHand == 3){
            alert("Schere schneidet Papier. Computer gewinnt!")
            computerPunkte++;
            anzahlRunden++;
        }
        if(computerHand == 2 && userHand == 1){
            alert("Stein zerbricht Schere. Computer gewinnt.");
            computerPunkte++;
            anzahlRunden++;
        }
        if(computerHand == 2 && userHand == 2){
            alert("Stein gegen Stein. Keiner gewinnt.");
            anzahlRunden++;
        }
        if(computerHand == 2 && userHand == 3){
            alert("Stein wird von Papier umhüllt. Du gewinnst!")
            userPunkte++;
            anzahlRunden++;
        }
        if(computerHand == 3 && userHand == 1){
            alert("Papier wird von Schere zerschnitten. Du gewinnst.");
            userPunkte++;
            anzahlRunden++;
        }
        if(computerHand == 3 && userHand == 2){
            alert("Papier umhüllt Stein. Computer gewinnt!");
            computerPunkte++;
            anzahlRunden++;
        }
        if(computerHand == 3 && userHand == 3){
            alert("Papier gegen Papier. Keiner gewinnt.")
            anzahlRunden++;
        }
    }while(computerPunkte < 3 && userPunkte < 3);

    if(userPunkte >= 3){
        alert("Du hast gewonnen!\nAnzahl der Runden: " + anzahlRunden + "\nPunkte Computer: " + computerPunkte + "\nPunkte User*in: " + userPunkte);
    }

    if(computerPunkte >= 3){
        alert("Computer hat gewonnen!\nAnzahl der Runden: " + anzahlRunden + "\nPunkte Computer: " + computerPunkte + "\nPunkte User*in: " + userPunkte);
    }

}