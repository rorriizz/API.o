# API.o

## Introduction

API.o is an interactive guide to vegetarian-friendly restaurants and cafes. API.o also offers a JSON API, allowing developers to create applications around the services offered by API.o. There are methods to search for establishments and food around Ensenada.

## Overview

API.o is a usefull tool to develop aplications about vegeterian lifestyle, this API allows you to retrieve information about entries and restaurants, and users using a well-defined set of URIs. Currently, all information is returned as JSON.


# API.o

The following steps are needed to use API.o:
  * :octocat:   git clone
  * :computer:  npm install               // install dependencies

To connect to the Mongo DB you should run:
  * :leaves:    mongod.exe
  * :leaves:    mongo.exe

Now it's all set to run the application:
  * :bear:      npm start                 // start application


## Requests:
```
POST localhost:3000/restaurantes
GET localhost:3000/restaurantes
POST localhost:3000/platillos
GET localhost:3000/platillos
GET localhost:3000/platillos/:id
PUT localhost:3000/platillos/:id
DELETE localhost:3000/platillos/:id
PUT localhost:3000/restaurantes/:id
DELETE localhost:3000/restaurantes/:id
GET localhost:3000/restaurantes/:id/platillos
GET localhost:3000/comentarios
DELETE localhost:3000/comentarios/:id
GET localhost:3000/comentarios/:id
POST localhost:3000/platillos/:id/comentarios
GET localhost:3000/platillos/:id/comentarios
GET localhost:3000/restaurantes?Param1=value&Param2=value
GET localhost:3000/platillos?Param1=value&Param2=value
```

You can also read the documentation through Postman
 * https://documenter.getpostman.com/view/2966962/apio/7E8hvsX

