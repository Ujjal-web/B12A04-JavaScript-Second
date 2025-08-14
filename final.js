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



function  isSame(arr1 , arr2 ) {
        let sameResult;
        if (Array.isArray(arr1) === true && Array.isArray(arr2) === true ) {
            if (arr1.length !== arr2.length) { 
                sameResult = false;
            }
            else {
                for ( let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i] && typeof arr1[i] !== typeof arr2[i]) {
                        sameResult = false;
                        break;
                    }
                    else {
                        sameResult = true;
                    }
                    }
            }
            
        }
        else {
            sameResult = "Invalid";
        }
        return sameResult
}




function  resultReport( marks ) {
    let totalMarks = 0, studentResult = { finalScore: 0 , pass: 0, fail: 0 };
          if (Array.isArray(marks)) {
            for (let i = 0; i < marks.length; i++) {
                totalMarks = totalMarks + marks[i];
                if (marks[i] >= 40) {
                    studentResult.pass++
                }
                else {
                    studentResult.fail++
                }
          }
          if (totalMarks === 0) {
            studentResult.finalScore = 0;
          }
          else{
            studentResult.finalScore = Math.round(totalMarks / marks.length);
          }
          
        }
        else {
            studentResult = "Invalid"
        }
        return studentResult
}
