import React, { useState, useCallback } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator, 
  ScrollView, 
  Platform 
} from 'react-native';

// Tivemos uns problemas de resolução de módulo antes, então os imports estão assim pra garantir.

// --- CONFIGURAÇÃO DA API ---
// Minha key do OpenWeather. 
// OBS: Num app real, jogue isso num arquivo .env pra não vazar no repo!
const OPENWEATHER_API_KEY = 'ab49b51c21c5d1202451a9da07483d10';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

/*
 * Helper pra transformar o ID do clima num Emoji.
 * É uma solução mais leve e rápida do que importar uma lib inteira de ícones só pra isso.
 */
const getWeatherIcon = (id) => {
  if (id >= 200 && id < 300) {
    return { icon: '⛈️', description: 'Tempestade' };
  } else if (id >= 300 && id < 500) {
    return { icon: '🌧️', description: 'Chuvisco' };
  } else if (id >= 500 && id < 600) {
    return { icon: '☔', description: 'Chuva' };
  } else if (id >= 600 && id < 700) {
    return { icon: '❄️', description: 'Neve' };
  } else if (id >= 700 && id < 800) {
    return { icon: '🌫️', description: 'Névoa/Neblina' };
  } else if (id === 800) {
    return { icon: '☀️', description: 'Céu Limpo' };
  } else if (id > 800 && id < 900) {
    return { icon: '☁️', description: 'Nuvens' };
  }
  return { icon: '❓', description: 'Desconhecido' };
};


const App = () => {
  // Controle de estados da tela
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // A mágica acontece aqui: bate na API e traz os dados
  const fetchWeather = useCallback(async () => {
    // Reseta a tela antes de começar
    setWeatherData(null);
    setError(null);

    // Validação básica pra não gastar requisição à toa
    if (city.trim() === '') {
      setError('Por favor, digite o nome de uma cidade.');
      return;
    }

    setLoading(true);

    try {
      // Monta a URL. Units=metric pra vir em Celsius e lang=pt pra tradução nativa
      const url = `${BASE_URL}?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=pt`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        // Se a API reclamar (tipo cidade inexistente 404), a gente avisa o user de forma bonita
        const errorMessage = data.message.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        setError(`Erro na busca: ${errorMessage || 'Cidade não encontrada.'}`);
        setWeatherData(null);
      } else {
        // Deu bom, salva os dados
        setWeatherData(data);
      }
    } catch (e) {
      // Se cair a internet ou o servidor explodir
      console.error('Erro ao buscar a API:', e);
      setError('Não foi possível conectar ao servidor de clima. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  }, [city]); 

  // Lógica de renderização pra não poluir o return principal
  const renderWeatherResult = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#4A90E2" />;
    }

    if (error) {
      return <Text style={styles.errorText}>{error}</Text>;
    }

    // Tela inicial (placeholder) quando não tem busca feita
    if (!weatherData) {
      return (
        <View style={styles.placeholderContainer}>
           <Text style={styles.placeholderIcon}>🔍</Text>
           <Text style={styles.placeholderText}>Digite uma cidade e toque em buscar.</Text>
        </View>
      );
    }

    // Formatações visuais
    const mainTemp = Math.round(weatherData.main.temp); // Tira as casas decimais
    const weatherId = weatherData.weather[0].id;
    
    // Deixa a primeira letra maiúscula (Capitalize) pra ficar mais apresentável
    const apiDescription = weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1);
    
    const { icon } = getWeatherIcon(weatherId);

    return (
      <View style={styles.resultCard}>
        <Text style={styles.cityName}>{weatherData.name}</Text>
        <Text style={styles.countryName}>{weatherData.sys.country}</Text>

        <Text style={styles.weatherIcon}>{icon}</Text>

        <Text style={styles.temperature}>{mainTemp}°C</Text>
        
        <Text style={styles.description}>{apiDescription}</Text>
        {/* Dados extras pra encher linguiça (brincadeira, são úteis) */}
        <Text style={styles.detailsText}>Min: {Math.round(weatherData.main.temp_min)}°C | Máx: {Math.round(weatherData.main.temp_max)}°C</Text>
        <Text style={styles.detailsText}>Umidade: {weatherData.main.humidity}%</Text>
        <Text style={styles.detailsText}>Vento: {Math.round(weatherData.wind.speed * 3.6)} km/h</Text>
      </View>
    );
  };

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      // Importante pro teclado baixar se o user tocar fora no iOS
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Previsão do Tempo ☀️</Text>
      <Text style={styles.subtitle}>Consulte o clima em qualquer cidade do mundo.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da Cidade (Ex: Rio de Janeiro)"
        placeholderTextColor="#888"
        value={city}
        onChangeText={setCity}
        onSubmitEditing={fetchWeather} // User deu enter no teclado
        autoCapitalize="words"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={fetchWeather}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Buscando...' : 'Buscar Clima'}
        </Text>
      </TouchableOpacity>

      <View style={styles.resultArea}>
        {renderWeatherResult()}
      </View>
    </ScrollView>
  );
};

// CSS-in-JS padrão do React Native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  contentContainer: {
    // Padding fixo pra evitar aquele bug chato do expo-constants
    paddingTop: 50, 
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    backgroundColor: '#FFF',
    fontSize: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    width: '100%',
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  resultArea: {
    width: '100%',
    alignItems: 'center',
    minHeight: 250,
  },
  resultCard: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 8,
  },
  cityName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
  },
  countryName: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  weatherIcon: {
    fontSize: 80,
    marginVertical: 10,
  },
  temperature: {
    fontSize: 64,
    fontWeight: '300',
    color: '#4A90E2',
  },
  description: {
    fontSize: 22,
    fontWeight: '500',
    color: '#555',
    marginTop: 5,
  },
  detailsText: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  errorText: {
    color: '#D9534F',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#F2DEDE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9534F',
  },
  placeholderContainer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
  },
  placeholderIcon: {
    fontSize: 40,
    color: '#C4C4C4',
    marginBottom: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  }
});

export default App;