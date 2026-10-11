function somenteNumeros(valor, limite) {
    return valor.replace(/\D/g, "").slice(0, limite);
}

export function formatarCpf(valor) {
    const numeros = somenteNumeros(valor, 11);
    let cpf = numeros.slice(0, 3);

    if (numeros.length > 3) {
        cpf += "." + numeros.slice(3, 6);
    }

    if (numeros.length > 6) {
        cpf += "." + numeros.slice(6, 9);
    }

    if (numeros.length > 9) {
        cpf += "-" + numeros.slice(9, 11);
    }

    return cpf;
}

export function formatarTelefone(valor) {
    const numeros = somenteNumeros(valor, 11);

    if (numeros.length === 0) {
        return "";
    }

    if (numeros.length <= 2) {
        return "(" + numeros;
    }

    const ddd = numeros.slice(0, 2);
    const numero = numeros.slice(2);
    let telefone = "(" + ddd + ") ";

    // O número local pode ter oito dígitos (fixo) ou nove (celular).
    if (numero.length > 4) {
        telefone += numero.slice(0, -4) + "-" + numero.slice(-4);
    } else {
        telefone += numero;
    }

    return telefone;
}

export function formatarCep(valor) {
    const numeros = somenteNumeros(valor, 8);

    if (numeros.length <= 5) {
        return numeros;
    }

    return numeros.slice(0, 5) + "-" + numeros.slice(5, 8);
}
