
# API de Exames

## Fluxo do APP da Meta 5

Importante!!! Todas as chamadas de API, assim como o formato dos retornos, podem ser vistos pela página do swagger, utilizando a URL `http://ip-servidor:porta-servidor/api`. 

### Tela de Login

Na tela de Login, a chamada deve ser feita diretamente para o Keycloak, de modo a obter o Token de usuário que será usado nas chamadas subsequentes da API.

Exemplo de chamada para o Keycloak usando CURL:

    curl -L -X POST 'http://localhost:8080/auth/realms/PF - UnB/protocol/openid-connect/token' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'client_id=clientid-03' \
    --data-urlencode 'grant_type=password' \
    --data-urlencode 'client_secret=ec78c6bb-8339-4bed-9b1b-e973d27107dc' \
    --data-urlencode 'scope=openid' \
    --data-urlencode 'username=emuhamma' \
    --data-urlencode 'password=1'


### Tela de Caso

Nessa tela será inserido o número do caso, para buscar ele no banco de dados basta fazer uma chamada para a API de Exames na URL `GET /caso/{id}`. O retorno será o caso, se ele existir, ou um erro com código 404 caso não exista.


### Tela de Vestígios

Se o caso existir, é possível obter os vestígios (Materiais do Siscrim) presentes, para isso, pode ser feita uma chamada para a API na URL: `GET /caso/{id}/vestigio`, o retorno é um array. Se não exisitirem vestígios, será retornado um array vazio.

### Tela de Exame

Para cada vestígio, será possível criar um exame. Na tela de exames, é possível também fazer upload de arquivos para o servidor, através da rota `POST /repositorio/{codigoRepositorio}/arquivos`, com um formulário do tipo multipart. A tag com o que precisa ser feito upload deverá ter o nome arquivos, o retorno trará as informações de como o arquivo foi cadastrado no banco de dados, ele receberá um nome randômico.

Após o exame finalizado, é necessário criar um exame relativo ao vestígios desse caso em questão, a URL para isso será `POST /caso/{codigoCaso}/exame`. O vestígio deverá ser vinculado ao exame em questão, como no json abaixo:

    {
        codigoTipoExame: "123",
        vestigios: ["codigoVestigio"],
        procedimentos: [],
        dadosTecnicos: {INFORMAÇÕES DO FORMULÁRIO EM FORMATO JSON},
        excluido: false
    }

No campo Dados Técnicos (Formato livre no momento), deverão ser guardadas todas as informações do exame que forem preenchidas, até mesmo as referências aos arquivos.

Para indicar que um vestígio não pode mais ser utilizado para outros exames, ele deverá ser marcado como excluído, através da URL `DELETE /caso/{codigoCaso}/vestigio/{codigoVestigio}`

