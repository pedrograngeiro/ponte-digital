const chave = "ponte-digital-cadastro-teste";

export function salvarCadastro(dados) {
    try {
        localStorage.setItem(chave, JSON.stringify(dados));
        return true;
    } catch {
        return false;
    }
}

export function carregarCadastro() {
    try {
        const dados = JSON.parse(localStorage.getItem(chave));
        if (!dados || typeof dados !== "object") return null;
        return dados;
    } catch {
        return null;
    }
}

export function apagarCadastro() {
    try {
        localStorage.removeItem(chave);
        return true;
    } catch {
        return false;
    }
}
