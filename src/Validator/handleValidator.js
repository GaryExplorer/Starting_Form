import {NOTHING, INCORRECT, CORRECT} from '../Data/state';

export function emailValidator(text){
    if(text == '') return NOTHING;
    if(text.includes('@') && text.includes('.'))
        return CORRECT;
    return INCORRECT;
}

export function nameValidator(text){
    return text==''? NOTHING : CORRECT;
}
