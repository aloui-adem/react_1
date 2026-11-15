<div align="center">

<!-- ANIMATED HERO BANNER (Local SVG — 100% dependency-free) -->
<img src="docs/assets/banner.svg" alt="Cast AI — Plateforme de présélection artistique" width="100%" />

# Cast AI

**Plateforme d'aide à la présélection artistique — objective, explicable et inclusive.**

<p>
  <kbd>Hackathon IA Éthique 360</kbd> &nbsp;•&nbsp;
  <kbd>JEI INSAT × OIF • Mandat 2026/2027</kbd> &nbsp;•&nbsp;
  <kbd>Django 5.2</kbd> &nbsp;•&nbsp;
  <kbd>React + Vite</kbd> &nbsp;•&nbsp;
  <kbd>Celery + Redis</kbd>
</p>

<p>
  <a href="#démonstration-interactive">Démonstration</a> &nbsp;·&nbsp;
  <a href="#engagement-ia-éthique-360">IA Éthique 360</a> &nbsp;·&nbsp;
  <a href="#architecture-technique">Architecture</a> &nbsp;·&nbsp;
  <a href="#installation-rapide">Installation</a>
</p>

</div>

---

## Présentation & Proposition de valeur

Dans les industries culturelle et cinématographique, la présélection des candidatures souffre fréquemment d'un manque de transparence, de biais inconscients et d'une volumétrie élevée qui pénalise les talents émergents — en particulier au sein de l'espace francophone.

**Cast AI** est une plateforme d'aide à la décision conçue pour les producteurs, directeurs de casting et jurys artistiques. Plutôt que de reposer sur un score global opaque, le moteur combine des indicateurs multimodaux objectifs (expressivité faciale, posture scénique, prosodie vocale, diction et cohérence avec le rôle) afin de générer un **profil d'évaluation radar explicable**, systématiquement soumis à la validation finale d'un jury humain.

<div align="center">
  <img src="docs/assets/cast-ai-radar.svg" alt="Cast AI Engine — Radar Éthique 360" width="92%" />
</div>

---

## Démonstration Interactive

> **Parcours complet :** dépôt d'une audition vidéo, traitement asynchrone via Celery/Redis, extraction des métriques multimodales et restitution du profil radar explicable.

<div align="center">
  <img src="docs/assets/pipeline-flow.svg" alt="Pipeline Asynchrone Cast AI" width="95%" />
</div>

| Espace Candidat — Dépôt d'audition | Espace Jury — Profil Radar & Top 15 |
| :---: | :---: |
| ![Démo Candidat](docs/assets/demo-candidat.gif) | ![Démo Jury](docs/assets/demo-jury.gif) |
| *Soumission vidéo et suivi du traitement en temps réel.* | *Exploration des scores explicables et validation humaine.* |

> *Astuce GitHub : pour remplacer les emplacements `.gif` ci-dessus par vos captures d'écran animées, ouvrez `README.md` en mode édition sur GitHub.com et glissez-déposez vos fichiers `.gif` ou `.mp4` directement dans l'éditeur.*

---

## Engagement IA Éthique 360

Conçu dans le cadre du **Hackathon IA Éthique 360** co-organisé par la **Junior Entreprise INSAT (JEI)** et l'**Organisation Internationale de la Francophonie (OIF)** (*Mandat JEI 2026/2027*), **Cast AI** repose sur quatre principes fondamentaux :

| Pilier Éthique | Implémentation dans Cast AI |
| :--- | :--- |
| **Explicabilité (XAI)** | Aucun score global opaque : chaque évaluation est décomposée par critère artistique (prosodie, expressivité, posture, diction, cohérence) dans `evaluations`. |
| **Neutralisation des biais** | Analyse centrée exclusivement sur la performance artistique (repères géométriques et acoustiques) sans profilage morphologique ou identitaire. |
| **Supervision humaine (*Human-in-the-Loop*)** | L'IA assiste le tri initial et met en lumière des profils atypiques ; **la décision finale de casting reste 100 % humaine**. |
| **Inclusivité francophone** | Calibration acoustique ouverte à la diversité des accents et expressions culturelles de l'espace francophone (OIF). |

---

## Architecture Technique

La plateforme adopte une architecture découplée pensée pour absorber les traitements vidéo et audio lourds de manière asynchrone sans dégrader la réactivité de l'interface :

```mermaid
flowchart LR
    subgraph Frontend["Frontend (React + Vite)"]
        UI["Interface Candidat & Jury"]
    end

    subgraph Backend["Backend API (Django 5.2 + DRF)"]
        APP["applicants"]
        CAST["casting"]
        EVAL["evaluations"]
    end

    subgraph Async["Pipeline Asynchrone"]
        REDIS[("Redis Broker")]
        CELERY["Celery Workers"]
    end

    subgraph AI["Moteur IA Multimodal"]
        MP["MediaPipe\nLandmarks & Posture"]
        DF["DeepFace\nÉmotions & Expressivité"]
        LIB["Librosa\nProsodie & Rythme Vocal"]
    end

    UI <-->|REST API JSON| Backend
    CAST -->|Déclenche analyse| REDIS
    REDIS
