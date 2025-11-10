# Fundamentos-de-Sistemas-Web

Site de um Pet Shop desenvolvido com HTML puro, focado em fundamentos de sistemas web.

## 📋 Descrição do Projeto

Este projeto consiste em um site institucional e de e-commerce para um pet shop, apresentando produtos e serviços para animais de estimação. O site foi desenvolvido utilizando apenas HTML semântico, sem CSS ou JavaScript, priorizando a estrutura e acessibilidade.

## 🎯 Funcionalidades

### Página Principal (`index.html`)
- Página inicial com boas-vindas
- Menu de navegação com links para todas as seções do site
- Footer com informações de copyright

### Categorias de Produtos

O site apresenta **3 categorias de produtos**, cada uma com sua própria página:

#### 1. Rações e Alimentação (`/categorias/racoes-alimentacao/`)
**Produtos em destaque:**
- **Ração Premium para Cães Adultos** - R$ 150,00
  - Ração seca de alta qualidade para cães adultos de todos os portes
  - Fórmula balanceada com vitaminas e minerais essenciais
  - Embalagem de 10kg

- **Ração Hipoalergênica para Gatos** - R$ 95,00
  - Ração especial para gatos com sensibilidade alimentar
  - Ingredientes selecionados que não causam alergias
  - Embalagem de 3kg

#### 2. Acessórios e Brinquedos (`/categorias/acessorios-brinquedos/`)
**Produtos em destaque:**
- **Kit Coleira e Guia Resistente** - R$ 45,00
  - Conjunto de coleira ajustável e guia de 1,5m em nylon resistente
  - Ideal para passeios seguros
  - Disponível em várias cores, Tamanho M

- **Cama Ortopédica para Cães** - R$ 180,00
  - Cama confortável com espuma ortopédica de alta densidade
  - Perfeita para cães idosos ou com problemas articulares
  - Capa removível e lavável, Tamanho G

#### 3. Higiene e Cuidados (`/categorias/higiene-cuidados/`)
**Produtos em destaque:**
- **Kit Xampu e Condicionador para Peles Sensíveis** - R$ 65,00
  - Conjunto completo para banho de pets com pele sensível
  - Fórmula hipoalergênica e pH balanceado
  - Fragrância suave, Frascos de 500ml cada

- **Antipulgas e Carrapatos** - R$ 85,00
  - Proteção eficaz contra pulgas e carrapatos por até 3 meses
  - Aplicação tópica fácil e segura
  - Para cães de 10 a 25kg, Embalagem com 3 pipetas

### Serviços (`/servicos/`)

O pet shop oferece serviços de banho e tosa:

- **Banho e Tosa** - R$ 80,00
  - Banho completo com shampoo adequado à pelagem do seu pet
  - Secagem, escovação e tosa higiênica ou completa conforme solicitado

- **Banho e Tosa com Tele-busca** - R$ 120,00
  - Banho completo com shampoo adequado, secagem, escovação e tosa
  - Incluindo busca e entrega do seu pet em domicílio

**Agendamento:** Disponível por telefone ou formulário de contato. Horário de atendimento: 9h–18h.

## 📁 Estrutura do Projeto

```
.
├── index.html                           # Página principal
├── README.md                            # Documentação do projeto
├── categorias/
│   ├── racoes-alimentacao/
│   │   ├── index.html                   # Página da categoria
│   │   └── imagens/                     # Imagens dos produtos
│   │       └── README.md
│   ├── acessorios-brinquedos/
│   │   ├── index.html
│   │   └── imagens/
│   │       └── README.md
│   └── higiene-cuidados/
│       ├── index.html
│       └── imagens/
│           └── README.md
└── servicos/
    └── index.html                       # Página de serviços
```

## 🚀 Como Executar

### Método 1: Servidor HTTP Python (Recomendado)

```bash
# Na raiz do projeto
python3 -m http.server 8000
```

Acesse no navegador: `http://localhost:8000/`

### Método 2: Abrir diretamente no navegador

Abra o arquivo `index.html` diretamente no navegador (duplo clique ou arrastar para o navegador).

**Nota:** Algumas funcionalidades podem não funcionar corretamente sem um servidor HTTP.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica das páginas
- **Markdown** - Documentação

## 📝 Características Técnicas

- ✅ HTML semântico com tags apropriadas (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- ✅ Navegação relativa entre páginas
- ✅ Estrutura de pastas organizada por categoria
- ✅ Preparado para adicionar imagens (pastas `imagens/` criadas)
- ✅ Uso de `index.html` em diretórios para URLs limpas
- ✅ Meta tags viewport para responsividade futura

## 📷 Imagens

As imagens dos produtos devem ser adicionadas nas respectivas pastas `imagens/` de cada categoria:

- `categorias/racoes-alimentacao/imagens/`
  - `racao-premium-caes.jpg`
  - `racao-hipoalergenica-gatos.jpg`

- `categorias/acessorios-brinquedos/imagens/`
  - `coleira-guia.jpg`
  - `cama-ortopedica.jpg`

- `categorias/higiene-cuidados/imagens/`
  - `xampu-condicionador.jpg`
  - `antipulgas.jpg`

**Formato recomendado:** JPG ou PNG, tamanho sugerido: 300x200px

## 🔗 Navegação

Todas as páginas possuem um menu de navegação consistente com links para:
- Home
- Rações e Alimentação
- Acessórios e Brinquedos
- Higiene e Cuidados
- Serviços

## 📄 Licença

Projeto educacional - Fundamentos de Sistemas Web

---

**Desenvolvido em:** Novembro de 2025
