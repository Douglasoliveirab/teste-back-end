Projeto Testes Vagas
Este projeto é uma aplicação web full-stack que utiliza Laravel no backend com banco de dados MySQL e React no frontend, seguindo o padrão MVVM. Ele inclui um comando customizado para importar produtos de uma API externa diretamente para o banco de dados.

Docker
Tecnologias Utilizadas
Backend: Laravel (PHP) com MySQL
Frontend: React, utilizando o padrão MVVM
Containers: Docker para facilitar a execução dos serviços
Banco de Dados: MySQL
Outros serviços: Redis, Mailpit, PhpMyAdmin

URLs da Aplicação
Laravel (Backend): http://localhost:8989/
React (Frontend): http://localhost:5173/
PhpMyAdmin: http://localhost:8081/

Requisitos
Para executar a aplicação, é necessário ter Docker e Docker Compose instalados na máquina.
e necessario sempre que realizar mudanças  parar os container e recrialos para atualizar os mesmos para refletir as mudanças

Observações
Você não precisa instalar PHP, Composer, ou Node.js globalmente, pois o Docker gerencia essas dependências dentro dos containers.
Para o frontend, é necessário instalar as dependências dentro do diretório frontend/ para garantir que o node_modules seja gerado corretamente.

Iniciando a Aplicação
Para facilitar o processo de inicialização da aplicação,
 existe um script chamado start.sh na raiz do projeto. Basta executá-lo no terminal para iniciar todos os serviços.



Caso prefira, você pode iniciar os containers manualmente em cada diretório do projeto.

Configurações Iniciais
Antes de iniciar a aplicação, verifique se o arquivo .env existe no diretório backend/. Se não existir, crie um novo arquivo com as seguintes configurações:

env
Copiar código
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:X8aC+ScUBO8QrMEF/xzhxa9q1K1leO82OBtLu/nMoWk=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=laravel

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"


Inicie a aplicação usando o script start.sh ou manualmente conforme descrito acima.

Verifique se todos os containers estão funcionando corretamente.

Acesse o bash do container do Laravel executando o seguinte comando:

bash

docker exec -it <nome_do_container_laravel> bash

Substitua <nome_do_container_laravel> pelo nome real do container do Laravel, que pode ser encontrado usando docker ps.

Conecte-se ao banco de dados e crie as tabelas necessárias rodando o comando:

bash

php artisan migrate


Importando Produtos
Para importar um produto da API externa, siga os passos abaixo:

Acesse o bash do container do Laravel conforme descrito anteriormente.

Execute o seguinte comando para importar um produto:

bash

php artisan app:import-product 1

O número 1 refere-se ao ID do produto a ser importado mais pode ser qualquer numero inteiro.