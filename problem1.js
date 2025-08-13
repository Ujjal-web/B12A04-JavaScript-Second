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


