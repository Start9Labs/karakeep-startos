import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.35.0:3',
  releaseNotes: {
    en_US:
      'Updated the bundled browser image used for bookmark screenshots and archives. On x86_64, Chrome is now 158.0.8127.88, incorporating nearly 300 security fixes, 11 rated critical. On arm64, the image still contains Debian Chromium 156.0.8078.108; this update does not provide the Chrome 158 security fixes on that architecture. Full notes: https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html',
    es_ES:
      'Se actualizó la imagen del navegador incluido para las capturas y los archivos de marcadores. En x86_64, Chrome pasa a 158.0.8127.88 e incorpora cerca de 300 correcciones de seguridad, 11 de ellas críticas. En arm64, la imagen sigue incluyendo Chromium 156.0.8078.108 de Debian; esta actualización no aporta las correcciones de seguridad de Chrome 158 en esa arquitectura. Notas completas: https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html',
    de_DE:
      'Das mitgelieferte Browser-Image für Screenshots und Archive von Lesezeichen wurde aktualisiert. Auf x86_64 läuft Chrome jetzt in Version 158.0.8127.88 mit fast 300 Sicherheitskorrekturen, davon 11 als kritisch eingestuft. Auf arm64 enthält das Image weiterhin Debians Chromium 156.0.8078.108; dieses Update liefert dort nicht die Sicherheitskorrekturen von Chrome 158. Vollständige Hinweise: https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html',
    pl_PL:
      'Zaktualizowano obraz przeglądarki używanej do zrzutów ekranu i archiwizacji zakładek. Na x86_64 Chrome ma teraz wersję 158.0.8127.88 z blisko 300 poprawkami bezpieczeństwa, w tym 11 krytycznymi. Na arm64 obraz nadal zawiera Chromium 156.0.8078.108 z Debiana; ta aktualizacja nie dostarcza poprawek bezpieczeństwa Chrome 158 na tej architekturze. Pełne informacje: https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html',
    fr_FR:
      "L'image du navigateur intégré pour les captures et les archives des favoris a été mise à jour. Sur x86_64, Chrome passe à la version 158.0.8127.88 et intègre près de 300 correctifs de sécurité, dont 11 critiques. Sur arm64, l'image contient toujours Chromium 156.0.8078.108 de Debian ; cette mise à jour n'apporte pas les correctifs de sécurité de Chrome 158 sur cette architecture. Notes complètes : https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
