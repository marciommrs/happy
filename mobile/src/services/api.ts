import axios from 'axios';

const api = axios.create({  
  baseURL: 'http://192.168.1.85:3334',
});

export default api;

/*
  Dispositivo físico:
  - copiar a porta apresentada no url (http://localhost:19002/) -> CONNECTION (LAN):
    - exemplo: exp://192.168.1.85:19000
    - resultado:
      -> baseURL: 'http://192.168.1.85:3334'

  Simulador do IOS:
  - Basta usar a URL localhost:
  - resultado:
    -> baseURL: 'http://localhost:3334'

  Simulador do Android:
  - Basta usar a URL localhost e executar o seguinte comando no console:
    - adb reverse tcp:333 tcp:333
  - resultado:
    -> baseURL: 'http://localhost:3334'
*/