
# ☀️ Simple Weather App (Previsão do Tempo Simples)

Um aplicativo móvel desenvolvido em React Native (Expo) para exibir a previsão do tempo de qualquer cidade do mundo, utilizando a API pública do OpenWeatherMap.

## ✨ Funcionalidades

* Busca por Cidade:** Campo de entrada simples para buscar a previsão do tempo por nome da cidade.

* Temperatura em Celsius:** Exibe a temperatura atual em graus Celsius.

* Descrição e Ícone:** Mostra uma descrição textual do clima (ex: "Céu Limpo", "Chuva") e um ícone de emoji correspondente.

* Informações Detalhadas:** Apresenta dados de temperatura mínima, máxima, umidade e velocidade do vento.

* Design Responsivo:** Interface otimizada para diferentes tamanhos de tela mobile.

* Tratamento de Erros:** Exibe mensagens claras para erros de API (cidade não encontrada) ou de conexão.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando o ecossistema React Native através do Expo, garantindo que ele seja fácil de rodar em qualquer dispositivo móvel.

* **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.

* **Expo:** Conjunto de ferramentas e serviços para desenvolvimento de aplicativos React Native.

* **OpenWeatherMap API:** API pública para obtenção de dados de clima em tempo real.

* JavaScript (ES6+):** Linguagem de programação principal.

## 🛠️ Pré-requisitos

Antes de começar, você precisará ter o Node.js e o npm/yarn instalados.

1. **Node.js e npm/yarn:**

   ```bash
   # Verifique sua versão
   node -v
   npm -v
   ````

2.  **Expo CLI: Instale a ferramenta de linha de comando do Expo globalmente.

    ```bash
    npm install -g expo-cli
    # OU
    yarn global add expo-cli
    ```

3.  **Chave da API OpenWeatherMap:** Você precisa de uma chave gratuita.

## 🔑 Configuração da API

A chave da API do OpenWeatherMap já está configurada diretamente no arquivo `App.jsx` do projeto para facilitar a execução.

A constante utilizada é:

```javascript
const OPENWEATHER_API_KEY = 'ab49b51c21c5d1202451a9da07483d10';
```

Se você precisar utilizar sua própria chave no futuro, basta alterar o valor desta constante no arquivo `App.jsx`.

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para baixar e executar o aplicativo no seu dispositivo ou emulador.

### 1\. Clonar o Repositório

```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd simple-weather-app
```

### 2\. Instalar Dependências

Este projeto é um *single-file* (único arquivo) no ambiente do Expo Snack e geralmente não requer instalação de pacotes adicionais, mas se você estiver rodando localmente com o Expo CLI:

```bash
npm install
# OU
yarn install
```

### 3\. Executar o Aplicativo

Inicie o servidor de desenvolvimento do Expo:

```bash
expo start
```

Após executar o comando, o Expo abrirá uma nova aba no seu navegador e exibirá um QR Code no terminal.

  * **Para rodar no seu celular:** Baixe o aplicativo **Expo Go** (iOS ou Android) e escaneie o QR Code.

  * **Para rodar em um emulador/simulador:** Use as opções fornecidas no terminal (ex: `a` para Android, `i` para iOS).

## 🗂️ Estrutura do Projeto

O aplicativo é contido em um único arquivo, mantendo a simplicidade para projetos pequenos.

```
.
├── App.jsx  // Componente principal React Native com toda a lógica e UI
└── README.md // Este arquivo
```

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.

```

Agora é só copiar e colar esse texto no seu arquivo `README.md` no GitHub para ter toda a formatação correta!
```
