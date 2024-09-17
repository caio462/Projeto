# Projeto Emily Costa Advogada Criminalista - Website

Este é o website oficial da Dra. Emily Costa, uma advogada criminalista com atuação em diversas áreas do direito penal. O site foi desenvolvido com foco em apresentar suas especialidades, serviços e diferenciais, além de oferecer uma maneira fácil e acessível para que os clientes possam entrar em contato.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica do site.
- **CSS3**: Para estilização e design responsivo.
- **Google Fonts**: Usado para as fontes personalizadas do site.
- **JavaScript**: Interatividade nas perguntas frequentes e outros elementos dinâmicos.
- **Material Symbols**: Ícones personalizados para destacar informações importantes.

## Estrutura do Projeto

### 1. **Home**
   - Apresenta a Dra. Emily Costa e suas áreas de atuação.
   - O layout usa uma divisão em colunas: imagem à esquerda e texto à direita, utilizando `flexbox` para responsividade.

### 2. **Áreas de Atuação**
   - Lista das especialidades da advogada com descrições breves.
   - Cada especialidade é destacada com ícones para uma visualização rápida e atraente.

### 3. **Perguntas Frequentes (FAQ)**
   - Implementação interativa usando JavaScript para expandir ou recolher respostas ao clicar na pergunta.
   - O layout responsivo garante uma boa visualização tanto em dispositivos móveis quanto em desktops.

### 4. **Sobre**
   - Descrição detalhada sobre a Dra. Emily Costa.
   - A imagem ocupa 75% da seção e o texto está alinhado à esquerda, com espaçamento ajustado para facilitar a leitura.

### 5. **Contato**
   - Formulário de contato com campos para nome, e-mail e mensagem.
   - Inclui um botão para entrar em contato via WhatsApp, posicionado ao lado do formulário com espaçamento de 25px.

## Estilização (CSS)

### 1. **Responsividade**
   - O site foi desenvolvido com foco na responsividade, garantindo boa usabilidade em telas de 320px a 992px de largura.
   - Utilizamos flexbox para organizar o layout de forma fluida em diferentes dispositivos.

### 2. **Fonte**
   - A fonte principal do site é "Quicksand", importada do Google Fonts. Essa escolha visa dar um aspecto moderno e clean ao site.

### 3. **Layout Geral**
   - **`flexbox`** é amplamente utilizado para organizar a página de forma eficiente, com foco em centralização e espaçamento dinâmico.
   - Elementos como `.contato`, `.emily`, `.main-content`, `.sessao-checklist`, e `.sobre` foram estilizados para manter consistência e clareza visual.

### 4. **Animações**
   - As perguntas frequentes utilizam animações para abrir e fechar as respostas. Foi implementada uma animação suave com `@keyframes fade` para melhorar a experiência do usuário.
   - A transição foi definida para tornar as interações com o FAQ mais naturais e intuitivas.

### 5. **Cores e Ícones**
   - As cores do site são sóbrias e profissionais, refletindo a natureza do trabalho da Dra. Emily Costa.
   - Ícones do Material Symbols foram usados para destacar visualmente as informações importantes, como formas de contato e áreas de atuação.

## JavaScript

### 1. **FAQ Interativo**
   - O FAQ foi desenvolvido com JavaScript simples para permitir a interação através do clique, expandindo ou recolhendo as respostas de cada pergunta.
   - A animação foi aplicada com transições CSS para criar uma experiência mais fluida.

### 2. **Acessibilidade**
   - O site foi projetado com boas práticas de acessibilidade, usando tags semânticas, boa hierarquia de títulos e elementos interativos acessíveis por teclado.

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

