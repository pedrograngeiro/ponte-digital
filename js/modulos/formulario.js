import { formatarCpf, formatarTelefone, formatarCep } from "./mascaras.js";
import { salvarCadastro, carregarCadastro, apagarCadastro } from "./armazenamento.js";

export function configurarFormulario(parametros) {
    const formulario = document.getElementById("cadastro");
    const erro = document.getElementById("erro-formulario");
    const resultado = document.getElementById("resultado");
    const botao = formulario.querySelector('button[type="submit"]');
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const interesse = document.getElementById("interesse");
    const dados = carregarCadastro();

    if (dados) {
        nome.value = typeof dados.nome === "string" ? dados.nome : "";
        email.value = typeof dados.email === "string" ? dados.email : "";
        interesse.value = typeof dados.interesse === "string" ? dados.interesse : "";
    }

    nome.setCustomValidity(
        nome.value.trim().length > 0 && nome.value.trim().length < 3
            ? "Informe um nome com pelo menos três caracteres."
            : "",
    );

    const opcoes = ["participante", "voluntario", "apoiador"];
    if (opcoes.includes(parametros.get("interesse"))) {
        interesse.value = parametros.get("interesse");
    }

    const nascimento = document.getElementById("nascimento");
    const hoje = new Date();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");
    nascimento.min = "1900-01-01";
    nascimento.max = hoje.getFullYear() + "-" + mes + "-" + dia;

    for (const [id, formatar] of [
        ["cpf", formatarCpf],
        ["telefone", formatarTelefone],
        ["cep", formatarCep],
    ]) {
        const campo = document.getElementById(id);
        campo.addEventListener("input", function () {
            campo.value = formatar(campo.value);
        });
    }

    formulario.addEventListener("input", function (evento) {
        nome.setCustomValidity(
            nome.value.trim().length < 3 ? "Informe um nome com pelo menos três caracteres." : "",
        );
        erro.hidden = true;
        resultado.hidden = true;
        botao.disabled = false;
        if (evento.target.validity) {
            evento.target.setAttribute("aria-invalid", String(!evento.target.validity.valid));
        }
    });

    formulario.addEventListener(
        "invalid",
        function (evento) {
            evento.target.setAttribute("aria-invalid", "true");
            erro.textContent = "Confira os campos destacados e complete os dados obrigatórios.";
            erro.hidden = false;
        },
        true,
    );

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        if (!formulario.reportValidity()) return;
        const salvo = salvarCadastro({
            nome: nome.value.trim(),
            email: email.value.trim(),
            interesse: interesse.value,
        });
        resultado.textContent = salvo
            ? "Cadastro de teste confirmado. Nome, e-mail e interesse salvos neste navegador."
            : "Cadastro de teste confirmado, mas o navegador não permitiu salvar os dados.";
        resultado.hidden = false;
        resultado.focus();
        botao.disabled = true;
    });

    document.getElementById("apagar-cadastro").addEventListener("click", function () {
        const apagado = apagarCadastro();
        resultado.textContent = apagado
            ? "Dados de teste apagados do navegador."
            : "Não foi possível apagar os dados.";
        resultado.hidden = false;
        resultado.focus();
        if (apagado) {
            formulario.reset();
            nome.setCustomValidity("");
        }
        botao.disabled = false;
    });

    const ajuda = document.getElementById("ajuda");
    document.getElementById("abrir-ajuda").addEventListener("click", function () {
        ajuda.showModal();
    });
}
