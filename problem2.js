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

console.log( onlyCharacter( true ) );
