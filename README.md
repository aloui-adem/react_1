# Cast IA

**Plateforme d'aide à la présélection des candidats pour les castings.**

![Statut](https://img.shields.io/badge/Statut-Prototype%20en%20d%C3%A9veloppement-orange)
![Backend](https://img.shields.io/badge/Django-5.2-092E20?logo=django&logoColor=white)
![Frontend](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white)

> **État du prototype :** L'architecture backend (authentification, profils, scénarios, modèles d'auditions et d'évaluations) est en place. L'interface React illustre le parcours produit avec des **données de démonstration fictives** : l'analyse automatique et le classement Top 15 réel sont en cours de développement.

---

## Présentation

**Cast IA** aide les producteurs et les directeurs de casting à trier un grand volume de candidatures afin d'identifier rapidement les profils les plus pertinents pour chaque rôle.

L'intelligence artificielle intervient uniquement comme **outil d'aide à la décision** : chaque score a vocation à être explicable, vérifiable, et le producteur conserve systématiquement le choix final.

### Parcours cible

1. **Définition du casting :** Le producteur ou directeur de casting crée un projet, ses rôles et ses critères d'évaluation.
2. **Dépôt des candidatures :** Les candidats complètent leur profil et soumettent leur audition vidéo pour un rôle.
3. **Analyse assistée :** Les auditions sont évaluées selon les critères définis pour le rôle.
4. **Notation explicable :** Chaque candidature reçoit une note accompagnée d'éléments justificatifs.
5. **Présélection Top 15 :** Cast IA met en avant les **15 candidats les mieux notés** par rôle.
6. **Validation humaine :** Le producteur visionne les auditions retenues et prend la décision finale.

---

## Aperçu de l'interface

| Vue Accueil & Concept | Classement Top 15 par rôle *(aperçu démo)* |
| :---: | :---: |
| ![Page d'accueil Cast IA](docs/screenshots/home-preview.png) | ![Classement Top 15 par rôle](docs/screenshots/top15-ranking.png) |
| *Présentation de la plateforme et accès par profil.* | *Simulation interactive du tri des 15 meilleurs profils.* |

---

## Architecture & Flux de données

```mermaid
flowchart LR
    subgraph Frontend ["Frontend (React 19 + Vite)"]
        UI_CD["Espace Directeur de Casting\n(Scénarios & Top 15)"]
        UI_CA["Espace Candidat\n(Profil & Audition)"]
    end

    subgraph Backend ["Backend (Django 5.2 + DRF)"]
        API["API REST\n(Auth, Profils, Scénarios)"]
        DB[("SQLite\nDonnées & Évaluations")]
        QUEUE["Redis\n(File asynchrone — prévu)"]
        AI["Module IA / librosa\n(Analyse audio — prévu)"]
    end

    UI_CD <-->|Axios / JSON| API
    UI_CA <-->|Axios / JSON| API
    API <--> DB
    API -.->|Tâches d'analyse| QUEUE
    QUEUE -.-> AI
    AI -.->|Note + explications| DB
# Cast IA

**Plateforme d'aide à la présélection des candidats pour les castings.**

![Statut](https://img.shields.io/badge/Statut-Prototype%20en%20d%C3%A9veloppement-orange)
![Backend](https://img.shields.io/badge/Django-5.2-092E20?logo=django&logoColor=white)
![Frontend](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white)

> **État du prototype :** L'architecture backend (authentification, profils, scénarios, modèles d'auditions et d'évaluations) est en place. L'interface React illustre le parcours produit avec des **données de démonstration fictives** : l'analyse automatique et le classement Top 15 réel sont en cours de développement.

---

## Présentation

**Cast IA** aide les producteurs et les directeurs de casting à trier un grand volume de candidatures afin d'identifier rapidement les profils les plus pertinents pour chaque rôle.

L'intelligence artificielle intervient uniquement comme **outil d'aide à la décision** : chaque score a vocation à être explicable, vérifiable, et le producteur conserve systématiquement le choix final.

### Parcours cible

1. **Définition du casting :** Le producteur ou directeur de casting crée un projet, ses rôles et ses critères d'évaluation.
2. **Dépôt des candidatures :** Les candidats complètent leur profil et soumettent leur audition vidéo pour un rôle.
3. **Analyse assistée :** Les auditions sont évaluées selon les critères définis pour le rôle.
4. **Notation explicable :** Chaque candidature reçoit une note accompagnée d'éléments justificatifs.
5. **Présélection Top 15 :** Cast IA met en avant les **15 candidats les mieux notés** par rôle.
6. **Validation humaine :** Le producteur visionne les auditions retenues et prend la décision finale.

---

## Aperçu de l'interface

| Vue Accueil & Concept | Classement Top 15 par rôle *(aperçu démo)* |
| :---: | :---: |
| ![Page d'accueil Cast IA](docs/screenshots/home-preview.png) | ![Classement Top 15 par rôle](docs/screenshots/top15-ranking.png) |
| *Présentation de la plateforme et accès par profil.* | *Simulation interactive du tri des 15 meilleurs profils.* |

---

## Architecture & Flux de données

```mermaid
flowchart LR
    subgraph Frontend ["Frontend (React 19 + Vite)"]
        UI_CD["Espace Directeur de Casting\n(Scénarios & Top 15)"]
        UI_CA["Espace Candidat\n(Profil & Audition)"]
    end

    subgraph Backend ["Backend (Django 5.2 + DRF)"]
        API["API REST\n(Auth, Profils, Scénarios)"]
        DB[("SQLite\nDonnées & Évaluations")]
        QUEUE["Redis\n(File asynchrone — prévu)"]
        AI["Module IA / librosa\n(Analyse audio — prévu)"]
    end

    UI_CD <-->|Axios / JSON| API
    UI_CA <-->|Axios / JSON| API
    API <--> DB
    API -.->|Tâches d'analyse| QUEUE
    QUEUE -.-> AI
    AI -.->|Note + explications| DB

