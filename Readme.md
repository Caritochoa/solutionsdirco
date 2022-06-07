Getting Started

-clone the app
-npm install.

To run tests
-npm run tests

Architecture
My desicion was to build 4 lambdas that consume from 2 services. a test module with a similar strucuture.

Services
I created to services in the Src/services here we have two services:
1. Directory: Here we find the class Directory with its methods
2. Tree: a Binary tree implementation with the intention to organice the files in a tree. 

Lambdas: 
1. create: Creates a directory in the given path, consumes Directory service.
2. Delete: removes directory form the given path, consumes Directory service.
3. listDir: removes directory form the given path, consumes from Directory service.
4. moveDir: removes directory form the given path, consumes Directory service.

tests.
tree.specs  and directory specs where the two services will be tested. 

