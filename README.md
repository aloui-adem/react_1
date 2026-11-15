<div align="center">

<!-- ANIMATED HERO BANNER -->
<img src="docs/assets/banner.svg" alt="Cast AI — Plateforme de présélection artistique" width="100%" />

<br/>

<!-- ANIMATED TYPING HEADER -->
<a href="https://github.com/ismailkrid957-dot/spider-el-3ankabout">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3200&pause=900&color=818CF8&center=true&vCenter=true&multiline=true&repeat=true&width=820&height=80&lines=CAST+AI+%E2%80%94+Pr%C3%A9s%C3%A9lection+Artistique+Assist%C3%A9e+par+IA;IA+%C3%89thique+360+%E2%80%A2+JEI+INSAT+%C3%97+OIF+(Mandat+2026%2F2027)" alt="Cast AI Typing Animation" />
</a>

<p align="center">
  <strong>Plateforme d'aide à la présélection artistique — objective, explicable et inclusive.</strong>
</p>

<!-- BADGES -->
<p align="center">
  <img src="https://img.shields.io/badge/Hackathon-IA_%C3%89thique_360-6366F1?style=for-the-badge&logo=sparkles&logoColor=white" alt="Hackathon IA Éthique 360"/>
  <img src="https://img.shields.io/badge/JEI_INSAT_%C3%97_OIF-Mandat_2026%2F2027-D97706?style=for-the-badge&logo=globe&logoColor=white" alt="JEI INSAT x OIF"/>
  <img src="https://img.shields.io/badge/Django-5.2-1E1B4B?style=for-the-badge&logo=django&logoColor=white" alt="Django 5.2"/>
  <img src="https://img.shields.io/badge/React-Vite-4F46E5?style=for-the-badge&logo=react&logoColor=white" alt="React Vite"/>
  <img src="https://img.shields.io/badge/Celery_%2B_Redis-Async_AI-F59E0B?style=for-the-badge&logo=redis&logoColor=black" alt="Celery Redis"/>
</p>

<p align="center">
  <a href="#démonstration-interactive">Démonstration</a> •
  <a href="#engagement-ia-éthique-360">IA Éthique 360</a> •
  <a href="#architecture-technique">Architecture</a> •
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
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1E1B4B', 'primaryTextColor': '#F8FAFC', 'primaryBorderColor': '#818CF8', 'lineColor': '#F59E0B', 'clusterBkg': '#131626', 'clusterBorder': '#4F46E5', 'titleColor': '#FBBF24'}}}%%
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
    REDIS --> CELERY
    CELERY --> MP
    CELERY --> DF
    CELERY --> LIB
    MP -->|Métriques explicables| EVAL
    DF -->|Métriques explicables| EVAL
    LIB -->|Métriques explicables| EVAL
    EVAL -->|Profil Radar XAI| UI
```

### Structure du dépôt

```text
spider-el-3ankabout/
├── backend/
│   ├── ai/                 # Extraction multimodale (MediaPipe, DeepFace, Librosa)
│   ├── applicants/         # Profils candidats et dépôt des auditions
│   ├── casting/            # Projets, scénarios et rôles de casting
│   ├── evaluations/        # Scores décomposés et critères explicables (XAI)
│   ├── config/             # Configuration Django, Celery et routage API
│   ├── manage.py
│   └── docker-compose.yml  # Broker Redis pour les tâches asynchrones
├── frontend/
│   ├── public/
│   ├── src/                # Composants React, visualisation Radar et client Axios
│   └── package.json
├── docs/
│   └── assets/             # Bannière SVG, radar animé, pipeline et GIFs de démo
├── .gitignore
└── README.md
```

---

## Installation Rapide

### Prérequis

- **Python** 3.11+
- **Node.js** 18+ et **npm**
- **Docker** *(pour l'exécution de Redis)*

### 1. Cloner le dépôt

```bash
git clone [https://github.com/ismailkrid957-dot/spider-el-3ankabout.git](https://github.com/ismailkrid957-dot/spider-el-3ankabout.git)
cd spider-el-3ankabout
```

### 2. Démarrer le Backend & le Worker IA (`backend/`)

```bash
cd backend
```

**Créer et activer l'environnement virtuel :**

- **Windows (PowerShell) :**
  ```powershell
  python -m venv .venv
  .\.venv\Scripts\Activate.ps1
  ```
- **Linux / macOS :**
  ```bash
  python3 -m venv .venv
  source .venv/bin/activate
  ```

**Installer les dépendances et configurer les variables d'environnement :**

```bash
pip install -r requirements.txt
cp .env.example .env
```
*(Sous Windows PowerShell, utilisez `Copy-Item .env.example .env`.)*

**Générer une clé secrète Django et l'ajouter dans `.env` :**

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

**Démarrer Redis, appliquer les migrations et lancer le serveur :**

```bash
docker compose up -d
python manage.py migrate
python manage.py runserver
```

*(Optionnel — dans un second terminal depuis `backend/` avec `.venv` activé, démarrez le worker Celery : `celery -A config worker -l info`)*

API Backend accessible sur **http://127.0.0.1:8000/**.

### 3. Démarrer le Frontend (`frontend/`)

Dans un nouveau terminal, depuis la racine du projet :

```bash
cd frontend
npm install
npm run dev
```

Application Frontend accessible sur **http://localhost:5173/**.

---

## Cadre du projet

Projet développé dans le cadre du **Hackathon IA Éthique 360** — **Junior Entreprise INSAT (JEI) × Organisation Internationale de la Francophonie (OIF)** (*Mandat 2026/2027*).
