---
layout: post
title: "utiliser XFCE avec un écran HiDPI ou \"Retina\""
date: 2014-08-19 09:35:55 +0200
comments: true
categories: 
---

Ma nouvelle station de travail est un DELL Precision M4800, modèle équipé d'un
écran très haute résolution QHD+ 3200x1800 pixels
([aussi appelé HiDPI ou Retina chez Apple](http://en.wikipedia.org/wiki/Retina_Display)).

Malheureusement, ce genre d'écran n'est pas encore très bien supporté sous Linux. Pour
avoir une résolution d'écran acceptable sur une Ubuntu avec XFCE, j'ai donc suivi les
[instructions suivantes](https://wiki.archlinux.org/index.php/HiDPI).

# XFCE

Ajouter au fichier ~/.config/xfce4/Xft.xrdb la ligne suivante:
```
Xft.dpi: 180
```

Dans Paramètres|Tableau de bord, on peut mettre le paramètre "Taille d'une ligne" à 48px.

Dans les paramètres de zone de notification (accessible via un click droit sur la zone de
notification), on peut mettre la taille maximale d'une icône à 48px.

# Firefox et Thunderbird

Pour Firefox, dans about:config il faut rechercher la propriété layout.css.devPixelsPerPx
et lui donner la valeur 2.

Pour Thunderbird, on peut accéder à l'éditeur de configuration dans Préférences|Avancé|Général
et mettre là aussi layout.css.devPixelsPerPx = 2
