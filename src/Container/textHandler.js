

const textHandler = {
    placeHolderText : (placeHolderNormal, placeHolderFocus, focus) => focus ?  placeHolderFocus : placeHolderNormal,
        
    bottomText : (bottomNormal, bottomError, validation) => 
            validation == 'INCORRECT' ?  bottomError : bottomNormal
}

export default textHandler;