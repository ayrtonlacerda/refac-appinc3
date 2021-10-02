const calculeByFormula = (strFormula='', value) => {
    try {
        if(strFormula){
            const keys = Object.keys(value);
            const formulaToExec=  keys.reduce((formulaToExec, key)=> {
                const rg = new RegExp(`(${key})`,'gi');
                return  formulaToExec.replace(rg, value[key]).replace(',','.');
            }, strFormula);
            formulaToExec.replace(/(x)/gi, "*");
            return  String(eval(formulaToExec)).replace('.', ',');
        }
        return "Informe uma fórmula."
    } catch (error) {
        return "Erro!"
    }
}

export default calculeByFormula;
