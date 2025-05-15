# PatoBus

## Sistema de rastreamento de ônibus

Este projeto foi desenvolvido pelos alunos Marcos Ribeiro e Maria Rita Gomes para compor a nota da disciplina de Seminário de Projeto Integrador II do curso superior em Tecnologia de Sistemas para Internet.

## Descrição do sistema

### Objetivo Geral
Desenvolver um sistema mobile de rastreamento de ônibus que permita aos usuários acompanhar, em tempo real, a localização dos veículos, promovendo maior previsibilidade e eficiência no uso do transporte público. Também deverá ser desenvolvido um sistema para windows para que o provedor do transporte público possa gerenciar os dados e informações sobre os transportes.

### Objetivos Específicos
1. Estimar o tempo de chegada dos ônibus a pontos de parada selecionados, com base em dados de localização e trajeto.
2. Sugerir, sempre que possível, alternativas de linhas de ônibus que atendam à mesma parada, ampliando as opções de deslocamento para o usuário.
3. Exibir de forma clara e acessível as rotas dos ônibus em operação, contribuindo para uma melhor compreensão dos trajetos disponíveis.
4. Permitir a gestão de dados do transporte público como a rota, horários, custo das passagens.


[Acesse a documentação completa do projeto](./Documentacao/)

## Tecnologias utilizadas

![springboot](https://img.shields.io/badge/Spring%20Boot-6DB33F.svg?style=for-the-badge&logo=Spring-Boot&logoColor=white)
![springsecurity](https://img.shields.io/badge/Spring%20Security-6DB33F.svg?style=for-the-badge&logo=Spring-Security&logoColor=white)
![postgres](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)
![flyway](https://img.shields.io/badge/Flyway-CC0200.svg?style=for-the-badge&logo=Flyway&logoColor=white)
![rad](https://img.shields.io/badge/RAD%20Studio-E62431.svg?style=for-the-badge&logo=RAD-Studio&logoColor=white)

![react native](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black
) 
![micropython](https://img.shields.io/badge/MicroPython-2B2728.svg?style=for-the-badge&logo=MicroPython&logoColor=white)
![node](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![rabiitmq](https://img.shields.io/badge/RabbitMQ-FF6600.svg?style=for-the-badge&logo=RabbitMQ&logoColor=white)
![delphi](https://img.shields.io/badge/Delphi-E62431.svg?style=for-the-badge&logo=Delphi&logoColor=white)


## Como executar o sistema

Execute os comando a seguir no diretórtio onde está o arquivo docker-compose.yml para

Criar e executar todos os containers:

```
docker compose up --build -d
```

Parar todos os containers em execução

```
docker compose stop
```

Remover todos os containers ou remover todos os volumes dos containers 

```
docker compose down 

ou

docker compose down --volumes
```

Executar todos os containers criados

```
docker compose start
```
