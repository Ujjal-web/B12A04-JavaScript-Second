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

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]))
