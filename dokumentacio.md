# weboldal **Dokumentáció**
## *Jó ezdés* edzőterem 
### Miről szól?

    A weboldalam egy edzőtermet mutat be. Az oldalon bemutatom a edzőterem gépeit, azok használatát , az edzőket és az elérhetőségeket.
---
### Fájlok és felépítés
A projekt a következő fájlokból áll:
- HTML fájlok:
    1. main.html – főoldal, bemutatja az edzőtermet, a nyitvatartást, árakat, galériát és a gépek számát.
    2. gepek.html – az összes edzőtermi gép részletes bemutatása, képekkel és leírással.
    3. style.css – a teljes weboldal stílusait tartalmazza (színek, táblázatok, kártyák, navigáció, galéria, stb.).
- CSS fájl:
    1. style.css – a teljes weboldal stílusait tartalmazza (színek, táblázatok, kártyák, navigáció, galéria, stb.).
- JavaScript fájl:
    1. script.js – a weboldal interaktív funkciói: telefonszám generálás, slideshow, hívás gombok, dinamikus gépszám kiírás.

---
#### Főoldal – main.html
- Header / Navigáció
    - navbar osztályú fixed menüsor, a következő menüpontokkal:
        - Gépek 
        - Galéria 
        - Árlista 
        - Edzők 
        - Nyitvatartás 
- Elérhetőségek 
    - Telefon, e-mail, cím
    - A telefon dinamikusan generálódik a script.js segítségével.
- Rólunk szekció 
    - Bemutatja az edzőtermet, célokat, szolgáltatásokat.
    - Dinamikusan jeleníti meg a gépek számát:
    - összes gép
    - kardiógépek
    - erősítő gépek
- Nyitvatartás
    - Táblázat hétfő–vasárnap, nyitvatartási időkkel.
- Árlista
    - Napijegyek, bérletek, kedvezmények, éves bérlet.
- Galéria
    - Slideshow képek, balra-jobbra navigáló gombok. (W3schools)
- JavaScript használat
    - Gépek számolása 
    - Slideshow funkciók 
    - Telefonszám kiírás 
---
#### Gépek oldal – gepek.html
- Navigáció
    - Főoldalra vissza, edzőkhez link.
- Gép összesítés
    - Dinamikusan jeleníti meg az összes gép számát, kardiógépek és erősítőgépek mennyiségét ugyanúgy, mint a főoldalon.
- Kardiógépek
    - Külön szekció minden géphez kép és részletes leírás.
- Erősítőgépek
    - Külön szekció, képekkel és részletes leírással.
- JavaScript
    - Újra használja a főoldali függvényt a gépek számolásához.
---
#### Edzők oldal – edzok.html
- Navigáció
    - Főoldalra vissza, gépekhez link.
- Edző kártyák (w3)
    - Mindegyik edző külön kártyán:
        - Kép
        - Név
        - Elérhetőségi időpont
        - “Hívás” gomb
- JavaScript
    - Kezeli a felugró megerősítést és a telefonszám megjelenítését.
---
#### CSS – style.css
- Body / színek
    - Háttér: coral
    - Szöveg: azure
    - Margó: 20px
- Fejléc, navigáció
    - Flexbox-alapú, fixed, sötét háttér, fehér szöveg
    - Hover szín: coral
- Táblázatok
    - Középre rendezett, színes fejléc, tábla cellák színezve
- Rólunk, árak, galéria
    - rolunk – háttér: sötét, áttetsző (opacity:0.7), szöveg igazítás: justify
    - nyitva – háttérkép, fehér szöveg, középre igazítás
- Edzők, kártyák
    - Kártyák és képek szépen igazítva, körbefuttatott képek
- Galéria képek
    - Kerekített sarkok, teljes szélesség, fix magasság 600px
---
#### JavaScript – script.js
- Telefonszám generálás
    - Véletlenszerű 7 számjegy + 0670 prefix
    - Kiírás a főoldalon és hívás gombnál
- Slideshow
    - Képek váltása gombokkal
    - Aktuális kép indexének kezelése
- Hívás gomb
    - confirm() ablak, utána alert a telefonszám vagy visszautasító üzenet
- Oldal betöltéskor
    - Automatikusan kiírja a telefonszámot
---
### Interakciók
- Főoldalon: dinamikusan frissített gépszámok, slideshow, generált telefonszám.
- Gépek oldalon: részletes gépleírás, képek, gépszámok.
- Edzők oldalon: kártyák, “Hívás” gomb, felugró confirm + alert.
---

### Linkek amiket használtam 
> https://elite-fitness.hu/kategoriak 

> https://www.w3schools.com/

---
### Ai használat: 
- Teljes dokumentáció (sosem csináltunk még)
- Fiktív edzőterem bemutatás (Rólunk)
- Átfogalmazások
 



