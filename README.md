
- Crie um novo diretório para o seu projeto e navegue até ele no terminal.

~~~javascript

mkdir consumo-api-js
cd consumo-api-js

~~~

- Inicie um novo projeto Node.js. Execute o seguinte comando e siga as instruções.


~~~javascript

npm init -y

~~~

##### O comando npm init é usado para inicializar um novo projeto Node.js. Ele cria um arquivo chamado package.json que armazena metadados sobre o seu projeto, como nome, versão, dependências, scripts de execução e outras informações relevantes.

Quando você executa npm init, o npm faz algumas perguntas interativas para coletar informações sobre o seu projeto, como nome, versão, descrição, ponto de entrada do aplicativo, testes a serem executados e assim por diante. Você pode simplesmente pressionar Enter para aceitar as configurações padrão ou fornecer suas próprias respostas.

O package.json é fundamental para o gerenciamento de dependências e scripts em um projeto Node.js. Ele lista as dependências que o seu projeto precisa para funcionar corretamente, bem como scripts que podem ser executados usando o npm, como iniciar o aplicativo, rodar testes, entre outros.


Após a execução do npm init, você pode instalar pacotes de terceiros usando `npm install nome-do-pacote`, e essas dependências serão automaticamente adicionadas ao seu package.json.

Em resumo, npm init é o primeiro passo ao criar um novo projeto Node.js, ajudando a configurar e organizar as informações essenciais do seu aplicativo.

Extra:
https://gabrieluizramos.com.br/entendendo-o-package-json


### Instale a biblioteca axios para facilitar as chamadas à API.

~~~javascript

npm install axios

~~~

### Outras libs: 

Você pode escolher outras bibliotecas para fazer requisições HTTP em JavaScript. Uma alternativa popular é o fetch, que está embutido na maioria dos navegadores modernos. Aqui está um exemplo de como você pode ajustar o código usando fetch:

~~~javascript

npm install node-fetch

~~~




#### Como usar axios:

 https://www.npmjs.com/package/axios


#### Como usar fetch:

https://www.npmjs.com/package/node-fetch


#### O tal do async e await 

Tanto o `fetch` quanto o `axios` são bibliotecas que lidam com operações assíncronas, como fazer requisições HTTP, que podem levar algum tempo para serem concluídas. O uso de async e await torna o código mais legível e fácil de entender ao lidar com operações assíncronas.
Usando o fetch e 

async e await são características introduzidas no JavaScript para facilitar o trabalho com operações assíncronas e tornar o código mais legível e fácil de entender.

async:
async é usado para declarar que uma função retorna uma Promise.
Ele permite que a função seja assíncrona e use a palavra-chave await dentro dela.
Funções assíncronas retornam automaticamente uma Promise que será resolvida com o valor retornado pela função ou rejeitada com um erro lançado dentro da função.

O fetch é uma API nativa do navegador para fazer requisições HTTP. Aqui está um exemplo de como usá-lo com async e await:
~~~javascript

async function obterDadosDaAPI() {
  try {
    const resposta = await fetch('https://api.exemplo.com/dados');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error('Erro ao obter dados da API:', erro);
  }
}

obterDadosDaAPI();


~~~

~~~javascript
const axios = require('axios');

async function obterDadosDaAPI() {
  try {
    const resposta = await axios.get('https://api.exemplo.com/dados');
    console.log(resposta.data);
  } catch (erro) {
    console.error('Erro ao obter dados da API:', erro);
  }
}

obterDadosDaAPI();



~~~

Essas bibliotecas precisam esperar que a requisição HTTP seja concluída antes de continuar com o processamento do código. O uso de async e await permite que você escreva código assíncrono de uma maneira mais síncrona, evitando o aninhamento excessivo de callbacks e tornando a leitura do código mais natural.



#### O que preciso fazer?

-  Vamos criar um aplicativo que obtém informações de usuários do serviço JSONPlaceholder, uma API de teste para simular operações CRUD em uma API REST. https://jsonplaceholder.typicode.com/

- Você precisa criar uma função para exibir usuários no console => ` console.log('Usuários:')`
 
