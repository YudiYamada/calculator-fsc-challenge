# 🧮 Desafio FSC - Calculadora

Uma calculadora simples e elegante construída com **React**, **Tailwind CSS** e ícones do **Lucide**. Suporta operações básicas, exponenciação, ponto decimal, backspace e atalhos de teclado.

## Regras do Desafio

Para acessar as regras, clique [AQUI](https://www.notion.so/Calculadora-256e71495ebe80c7afd3fa093d64d80a)

## ✨ Funcionalidades

- Operações matemáticas: `+`, `-`, `*`, `/`, `xʸ` (exponenciação)
- Botões adicionais: `AC` (limpar), `.` (decimal), `⌫` (backspace)
- Suporte a teclado:
  - Números: `0–9`
  - Operações: `+`, `-`, `*`, `/`, `^`
  - Igual: `Enter` ou `=`
  - Limpar: `Escape`
  - Apagar: `Backspace`
  - Decimal: `.`

## 🧠 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/react-calculator.git
cd react-calculator
npm install
npm run dev
```

## 🖼️ Interface

A calculadora é responsiva e apresenta:

- Display com número atual, operação e resultado
- Teclado numérico e de operações
- Ícones interativos com feedback visual

## 🧩 Estrutura do Código

- `Calculator.tsx`: componente principal com lógica e interface
- `useEffect`: escuta eventos de teclado
- `useState`: gerencia números, operações e resultado

## 📌 Observações

- A função `eval()` é usada para avaliar expressões matemáticas. Em produção, recomenda-se substituí-la por uma abordagem mais segura.
- O botão de histórico (`<History />`) está presente visualmente, mas ainda não implementa funcionalidade.

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais. Sinta-se à vontade para modificar e aprimorar!

---

Feito com 💙 por [Yudi](https://www.linkedin.com/in/yudi-yamada-0a10181b9/)
