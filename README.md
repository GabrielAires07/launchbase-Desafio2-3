<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 2-3: Página de cursos e iframe
</h3>




## :rocket: Sobre o desafio

Essa página deve conter um grid onde devem ser mostrados os 3 principais cursos da Rocketseat: Starter, Launchbase e GoStack. Ao clicar em um dos cursos, deve ser aberta uma modal onde um iframe irá carregar as informações do curso selecionado.


## Informações do card

- Logo do curso ([Starter](https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg), [Launchbase](https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg) e [GoStack](https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg))
- Título do curso
- Quantidade de módulos dos cursos
- Informação se o curso é gratuito ou pago

## Modal

O modal deve conter um iframe que busca a página do curso (dica: basta adicionar `starter`, `launchbase` ou `gostack` ao final de `https://rocketseat.com.br/`). Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal (dica: utilize a mesma lógica implementada para fechar o `modalOverlay`, mas trabalhe com a classe `modal` e utilize o método `contains` do `classList` para verificar se o elemento está ou não com a classe `maximize`).



