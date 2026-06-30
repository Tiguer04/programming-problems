var isValid = function (s) {
  const letras = s.split("");
  let pares = [...letras];
  let iteraciones = 0;

  for (let i = 0; iteraciones < letras.length / 2; i++) {
    let primera = pares[i];
    let segunda = pares[i + 1];

    if (
      (primera === "(" && segunda === ")") ||
      (primera === "[" && segunda === "]") ||
      (primera === "{" && segunda === "}")
    ) {
      pares.splice(i + 1, 1);
      pares.splice(i, 1);
      i = -1;
      iteraciones++;
    }

    if (i === letras.length - 1) {
      break;
    }
  }

  return pares.length === 0;
};

console.log(isValid("()"));
