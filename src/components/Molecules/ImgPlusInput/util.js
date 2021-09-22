const calculeByFormula = (strFormula='', value) => {
    try {
        if(strFormula){
            const keys = Object.keys(value);
            const formulaToExec=  keys.reduce((formulaToExec, key)=> {
                const rg = new RegExp(`(${key})`,'gi');
                return  formulaToExec.replace(rg, value[key]);
            }, strFormula);
            formulaToExec.replace(/(x)/gi, "*");
            return  String(eval(formulaToExec));
        }
        return "Informe uma fórmula."
    } catch (error) {
        return "Erro!"
    }
}

export default calculeByFormula;
