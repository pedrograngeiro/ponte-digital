const projetos = [
    {
        titulo: "Primeiros cliques",
        imagem: "primeiros-passos",
        alt: "Pessoas aprendendo a usar notebooks.",
        descricao: "Adultos e idosos. Uso do computador, digitação e acesso à internet.",
    },
    {
        titulo: "Aprender para criar",
        imagem: "estudantes-computadores",
        alt: "Estudantes trabalhando em computadores.",
        descricao:
            "Jovens a partir de 14 anos. Pesquisa escolar, edição de textos e criação de apresentações.",
    },
    {
        titulo: "Conexão consciente",
        imagem: "laboratorio",
        alt: "Grupo de pessoas usando computadores em um laboratório.",
        descricao:
            "Jovens e adultos. Senhas seguras, identificação de golpes e uso responsável das redes.",
    },
];

function criarCartoes() {
    return projetos
        .map(function (projeto) {
            return `<article class="cartao">
            <span class="tag">Oficina gratuita</span>
            <h2>${projeto.titulo}</h2>
            <picture>
                <source srcset="../imagens/${projeto.imagem}.webp" type="image/webp">
                <img src="../imagens/${projeto.imagem}.jpg" alt="${projeto.alt}" width="1200" height="800">
            </picture>
            <h3>Público e atividades</h3>
            <p>${projeto.descricao}</p>
            <a class="botao" href="#cadastro?interesse=participante">Quero participar</a>
        </article>`;
        })
        .join("\n");
}

// Os templates usam conteúdo fixo da ONG, sem dados digitados pelo usuário.
const paginas = {
    inicio: `
<h1>Sobre a Ponte Digital</h1>
    <section>
      <h2>Nossa missão</h2>
      <p>A Ponte Digital oferece oficinas gratuitas de informática para jovens e adultos. A proposta é ajudar quem precisa usar a tecnologia para estudar, procurar emprego e realizar tarefas do dia a dia.</p>
      <figure>
        <picture>
          <source srcset="../imagens/aula-informatica.webp" type="image/webp">
          <img src="../imagens/aula-informatica.jpg" alt="Pessoas usando computadores em uma sala de aula." width="1200" height="800" loading="lazy">
        </picture>
        <figcaption>Foto: Kampus Production / Pexels.</figcaption>
      </figure>
    </section>
    <section>
      <h2>Como participar</h2>
      <p>Conheça os <a href="#projetos">projetos sociais</a> ou preencha o <a href="#cadastro">cadastro</a> para demonstrar interesse nas oficinas.</p>
    </section>
    <section>
      <h2>Contato</h2>
      <p>E-mail ilustrativo: contato@pontedigital.example</p>
      <p>Atendimento proposto: segunda a sexta, das 9h às 17h.</p>
    </section>
    `,
    projetos: `
<h1>Projetos sociais</h1>
    <p>As atividades propostas atendem pessoas com pouca experiência no uso de computadores.</p>
    ${criarCartoes()}
    <section>
      <h2 id="voluntariado">Voluntariado e doações</h2>
      <article>
        <h3>Seja voluntário</h3>
        <p>Voluntários podem ajudar nas oficinas e acompanhar os participantes.</p>
        <a href="#cadastro?interesse=voluntario">Manifestar interesse em voluntariado</a>
      </article>
      <article>
        <h3>Campanha Computador Aberto</h3>
        <p>A campanha propõe arrecadar computadores em funcionamento, materiais e apoio financeiro. Este site demonstrativo não recebe pagamentos.</p>
        <a href="#cadastro?interesse=apoiador">Manifestar interesse em doação</a>
      </article>
    </section>
    <section>
      <h2>Participe</h2>
      <p><a href="#cadastro?interesse=participante">Cadastre seu interesse nas oficinas.</a></p>
    </section>
    `,
    cadastro: `
<h1>Cadastro de interesse</h1>
    <aside>
      <p>Este formulário é uma demonstração. Use dados de teste; não há envio ao servidor. O nome de teste, o e-mail de teste e o interesse podem ser salvos neste navegador.</p>
    </aside>
    <p>Todos os campos são obrigatórios, exceto o complemento.</p>
    <form id="cadastro">
      <p id="erro-formulario" class="alerta erro" role="alert" hidden></p>
      <fieldset>
        <legend>Dados pessoais</legend>
        <label for="nome">Nome completo</label>
        <input id="nome" name="nome" type="text" autocomplete="name" minlength="3" required>
        <label for="email">E-mail</label>
        <input id="email" name="email" type="email" autocomplete="email" required>
        <label for="cpf">CPF (000.000.000-00)</label>
        <input id="cpf" name="cpf" type="text" inputmode="numeric" maxlength="14" pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" required>
        <label for="telefone">Telefone com DDD</label>
        <input id="telefone" name="telefone" type="tel" autocomplete="tel" maxlength="15" pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}" required>
        <label for="nascimento">Data de nascimento</label>
        <input id="nascimento" name="nascimento" type="date" autocomplete="bday" required>
      </fieldset>
      <fieldset>
        <legend>Endereço</legend>
        <label for="cep">CEP (00000-000)</label>
        <input id="cep" name="cep" type="text" autocomplete="postal-code" inputmode="numeric" maxlength="9" pattern="[0-9]{5}-[0-9]{3}" required>
        <label for="endereco">Rua ou avenida</label>
        <input id="endereco" name="endereco" type="text" autocomplete="address-line1" required>
        <label for="numero">Número</label>
        <input id="numero" name="numero" type="text" required>
        <label for="complemento">Complemento</label>
        <input id="complemento" name="complemento" type="text" autocomplete="address-line2">
        <label for="bairro">Bairro</label>
        <input id="bairro" name="bairro" type="text" required>
        <label for="cidade">Cidade</label>
        <input id="cidade" name="cidade" type="text" autocomplete="address-level2" required>
        <label for="estado">Estado</label>
        <select id="estado" name="estado" autocomplete="address-level1" required>
          <option value="">Selecione</option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Participação</legend>
        <label for="interesse">Como deseja participar?</label>
        <select id="interesse" name="interesse" required>
          <option value="">Selecione</option>
          <option value="participante">Participar das oficinas</option>
          <option value="voluntario">Ser voluntário</option>
          <option value="apoiador">Apoiar a ONG</option>
        </select>
      </fieldset>
      <button type="submit">Concluir cadastro demonstrativo</button>
      <p class="alerta sucesso" id="resultado" role="status" tabindex="-1" hidden></p>
      <button type="button" id="apagar-cadastro">Apagar dados de teste salvos</button>
    </form>
    <button type="button" id="abrir-ajuda">Sobre este cadastro</button>
    <dialog id="ajuda" aria-labelledby="titulo-ajuda">
      <h2 id="titulo-ajuda">Cadastro demonstrativo</h2>
      <p>Este projeto não envia dados nem recebe pagamentos. Em um site real, seria necessário proteger e validar os dados no servidor.</p>
      <form method="dialog">
        <button>Fechar</button>
      </form>
    </dialog>
    `,
};

export function criarPagina(rota) {
    const template = document.createElement("template");
    template.innerHTML = paginas[rota];
    return template.content.cloneNode(true);
}
