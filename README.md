# Timyo – Application de Réservation de Rendez-vous

Timyo est une application web moderne permettant la création, la gestion et le suivi de rendez-vous, développée avec :

Laravel (API + Authentification Sanctum en cookies)

React + Vite + TailwindCSS

L’application propose un système multi-rôles (admin & user), une gestion complète des rendez-vous et une interface intuitive.

## 1. Introduction

Timyo est une application SPA (Single Page Application) permettant aux utilisateurs de réserver des rendez-vous et aux administrateurs de gérer l’ensemble des réservations du système.

L’authentification est gérée par Laravel Sanctum en mode cookie-based, offrant un système sécurisé et compatible avec les applications SPA.

## 2. Objectifs du projet

Développer une application complète de réservation de rendez-vous.

Permettre à l’utilisateur de gérer ses rendez-vous.

Permettre à l’administrateur de gérer les rendez-vous globalement et les utilisateurs.

Approfondir les concepts Laravel : routes, controllers, Eloquent ORM, migrations, factories, seeders.

Implémenter une authentification sécurisée avec Sanctum.

Construire une interface moderne en React + Vite + Tailwind.

Ajouter des tests backend et frontend.

Fournir une documentation complète via ce README.

## 3. User Stories
### Utilisateur (User)

US1 : Créer un rendez-vous (date et heure).

US2 : Consulter ses propres rendez-vous.

US3 : Annuler un rendez-vous avant sa date.

### Administrateur (Admin)

US4 : Lister tous les rendez-vous du système.

US5 : Modifier le statut d’un rendez-vous (approuver / rejeter).

US6 : Voir la liste de tous les utilisateurs et gérer leurs rôles.

## 4. Pages & Interfaces
### Dashboard Utilisateur

Accéder à la liste des rendez-vous personnels.

Créer un nouveau rendez-vous.

Annuler un rendez-vous existant.

### Dashboard Administrateur

Lister tous les rendez-vous (avec utilisateur, date, heure, statut).

Approuver ou rejeter un rendez-vous.

Consulter la liste des utilisateurs (user/admin).

### Autres pages

Page de connexion (LoginPage)

Page d’inscription (RegisterPage)

Page de création de rendez-vous (CreateAppointmentPage)

Page de liste des rendez-vous utilisateur

Page d'administration (AdminDashboardPage)

## 5. Architecture & Fonctionnalités
### Backend — Laravel 11

✔ Authentification Sanctum (cookies / session)
✔ Middlewares : isUser, isAdmin
✔ Migrations : users, appointments
✔ Relations Eloquent : User hasMany Appointment
✔ Seeders & Factories pour générer des données de test
✔ API RESTful
✔ Validation avec Form Requests
✔ Tests PHPUnit

### Frontend — React + Vite

✔ Authentification avec cookies (axios.withCredentials)
✔ Routing + ProtectedRoute (selon rôle)
✔ Pages Login / Register / Dashboard
✔ Notifications toast
✔ Interface responsive en TailwindCSS
✔ Tests Jest & React Testing Library

## 6. Technologies utilisées
Côté	Technologies
Backend	Laravel 11, Sanctum, MySQL, PHPUnit
Frontend	React, Vite, TailwindCSS, Axios, Jest
Outils	 Postman

## Liens utiles

- <a href="https://khadijaraja119-1765190565257.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?atlOrigin=eyJpIjoiMzcxZTI5MTAyNDc1NGE5Y2I4ZGQ2ZTc2YWNlMjYxNGUiLCJwIjoiaiJ9" target="_blank" style="text-decoration:none;">
  <kbd>📋 Voir le Planning Jira</kbd>
</a>

- <a href="https://lucid.app/lucidchart/8fb9efe6-fb94-45e5-9ec6-4c958540f648/edit?viewport_loc=-220%2C-180%2C2096%2C954%2C0_0&invitationId=inv_c58b9157-d169-468d-956a-c6009c6626a4" target="_blank" style="text-decoration:none;">
  <kbd>📐 Diagramme de Classes UML</kbd>
</a>

- <a href="https://lucid.app/lucidchart/8fb9efe6-fb94-45e5-9ec6-4c958540f648/edit?viewport_loc=-81%2C-173%2C3144%2C1431%2C5Y8bWEiqOQEN&invitationId=inv_c58b9157-d169-468d-956a-c6009c6626a4" target="_blank" style="text-decoration:none;">
  <kbd>📄 Diagramme de Cas d'Utilisation UML</kbd>
</a>
