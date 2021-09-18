import { useState } from 'react';
import calculeByFormula from './util'

const useCalculator =(props)=>{
    
    const [formula, _setFormula] = useState(props.formula)
    const calcule =(fields=[]) => {
        try {
            return calculeByFormula(formula, fields);
        } catch (_error) {
            return 0;
        }   
    }
    return {calcule};
}

export default useCalculator;