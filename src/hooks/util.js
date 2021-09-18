const calculeByFormula = (strFormula='', fields=[]) => {
    try {
        if(strFormula){
            const formulaToExec=  fields.reduce((formulaToExec, fieldToAdd)=> {
                const rg = new RegExp(`(${fieldToAdd.key})`,'gi');
                return  formulaToExec.replace(rg, fieldToAdd.value)
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
