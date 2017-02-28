import {NOTHING, INCORRECT, CORRECT} from '../Data/state';

const orange = '#e07828';
const font_gray = '#789490'

const inputStyle = {
    inputwrapper : {
        'display' : 'inline-block',
        'fontFamily' : 'AvenirNextLTProMedium, Helvetica, Arial, sans-serif',
        'paddingTop' : '10px',
        'width' : '100%'
        
    },

    inputlabel : (focus, validation) => {
        let opacity = 1;
        let color = 'gray' ;

        

        if(focus){
            switch(validation){                
                case INCORRECT:
                    color = 'red';
                    break;
                default:
                    color = orange;
            }
        }
        if(!focus && validation == INCORRECT ) color = 'red';
        if(!focus && validation == NOTHING) opacity = 0;

        return{
            'color' : color ,
            'lineHeight' : 1,
            'fontSize' : '13px',
            'transition' : 'opacity 0.25s ease-in-out',
            'opacity' : opacity
        }
    },

    inputbox : (focus, validation) => {
        let color = 'gray';

        if(validation == INCORRECT) 
            color = 'red';
        else 
            color = focus? orange:'gray';

        return{
            'borderWidth' : '0 0 1px 0',
            'borderBottom' : '1px solid '+ color,
            'fontSize' : '21px',
            'lineHeight' : '1.2',
            'width' : '100%'
        }
    },

    bottomStyle : (focus, validation) => {
        let display = 'none';
        let color = 'gray';

        switch(validation){
            case NOTHING:
                display = focus? 'block':'none';
                break;
            case CORRECT:
                display = focus? 'block':'none';
                break;
            case INCORRECT:
                color = 'red';
                display = 'block';
        }

        return {
            'fontSize' : '13px',
            'color' : color,
            'display' : display
        }
    }
}

export default inputStyle;