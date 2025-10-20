
import videosJson from "../data/videos.json";

const videos: Video[] = videosJson;
export interface Video {
  titulo: string;
  canal: string;
  canalVerificado: boolean;
  duracaoSeg: number;
  views: number;
  like: number; 
  dislike: number;
  categoria: string;
  tags: string[];
  descricao: string;
  url: string;
}

const videos: Video[] = videosJson as Video[];

// 


// ### Exercício – map
// Você recebeu um array de vídeos e precisa exibir apenas as informações principais de cada um, de forma amigável.
// Voce deve usar o método map para transformar o array original em um novo array de strings no formato:
// ````
// "título do vídeo: "aula da jess",
//  autor: "minas programam"
//  visualizações: 1000000000000000 
//  duração (min): 30"
// ````
// Dica: 
// - A duração está em segundos (duracaoSeg), então divida por 60 pra transformar em minutos.
// - Depois exiba no console o resultado do map.

// interface videosPrincipais {
//   titulo: string;
//   views: number;
//   like: number;
//   descricao: string;
// }

// const principaisVideos: videosPrincipais[] = videosJson.map(videos => {
//   return {
//     titulo: videos.titulo,
//     views: videos.views,
//     like: videos.like,
//     descricao: videos.descricao,
//   };
// });

// console.log(principaisVideos)

// ### Exercício – filter

// Agora que você já consegue exibir os vídeos, o time quer aplicar alguns filtros.

// - Parte A
// Liste apenas os vídeos que estão bombando (ou seja, com mais de 2000 visualizações).

const videosBombados: Video[] = videosJson.filter((video) => video.views > 2000);

console.log(videosBombados)

// - Parte B
// Liste os vídeos com mais dislikes (aqueles que receberam mais reações negativas).


// Voce deve usar o filter para criar um novo array com vídeos que tenham `views > 2000`.

// Voce deve usar outro filter para mostrar os vídeos com o maior número de dislikes.

// Dica:
// - Use for ou reduce para encontrar o vídeo com maior número de dislike e depois use no filter para fazer a comparaçao.

// ### Exercício – reduce

// Agora é hora de somar e tirar conclusões sobre os dados!

// - Parte A
// Calcule o total de views somando o campo views de todos os vídeos.

const totalViews = videosJson.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.views;
}, 0);

console.log(totalViews)

// 7310500 - views

// - Parte B
// Calcule o total de views de um canal específico (por exemplo, "DevGirls BR").

const videosDevGirls: Video[] = videosJson.filter((videos) => videos.canal === "DevGirls BR")


const totalViewsDevGirls = videosDevGirls.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.views;
}, 0);

console.log(totalViewsDevGirls)

// 80000 - views

// Voce deve usar o reduce para somar todos os valores de views.
// Depois, use um if/else dentro do reduce pra somar apenas os vídeos do canal escolhido.

console.log(videosJson);

// ### Exercício – filter e map
// Você recebeu um array de vídeos e precisa exibir apenas os nomes dos canais que possuem mais de 100.000 visualizações.
// Voce deve usar o método filter para filtrar os vídeos com mais de 100.000 visualizações e depois usar o map para criar um novo array apenas com os nomes dos canais desses vídeos.
// Depois exiba no console o resultado do filter e do map.

const canaisPopulares = videos
  .filter((v) => v.views > 100000)
  .map((v) => v.canal);

console.log(canaisPopulares);

// ### Exercício – map
// precisa exibir apenas os nomes dos canais de todos os vídeos.

const nomesDeCanais = videos.map((video)=> video.canal);
console.log(nomesDeCanais);

// ### Exercício – map
// Você recebeu um array de vídeos e precisa exibir apenas as informações principais de cada um, de forma amigável.
// Voce deve usar o método map para transformar o array original em um novo array de strings no formato:
// ````
// "título do vídeo: "aula da jess",
//  autor: "minas programam"
//  visualizações: 1000000000000000 
//  duração (min): 30"
// ````
// Dica: 
// - A duração está em segundos (duracaoSeg), então divida por 60 pra transformar em minutos.
// - Depois exiba no console o resultado do map.

const mensagens = videos.map((video) => {
    const minutos = Math.floor(video.duracaoSeg / 60);
    return `título do vídeo: ${video.titulo},
    autor: ${video.canal}
    visualizações: ${video.views}
    duração (min): ${minutos}`;
});
console.log(mensagens);
// ### Exercício – filter

// Agora que você já consegue exibir os vídeos, o time quer aplicar alguns filtros.

// - Parte A
// Liste apenas os vídeos que estão bombando (ou seja, com mais de 2000 visualizações).

const videosBombando = videos.filter((video) => video.views > 2000);
console.log(videosBombando);

// - Parte B
// Liste os vídeos com mais dislikes (aqueles que receberam mais reações negativas).
// Voce deve usar o filter para criar um novo array com vídeos que tenham `views > 2000`.

// Voce deve usar outro filter para mostrar os vídeos com o maior número de dislikes.

// Dica:
// - Use for ou reduce para encontrar o vídeo com maior número de dislike e depois use no filter para fazer a comparaçao.

const maxDislikes = videos.reduce((max, video) => {
    return video.dislike > max ? video.dislike : max;
}, 0);

const videosComMaisDislikes = videos.filter((video) => video.dislike === maxDislikes);
console.log(videosComMaisDislikes);

// ### Exercício – reduce

// - Parte A
// Calcule o total de views somando o campo views de todos os vídeos.

const totalViews = videos.reduce((total, video) => total + video.views, 0);
console.log(totalViews);

// - Parte B
// Calcule o total de views de um canal específico (por exemplo, "DevGirls BR").

// Voce deve usar o reduce para somar todos os valores de views.
// Depois, use um if/else dentro do reduce pra somar apenas os vídeos do canal escolhido.

const canalEspecifico = "Gato Feliz";
const totalViewsCanal = videos.reduce((total, video) => {
    if (video.canal === canalEspecifico) {
        return total + video.views;
    }
    return total;
}, 0);
console.log(totalViewsCanal);