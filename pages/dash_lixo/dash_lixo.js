// Chama o back4app e trás os dados
const back4app_url = "https://parseapi.back4app.com/classes/lixo2";
const back4app_Aplication_id = "BVcu2NNLh6kTEf0ayqJJmjl07adr1Z3aSgoCJll8";
const back4app_REST_api_key = "bXOZhIlM3ytmnba118KmcTEgBjgCCsyZOo9WJ8yJ";

async function fetchData() {
  try {
    const response = await fetch(back4app_url, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': back4app_Aplication_id,
        'X-Parse-REST-API-Key': back4app_REST_api_key
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
}

// Inicializa as variáveis de contagem


fetchData().then((data) => {
  if (data && data.results) {
    const lixo = data.results[0];

    let IN_LIXO_SERVICO_COLETA = lixo.IN_LIXO_SERVICO_COLETA;
    let IN_LIXO_QUEIMA = lixo.IN_LIXO_QUEIMA;
    let IN_LIXO_ENTERRA = lixo.IN_LIXO_ENTERRA;
    let IN_LIXO_DESTINO_FINAL_PUBLICO = lixo.IN_LIXO_DESTINO_FINAL_PUBLICO;
    let IN_LIXO_DESCARTA_OUTRA_AREA = lixo.IN_LIXO_DESCARTA_OUTRA_AREA;
    


    // Cria o gráfico após obter os dados
    const ctx = document.getElementById('acessibilidade').getContext('2d');

    const meuGrafico = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'SERVICO DE COLETA', 
          'QUEIMA', 
          'ENTERRA',
          'DESTINO FINAL PUBLICO', 
          'DESCARTA OUTRA AREA',
        ],
        datasets: [{
          label: 'Quantidade',
          data: [
            IN_LIXO_SERVICO_COLETA, 
            IN_LIXO_QUEIMA, 
            IN_LIXO_ENTERRA,
            IN_LIXO_DESTINO_FINAL_PUBLICO, 
            IN_LIXO_DESCARTA_OUTRA_AREA, 
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  } else {
    console.error('No results found or data is undefined');
  }
});
