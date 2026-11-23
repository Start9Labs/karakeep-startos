import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.35.0:2',
  releaseNotes: {
    en_US:
      'Updated the bundled Meilisearch search engine to 1.55.1, a security release that stops searches with long filters from using excessive memory and time. Full notes: https://github.com/meilisearch/meilisearch/releases/tag/v1.56.1',
    es_ES:
      'Se actualizó el motor de búsqueda Meilisearch incluido a 1.55.1, una versión de seguridad que evita que las búsquedas con filtros largos consuman memoria y tiempo excesivos. Notas completas: https://github.com/meilisearch/meilisearch/releases/tag/v1.56.1',
    de_DE:
      'Die mitgelieferte Suchmaschine Meilisearch wurde auf 1.55.1 aktualisiert, ein Sicherheitsrelease, das verhindert, dass Suchen mit langen Filtern übermäßig viel Speicher und Zeit verbrauchen. Vollständige Hinweise: https://github.com/meilisearch/meilisearch/releases/tag/v1.56.1',
    pl_PL:
      'Zaktualizowano dołączoną wyszukiwarkę Meilisearch do wersji 1.55.1 — wydania bezpieczeństwa, które zapobiega nadmiernemu zużyciu pamięci i czasu przez wyszukiwania z długimi filtrami. Pełne informacje: https://github.com/meilisearch/meilisearch/releases/tag/v1.56.1',
    fr_FR:
      'Le moteur de recherche Meilisearch intégré passe à la version 1.55.1, une mise à jour de sécurité qui empêche les recherches avec de longs filtres de consommer trop de mémoire et de temps. Notes complètes : https://github.com/meilisearch/meilisearch/releases/tag/v1.56.1',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
