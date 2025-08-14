function totalFine( fare ) {
          let fine = 0;
          if (typeof fare == 'number' && fare > 0) {
          fine = fare + fare * (20 / 100) + 30;
          }
          else {
            fine = 'Invalid';
          }
          return fine;
}





function  onlyCharacter( str ) {
        let noSpaceCharacter = '', characterResult = '';
        if ( typeof str !== 'string') {
            characterResult = 'Invalid';
        }          
        else {
            noSpaceCharacter = str.replaceAll( " ", "" );
            characterResult = noSpaceCharacter.toUpperCase();
        }
        return characterResult;
}




function  bestTeam( player1, player2 ) {
    let teamResult = "";
    if (typeof player1 === "object" && typeof player2 === "object") {
            teamTotal1 = player1.foul + player1.cardY + player1.cardR;
          teamTotal2 = player2.foul + player2.cardY + player2.cardR;
          if (teamTotal1 === teamTotal2) {
            teamResult = "Tie";
          }
          else if (teamTotal1 < teamTotal2) {
            teamResult = player1.name;            
          }
          else {teamResult = player2.name;}
    }
    else {
          teamResult = "Invalid";     
    }
    return teamResult     
}