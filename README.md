# Coding the curbs
![banner](https://user-images.githubusercontent.com/43068118/172828732-dd1d47bf-6812-4ca0-b564-d7a706adf77e.png)



## inhoudsopgave
* [Beschrijving](#beschrijving)
* [Poster](#poster)
* [Live demo](#live-demo)
* [Installatie](#installatie)
* [Gebruikershandleiding en functies](#gebruikershandleiding-en-functies)
* [Checklist](#checklist)
* [Auteurs](#auteurs)
* [Licentie](#licentie)


## Beschrijving
Coding the Curbs is een start-up die sinds januari 2020 werkt aan het slimmer maken van de steden. Door de ruimte in een stad te 'coderen' is het mogelijk om plekken diverse functies te laten vervullen op verschillende momenten. Denk daarbij aan een parkeerplek die ruimte biedt voor laden & lossen doordeweeks, en voor terrassen in het weekend, de zogenaamde Smart Zones. Via een mobiele en webapplicatie kunnen gebruikers ter plekke een reservering maken van een Smart Zone. Op die manier kunnen ze onder het vooraf gereserveerde tijdstip gebruik maken van deze ruimte. Bij de Smart Zone is er een Smart Sign (digitaal scherm) aanwezig die de huidige reserveringen en informatie laat zien.


## Poster
![image](https://user-images.githubusercontent.com/30145681/175009279-108f1ca3-005b-4711-8eaa-86f40af691dd.png) ![image](https://user-images.githubusercontent.com/30145681/175009334-da2614a5-fcf1-4964-921f-d48927fc71ad.png)


## Live demo
https://coding-the-curbs.herokuapp.com/

## Installatie
Om dit project local te laten draaien kun je dit project clone met: `gh repo clone Tomvandenberg11/coding-the-curbs`.

Voor de installatie doe je:
``` terminal 
npm install
```

Om de applicatie te runnen doe je:
``` terminal
npm run dev (nodemon)
npm start (node)
```

We gebruiken een database van mongodb, hier moet je een account voor aanmaken. Dit kan op: https://www.mongodb.com/. 
- Je maakt een project aan
- Maakt een database
- Maakt een collection aan
In de mongoClient.js op regel 19 staat
``` js 
.connect(`mongodb+srv://codingthecurbsminor2022:${MONGO_PASS}@codingthecurbs.ln7wtad.mongodb.net/?retryWrites=true&w=majority` 
```
Hier moet je de namen aanpassen naar jou database link.

In het .env bestand zet je de MONGO_PASS & MAIL_PASS. Deze heb je nodig voor het wachtwoord van je [mongodb](https://mongodb.com/) password & [mailer](https://github.com/Tomvandenberg11/coding-the-curbs/wiki/Node-Mailer) password.

## Functies
- Smartzone reserveren voor de tijd nu
- Smartzone reserveren voor latere tijd deze dag
- Reservatie beheren & bekijken
- Mail met login code
- Kaart met Smartzones

## Auteurs 
De makers van dit project zijn: [Tim de Roller](https://github.com/maggness), [Tom Van den berg](https://github.com/Tomvandenberg11), [Fabian Vis](https://github.com/fabian-vis) en  [Sietse Roos](https://github.com/sietse333).


## Licentie
GPL-3.0 license
