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

console.log(isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]))
