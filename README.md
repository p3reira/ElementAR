# ElementAR — Tabela Periódica em Realidade Aumentada

Aponte a câmera do celular para o card de um elemento químico para ver o modelo 3D do elemento e as suas informações.

Atividade da disciplina **Realidade Virtual e Aumentada** · Licenciatura em Computação · UFPR Setor Palotina

**Acesse:** https://p3reira.github.io/ElementAR/

> [!WARNING]
> **Os dados e as descrições dos elementos não foram verificados.** As descrições foram redigidas com auxílio de IA e podem conter erros. Revise o conteúdo antes de usar o projeto com alunos.

## Como usar

1. Imprima os cards do arquivo `cards/cards.pdf`.
2. Abra o link acima no celular e permita o acesso à câmera.
3. Aponte para um card.

## Tecnologias

- [A-Frame](https://aframe.io/) 1.5.0
- [MindAR](https://github.com/hiukim/mind-ar-js) 1.2.5
- HTML, CSS e JavaScript

## Arquivos

```
ElementAR/
├── index.html          # a página
├── css/estilo.css      # visual do painel
├── js/app.js           # lógica da realidade aumentada
├── elementos.js        # dados dos 118 elementos (usado pela página)
├── elementos.json      # os mesmos dados em JSON
├── assets/
│   ├── icons/          # favicons
│   └── models/         # modelos 3D (001_H.glb … 118_Og.glb)
├── cards/
│   └── cards.pdf       # cards para imprimir
└── targets/
    └── targets.mind    # cards compilados para o MindAR
```

## Rodar localmente

A câmera só funciona em `https://` ou `localhost`:

```bash
npx http-server
```

## Créditos

- Dados dos elementos: [Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON)
- Desenvolvido com o auxílio do **Claude** (IA da Anthropic), que ajudou no código, nas descrições dos elementos e no README.