"use strict";

export function configurarMenu() {
    const botaoMenu = document.querySelector(".menu-botao");
    const menu = document.getElementById("menu-principal");

    botaoMenu.hidden = false;
    menu.classList.add("menu-interativo");

    function fecharMenu() {
        botaoMenu.setAttribute("aria-expanded", "false");
        menu.classList.remove("aberto");
    }

    botaoMenu.addEventListener("click", function () {
        const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
        botaoMenu.setAttribute("aria-expanded", String(!aberto));
        menu.classList.toggle("aberto", !aberto);
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            const submenu = document.querySelector(".menu-projetos");
            if (submenu.open) {
                submenu.open = false;
                submenu.querySelector("summary").focus();
            } else if (botaoMenu.getAttribute("aria-expanded") === "true") {
                fecharMenu();
                botaoMenu.focus();
            }
        }
    });
}
