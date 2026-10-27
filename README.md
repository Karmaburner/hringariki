# Hringariki Tannklinikk · demo

Demoside laget av [Lilit Labs](https://lilitlabs.com) for å vise hva en tannklinikk kan få. Klinikken finnes ikke. Navn, personer, priser og adresse er oppdiktet, og bildene er laget med KI.

Live: https://karmaburner.github.io/hringariki/

## Kjøre lokalt

```bash
npm install
npm run dev
```

Siden kjører da på rot (`localhost:3000`). Ved `npm run build` lages en statisk versjon i `out/` med undermappen `/hringariki`, som GitHub Pages bruker.

## Endre innhold

Alt innhold (åpningstider, priser, behandlinger, ansatte og bilder) ligger i `lib/klinikk.ts`. Åpningstidene står bare der, så de blir like på alle sider og i dataene Google leser.

## Publisering

Hver push til `main` bygges og legges ut av `.github/workflows/pages.yml`.
