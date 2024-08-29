# Batuque

**Batuque** é um site de demonstração para um projeto que utiliza Vue.js. O projeto apresenta uma série de seções e funcionalidades que destacam a aplicação de tecnologias modernas e práticas de desenvolvimento web.

## 🔨 Funcionalidades do Projeto

- **Cabeçalho Fixo:** Um cabeçalho fixo com um menu de navegação e botões de contato e bug report.
- **Responsividade:** Design responsivo que se adapta a diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis.
- **Interatividade:** Menu de navegação interativo que se adapta ao tamanho da tela e exibe opções de forma adequada em dispositivos menores.

### Exemplo Visual do Projeto
![image](https://github.com/user-attachments/assets/cf248abc-ff0e-4cfe-b0a3-cff3b6cce70c)

## ✔️ Técnicas e Tecnologias Utilizadas

- **Vue.js:** Framework JavaScript para construção da interface.
- **Vite:** Ferramenta de construção para desenvolvimento rápido.
- **Boxicons & Remix Icons:** Ícones para melhorar a UI.
- **Google Fonts:** Fonte personalizada para uma aparência moderna.
- **CSS Custom Properties:** Variáveis CSS para fácil personalização de cores e estilos.

## 📁 Estrutura do Projeto

- **public/**
    - `favicon.ico`: Ícone do site.
    - `img/`
        - `batuqueimg.jpg`: Imagem principal do projeto.
        - `favicon-16x16.png`: Favicon 16x16.
        - `favicon-32x32.png`: Favicon 32x32.
        - `favicon.ico`: Favicon padrão.
        - `homem_tocando.png`: Imagem adicional.
        - `logo.svg`: Logotipo em SVG.
        - `logo_png 180x180.png`: Logotipo PNG 180x180.
        - `logo_png 192x192.png`: Logotipo PNG 192x192.
        - `logo_png 512x512.png`: Logotipo PNG 512x512.
        - `macro-eye-iris.jpg`: Imagem adicional.
        - `opencv_logo.png`: Logotipo OpenCV.
        - `realidade_aumentada.jpg`: Imagem adicional.
        - `site.webmanifest`: Manifesto do site.
        - `visao_computacional.jpg`: Imagem adicional.
- **src/**
    - `App.vue`: Componente principal da aplicação Vue.
    - **assets/**
        - `base.css`: Estilos base do projeto.
        - `logo.svg`: Logotipo em SVG.
        - `main.css`: Estilos principais do projeto.
    - **components/**
        - `About.vue`: Componente sobre.
        - `BugReport.vue`: Componente para reportar bugs.
        - `Contact.vue`: Componente de contato.
        - `Footer.vue`: Componente de rodapé.
        - `Header.vue`: Componente de cabeçalho.
        - `Hero.vue`: Componente de seção principal.
        - **icons/**: Ícones para o projeto.
        - `Resources.vue`: Componente de recursos.
        - `Services.vue`: Componente de serviços.
        - `Test.vue`: Componente de teste.
    - `main.js`: Arquivo principal de inicialização da aplicação Vue.
- **take_folder_code_and_names.py**: Script Python para gerar listagens de diretórios e arquivos.
- **vite.config.js**: Configuração do Vite para o projeto.

## 🛠️ Abrir e Rodar o Projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
    - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:
      ```bash
      node -v
      ```
    - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
    - Copie a URL do repositório e execute o comando abaixo no terminal:
      ```bash
      git clone <URL_DO_REPOSITORIO>
      ```

3. **Instale as Dependências**:
    - Navegue até o diretório do projeto e execute:
      ```bash
      npm install
      ```

4. **Inicie o Servidor de Desenvolvimento**:
    - Para iniciar o projeto localmente, execute:
      ```bash
      npm run dev
      ```
    - O projeto estará disponível em `http://localhost:3000`.

## 🌐 Deploy

O projeto está hospedado no Vercel. Você pode acessá-lo através do seguinte link: [batuque.vercel.app](https://batuque.vercel.app)
    