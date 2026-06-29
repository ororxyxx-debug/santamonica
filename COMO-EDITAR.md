# Como trocar de café — guia rápido

Esta página virou um **template**. Para publicar uma nova receita (outro café, outro
produtor, outro método) você edita **um único arquivo**:

> ### 👉 `dados-receita.js`

Não precisa mexer no `index.html`, no `script.js` nem no `styles.css`. A página se monta
sozinha a partir do que está nesse arquivo.

---

## 1. Os arquivos

| Arquivo | O que é | Você edita? |
|---|---|---|
| **`dados-receita.js`** | Todo o conteúdo da receita (textos, números, fotos, passos) | ✅ **Sim — só este** |
| `index.html` | A estrutura da página | ❌ Não |
| `script.js` | O motor que monta a página | ❌ Não |
| `styles.css` | O visual / identidade da marca | ❌ Não |
| `_backup-original/` | Cópia dos arquivos originais, por segurança | — |

---

## 2. Como escrever os textos

Em qualquer campo de texto valem 3 atalhos:

| Você escreve | Aparece na tela |
|---|---|
| `*palavra*` | *palavra* em **itálico terracota** (a assinatura da marca) |
| `**palavra**` | **palavra** em negrito |
| (aperta Enter dentro das aspas) | quebra de linha |

Exemplo:
```js
headline: 'Uma das fazendas\n*mais premiadas do Brasil.*',
```
→ vira duas linhas, a segunda em itálico terracota.

> Dica: para escrever em várias linhas, troque as aspas normais `'...'` por crases
> `` `...` `` — aí você pode apertar Enter de verdade.

---

## 3. Números que se atualizam sozinhos (só nos passos)

Dentro dos **passos do preparo** (`method.steps`), use estes tokens em vez de digitar as
gramas na mão. Eles mudam de valor quando a pessoa mexe no controle de dose:

| Token | Vira |
|---|---|
| `{cafe}` | gramas de café (ex.: 25g) |
| `{bloom}` | gramas da pré-infusão (ex.: 50g) |
| `{main}` | gramas do despejo principal (ex.: 350g) |
| `{total}` | água total (ex.: 400g) |

Nas mensagens de feedback (`closing.feedback`) também dá pra usar `{nomeCafe}` e `{metodo}`.

---

## 4. Trocar de café — passo a passo

Abra `dados-receita.js` e vá descendo pelas seções numeradas (1 a 11):

1. **Identificação** — `coffeeName`, `whatsapp`, título e descrição da aba.
2. **Topo/Menu** — normalmente não muda.
3. **Hero** — `image` (foto de fundo), `titleLines` (o nome grande), `sub`, os 3 números.
4. **O lote** — história, foto da fazenda, dados do produtor e a **ficha técnica** (`specs`).
5. **Sensorial** — os 3 sabores e a jornada de temperatura.
6. **Banda** — a foto e a frase editorial.
7. **A receita** — textos do método e a caixa de dica.
8. **Método** — *a parte mais importante de um método novo* (ver abaixo).
9. **Curador** — quem desenvolveu.
10. **Fechamento** — mensagens de feedback.
11. **Rodapé**.

Salve o arquivo e atualize a página no navegador. Pronto.

### Listas: pode ter mais ou menos itens
Onde houver uma lista (`specs`, `flavors`, `cooling`, `why`, `steps`, `courses`,
`feedback`), é só **adicionar ou apagar itens** — a página se ajusta. Ex.: 4 sabores em
vez de 3, ou 6 passos em vez de 5.

---

## 5. Trocar o MÉTODO (seção 8)

```js
method: {
  name:       'Clever',      // aparece em vários textos
  ratio:      16,            // água = café × ratio  (1:16)
  ideal:      25,            // dose recomendada (g de café)
  min: 18, max: 32,          // limites do controle deslizante
  bloomMult:  2.0,           // pré-infusão = café × isso  (25g → 50g)
  tempDisplay:'90 → 94°C',   // texto do painel de parâmetros
  grind:      'Grossa',
  bloomTemp:  '90°C',        // temperaturas mostradas na grade de água
  mainTemp:   '94°C',

  steps: [ ... ]
}
```

Cada **passo** é assim:
```js
{
  num: '02', title: 'Pré-infusão', badge: '+{bloom}',
  img: 'https://.../foto.gif', alt: 'Pré-infusão',
  time: '0:00 — 0:30 · 90°C',
  start: 0, end: 30,          // segundos no timer
  text: 'Despeje {bloom} de água a **90°C**...'
}
```

- **`start` / `end`** são os segundos em que aquele passo começa e termina no timer.
  O cronômetro avança sozinho com base neles, a barra de progresso enche e a **linha do
  tempo** (aquela barra com as fases) é desenhada a partir desses tempos.
- O **passo de preparo** (antes de ligar o timer) usa `start: 0, end: 0`.
- O timer dura até o `end` do último passo.

> O controle de dose assume o modelo **pré-infusão + despejo**. Se o método novo não tiver
> pré-infusão, é só deixar `bloomMult: 0`.

---

## 6. Ver a página no seu computador

Como o conteúdo vem de um arquivo `.js`, abrir o `index.html` com dois cliques pode não
funcionar em alguns navegadores (bloqueio de segurança). Rode um servidor local simples:

```
python -m http.server 8000
```

e abra **http://localhost:8000** no navegador. (Já existe um atalho configurado em
`.claude/launch.json`.)

---

## 7. Atalhos de teclado (para quem usa)

`Espaço` inicia/pausa o timer · `R` reinicia · `F` modo foco · `M` liga/desliga o som.

---

Qualquer coisa que você não souber onde mexer, o `dados-receita.js` está todo comentado
explicando cada campo. 🙂
