Download and Install RabbitMQ docker container
===============================================
# for RabbitMQ 3.8
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

-----------------------
COMMON DOCKER COMMANDS
----------------------


docker version

docker info

Create a nginx container
=========================
docker container run -it -p 80:80 nginx

Container list
===================
docker container ls

docker container ls -a

delete container
===============
docker container rm <id> i.e. first 3 character of the id

check installed images
=====================
docker images

remove installed images
======================
docker image remove <id> i.e. the first 3 characters of an id

run docker container with -d (on the background or detached)
============================================================
docker container run -d -p 8080:80 --name mynginx nginx

docker container ls alternative
===============================
docker ps

docker container for apache
=======================================================
docker container run -d -p 8081:80 --name myapache httpd

docker container for mysql with MYSQL_ROOT_PASSWORD environment variable
=========================================================================
docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=Pass@1234 mysql

stop docker container
=====================
docker stop <name> e.g mysql

docker remove a running container
==================================================
docker container rm <name> - f e.g. <name>=myapache

get or bash into a container
===========================
docker container exec -it mynginx bash

delete all the containers
=========================
docker rm $(docker ps -aq) -f *not working!

docker-compose command
======================
docker-compose up
