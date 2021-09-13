 const calculeByFormula = (strFormula, A,B, C, D) => {
    try {
        if(strFormula){
            const formula = String(strFormula)
            .replace(/(a)/gi, A)
            .replace(/(b)/gi, B)
            .replace(/(c)/gi, C)
            .replace(/(d)/gi, D)
            .replace(/(x)/gi, "*");

            return  String(eval(formula));
        }
        return "Informe uma fórmula."
    } catch (error) {
        return "Erro!"
    }
}

export default calculeByFormula;
