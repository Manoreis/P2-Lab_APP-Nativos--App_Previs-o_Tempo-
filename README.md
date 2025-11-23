# P2-Lab_APP-Nativos-App_Previsao_Tempo
Aplicativo móvel simples para exibir a previsão do tempo para uma cidade específica, utilizando uma API pública.
**# 🌤️ App de Previsão do Tempo**

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Um aplicativo móvel simples para consulta de previsão do tempo em tempo real

[Demonstração](#-demonstração) • [Funcionalidades](#-funcionalidades) • [Como Usar](#-como-usar) • [Desenvolvimento](#-desenvolvimento)

</div>

## 📱 Demonstração

<p align="center">
  <img src="https://via.placeholder.com/300x600/4F8BF9/FFFFFF?text=Previsão+do+Tempo" alt="Tela do App" width="200"/>
  <img src="https://via.placeholder.com/300x600/34C759/FFFFFF?text=Resultado+Busca" alt="Resultado da Busca" width="200"/>
</p>

## ✨ Funcionalidades

- 🔍 **Busca por cidade** - Consulta climática para qualquer cidade do mundo
- 🌡️ **Temperatura em Celsius** - Exibição da temperatura atual
- 📊 **Detalhes completos** - Umidade, sensação térmica e velocidade do vento
- 🎨 **Interface intuitiva** - Design limpo e responsivo
- ⚡ **Tempo real** - Dados atualizados da API OpenWeatherMap
- 📱 **Multiplataforma** - Funciona em iOS e Android

## 🚀 Como Usar

### Pré-requisitos

- Conta no [Snack Expo](https://snack.expo.dev/)
- Chave de API gratuita do [OpenWeatherMap](https://openweathermap.org/api)

### Configuração Rápida

1. **Obtenha sua API Key**:
   ```bash
   # 1. Acesse https://openweathermap.org/api
   # 2. Crie uma conta gratuita
   # 3. Vá em "API Keys" e copie sua chave
   ```

2. **Configure no Snack Expo**:
   ```javascript
   // No código, substitua:
   const API_KEY = 'SUA_API_KEY_AQUI';
   
   // Por:
   const API_KEY = 'sua_chave_real_aqui';
   ```

3. **Execute o projeto**:
   - Abra o [Snack Expo](https://snack.expo.dev/)
   - Cole o código fornecido
   - Clique em "Run" para testar no dispositivo ou emulador

### Executando Localmente

```bash
# Se quiser executar localmente com Expo:
npx create-expo-app weather-app
cd weather-app
# Substitua o conteúdo de App.js pelo código do projeto
npm start
```

## 🛠️ Desenvolvimento

### Estrutura do Projeto

```javascript
App.js
├── Estados
│   ├── cidade (string)
│   ├── dadosClima (object)
│   ├── carregando (boolean)
│   └── erro (string)
├── Funções
│   ├── buscarPrevisao()
│   └── obterIconeClima()
└── Componentes UI
    ├── TextInput para cidade
    ├── TouchableOpacity para busca
    ├── View para resultados
    └── ActivityIndicator para loading
```

### Tecnologias Utilizadas

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **OpenWeatherMap API** - Dados meteorológicos
- **JavaScript** - Linguagem de programação

### Personalização

Você pode personalizar facilmente:

```javascript
// Para mudar a unidade de temperatura (para Fahrenheit):
`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=imperial&lang=pt_br`

// Para adicionar mais idiomas:
// &lang=es (espanhol), &lang=en (inglês), etc.

// Para customizar ícones:
const icones = {
  '01d': '🔆',    // Sol forte
  '01n': '🌙',    // Lua
  // ... adicione seus próprios emojis
};
```

## 📋 Requisitos da API

A aplicação utiliza a **Current Weather Data API** do OpenWeatherMap:

| Parâmetro | Valor | Descrição |
|-----------|-------|-----------|
| `q` | `{cidade}` | Nome da cidade |
| `appid` | `{API_KEY}` | Chave de autenticação |
| `units` | `metric` | Unidade métrica (Celsius) |
| `lang` | `pt_br` | Idioma português Brasil |

**Limitações da versão gratuita:**
- 1,000 chamadas/dia
- 60 chamadas/minuto
- Dados atualizados a cada 2 horas

## 🐛 Solução de Problemas

### Erros Comuns

1. **"Cidade não encontrada"**
   - Verifique a grafia do nome da cidade
   - Use o formato "Cidade,País" para cidades com nomes duplicados

2. **"Erro ao buscar dados do clima"**
   - Verifique sua conexão com internet
   - Confirme se a API Key está correta
   - Verifique se atingiu o limite de requisições

3. **App não carrega no Snack**
   - Recarregue a página do Snack Expo
   - Verifique se não há erros de sintaxe no código

### Debugging

```javascript
// Adicione este console.log para debug:
console.log('URL da requisição:', url);
console.log('Resposta da API:', data);
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

Desenvolvido por **Marcos Reis** - Estudante de Engenharia de Software

<div align="center">

**⭐️ Se este projeto te ajudou, deixe uma estrela!**

[![Open in Snack](https://img.shields.io/badge/Open%20in-Snack-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://snack.expo.dev/)

</div>

---

*Última atualização: ${new Date().toLocaleDateString('pt-BR')}*
