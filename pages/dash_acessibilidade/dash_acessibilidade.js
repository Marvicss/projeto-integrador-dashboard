// Chama o back4app e trás os dados
const back4app_url = "https://parseapi.back4app.com/classes/acessibilidade2";
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
    const acessibilidade = data.results[0];
    console.log("Acessibilidade", acessibilidade)

    let IN_ACESSIBILIDADE_ELEVADOR = acessibilidade.IN_ACESSIBILIDADE_ELEVADOR;
    let IN_ACESSIBILIDADE_PISOS_TATEIS = acessibilidade.IN_ACESSIBILIDADE_PISOS_TATEIS;
    let IN_ACESSIBILIDADE_VAO_LIVRE = acessibilidade.IN_ACESSIBILIDADE_VAO_LIVRE;
    let IN_ACESSIBILIDADE_RAMPAS = acessibilidade.IN_ACESSIBILIDADE_RAMPAS;
    let IN_ACESSIBILIDADE_SINAL_SONORO = acessibilidade.IN_ACESSIBILIDADE_SINAL_SONORO;
    let IN_ACESSIBILIDADE_SINAL_TATIL = acessibilidade.IN_ACESSIBILIDADE_SINAL_TATIL;
    let IN_ACESSIBILIDADE_SINAL_VISUAL = acessibilidade.IN_ACESSIBILIDADE_SINAL_VISUAL;
    let IN_ACESSIBILIDADE_CORRIMAO = acessibilidade.IN_ACESSIBILIDADE_CORRIMAO;

    // Log dos resultados após a contagem

    console.log(IN_ACESSIBILIDADE_ELEVADOR);
    console.log(IN_ACESSIBILIDADE_PISOS_TATEIS);
    console.log(IN_ACESSIBILIDADE_VAO_LIVRE);
    console.log(IN_ACESSIBILIDADE_RAMPAS);
    console.log(IN_ACESSIBILIDADE_SINAL_SONORO);
    console.log(IN_ACESSIBILIDADE_SINAL_TATIL);
    console.log(IN_ACESSIBILIDADE_SINAL_VISUAL);
    console.log(IN_ACESSIBILIDADE_CORRIMAO);

    // Cria o gráfico após obter os dados
    const ctx = document.getElementById('acessibilidade').getContext('2d');

    const meuGrafico = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'ELEVADOR', 
          'PISOS TATEIS', 
          'VAO LIVRE',
          'RAMPAS', 
          'SINAL SONORO', 
          'SINAL TATIL',
          'SINAL VISUAL', 
          'CORRIMAO'
        ],
        datasets: [{
          label: 'Quantidade',
          data: [
            IN_ACESSIBILIDADE_ELEVADOR, 
            IN_ACESSIBILIDADE_PISOS_TATEIS, 
            IN_ACESSIBILIDADE_VAO_LIVRE,
            IN_ACESSIBILIDADE_RAMPAS, 
            IN_ACESSIBILIDADE_SINAL_SONORO, 
            IN_ACESSIBILIDADE_SINAL_TATIL,
            IN_ACESSIBILIDADE_SINAL_VISUAL, 
            IN_ACESSIBILIDADE_CORRIMAO
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
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
