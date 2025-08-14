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

console.log(bestTeam ({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }))