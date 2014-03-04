---
layout: post
title: "FizzBuzz kata en JavaScript"
date: 2014-03-03 22:36:40 +0000
comments: true
published: true
categories: javascript kata
---
J'ai créé un [repository sur github](https://github.com/merwan/katas) pour stocker mes code katas.

Pour mon premier kata, je commence léger puisqu'il s'agit de [FizzBuzz](http://craftsmanship.sv.cmu.edu/katas/fizzbuzz). Le langage choisi est JavaScript et j'utilise le package npm jasmine-node pour faire tout cela en TDD :
```
npm install jasmine-node -g
```

Pour cette implémentation, j'ai choisi de créer une méthode qui prend le nombre maximal jusqu'auquel on souhaite compter. Cette méthode retourne un tableau avec l'ensemble des valeurs à afficher. Le fichier de spec est alors :

{% include_code fizzbuzz_test.spec.js %}

Comme on peut le voir, c'est très verbeux et par conséquent c'est fastidieux d'ajouter un test.

Il n'y a pas de surprises dans l'implémentation :

{% include_code fizzbuzz.js %}

Lors mon prochain essai, je changerai probablement l'API pour passer le nombre à "traduire" en argument d'une méthode. Cela permettra d'avoir des tests beaucoup plus concis et l'implémentation sera simplifiée. L'énumération des nombres sera alors déléguée au code appelant la méthode de FizzBuzz.
