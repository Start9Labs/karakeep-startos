import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.35.0:3',
  releaseNotes: {
    en_US:
      'Updated the bundled Chrome browser, which opens the pages you bookmark to save screenshots and archives, to 158.0.8127.88. This closes nearly 300 security vulnerabilities, 11 of them critical, that a malicious web page could exploit when it is bookmarked. Full notes: https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html',
    es_ES:
      'Se actualizó el navegador Chrome incluido, que abre las páginas que guardas para hacer capturas y archivos, a 158.0.8127.88. Esto corrige cerca de 300 vulnerabilidades de seguridad, 11 de ellas críticas, que una página web maliciosa podría aprovechar al guardarse como marcador. Notas completas: https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html',
    de_DE:
      'Der mitgelieferte Chrome-Browser, der gespeicherte Seiten für Screenshots und Archive öffnet, wurde auf 158.0.8127.88 aktualisiert. Damit werden fast 300 Sicherheitslücken geschlossen, davon 11 kritische, die eine bösartige Webseite beim Speichern als Lesezeichen ausnutzen könnte. Vollständige Hinweise: https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html',
    pl_PL:
      'Zaktualizowano dołączoną przeglądarkę Chrome, która otwiera zapisywane strony, aby wykonać zrzuty ekranu i archiwa, do wersji 158.0.8127.88. Usuwa to blisko 300 luk bezpieczeństwa, w tym 11 krytycznych, które złośliwa strona mogłaby wykorzystać po dodaniu jej do zakładek. Pełne informacje: https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html',
    fr_FR:
      "Le navigateur Chrome intégré, qui ouvre les pages que vous enregistrez pour en faire des captures et des archives, passe à la version 158.0.8127.88. Cela corrige près de 300 vulnérabilités de sécurité, dont 11 critiques, qu'une page web malveillante pourrait exploiter lorsqu'elle est ajoutée aux favoris. Notes complètes : https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
