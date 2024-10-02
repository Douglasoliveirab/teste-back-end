# Teste prático para Back-End 

Este projeto é uma aplicação web full-stack que utiliza Laravel no backend com banco de dados MySQL e React no frontend, seguindo o padrão MVVM.
Ele inclui um comando artisan do laravel customizado para importar produtos de uma API externa  [https://fakestoreapi.com/docs](https://fakestoreapi.com/docs)
diretamente para o banco de dados.


## Tecnologias Utilizadas

- **Docker**: Docker para facilitar a execução dos serviços
- **Backend**: Laravel (PHP)
- **Frontend**: React, utilizando o padrão MVVM e typescript com eslint para manter o padrão de desenvolvimento
- **Banco de Dados**: MySQL
- **Outros serviços**: Redis, PhpMyAdmin

## URLs da Aplicação

- Laravel (Backend): [http://localhost:8989/](http://localhost:8989/)
- React (Frontend): [http://localhost:5173/](http://localhost:5173/)
- PhpMyAdmin: [http://localhost:8081/](http://localhost:8081/)


##### CRUD produtos
- leitura
- Criação
- Atualização
- Exclusão

com a seguinte estrutura:

Campo       | Tipo      | Obrigatório   | Pode se repetir
----------- | :------:  | :------:      | :------:
id          | int       | true          | false
name        | string    | true          | false        
price       | float     | true          | true
decription  | text      | true          | true
category    | string    | true          | true
image_url   | url       | false         | true

Os endpoints de criação e atualização seguem o seguinte formato de payload:

```json
{
    "name": "product name",
    "price": 109.95,
    "description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    "category": "test",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}
```

**Importante:** Tanto os endpoints de criação é atualização, tem uma camada de validação dos campos.


##### Importação de produtos de uma API externa com um comando artisan no bash do container do laravel

o Comando deve ser inserido no terminal do container laravel : `php artisan app:import-product 1`

Utilizando a seguinte API para importar os produtos: [https://fakestoreapi.com/docs](https://fakestoreapi.com/docs)

---

## Requisitos

Para executar a aplicação, é necessário ter Docker e Docker Compose instalados na máquina.
Sempre que realizar mudanças, é necessário parar os containers e recriá-los para refletir as alterações.
Para o frontend, instale as dependências dentro do diretório frontend/ com o comando 

--bash

`npm install`

para o backend 

`composer install`

## Iniciando a Aplicação

Para iniciar todos os serviços, execute o script start.sh na raiz do projeto com o comando lembrando você deve estar na raiz da aplicação fora de frontend e backend
`./start.sh`
Você também pode iniciar os containers manualmente em cada diretório do projeto.

## Configurações Iniciais

Antes de iniciar a aplicação, verifique se o arquivo .env existe no diretório backend/. Se não existir, crie um novo arquivo com as seguintes configurações:


DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=laravel  


##  Inicie a aplicação usando o script start.sh ou manualmente conforme descrito acima.

Verifique se todos os containers estão funcionando corretamente.

Acesse o bash do container do Laravel executando o seguinte comando:

--bash

`docker exec -it backend-app-1 bash`
esse eo nome do container na minha maquina

Substitua <nome_do_container_laravel> pelo nome real do container do Laravel, que pode ser encontrado usando docker ps.


Conecte-se ao banco de dados e crie as tabelas necessárias rodando o comando esse comando também deve ser no container descrito acima:

-- bash

`php artisan migrate`


##### Importação de produtos de uma API externa

Para importar um produto da API externa, siga os passos abaixo:

Acesse o bash do container do Laravel conforme descrito anteriormente.

- bash

`docker exec -it backend-app-1 bash`

Execute o seguinte comando para importar um produto:

- bash

`php artisan app:import-product 1`

O número 1 refere-se ao ID do produto a ser importado mais pode ser qualquer id

ajusta

caso as mudanças feitas ao estalar tente para e rodar novamente os containers 
