# 🚀 Tank 1990 Web Remake

### Classic Battle City recreated using **Phaser 3 + TypeScript**

------------------------------------------------------------------------

```{=html}
<p align="center">
```
`<img src="screenshots/gameplay.png" alt="Gameplay Screenshot" width="700"/>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
🎮 Retro gameplay • ⚡ Modern architecture • 🧠 AI enemies • 🧱
Destructible environments
```{=html}
</p>
```

------------------------------------------------------------------------

## 📖 Project Overview

This project is a modern web-based remake of the legendary **Tank 1990
(Battle City)** arcade game. It recreates the original mechanics while
applying modern web game development practices using:

-   **Phaser 3**
-   **TypeScript**
-   **Tilemap-based level design**
-   **Arcade Physics**
-   Modular scene architecture

The objective is to protect the **Eagle Base**, defeat enemy tanks, and
progress through multiple increasingly difficult levels.

------------------------------------------------------------------------

## ✨ Gameplay Features

### 🎮 Core Mechanics

-   Smooth 4-direction tank movement
-   Classic single-bullet firing system
-   Enemy tank combat mechanics
-   Player respawn & life system
-   Base protection gameplay

### 🧱 Environment System

-   🔥 Brick walls --- destructible
-   🛡 Steel walls --- indestructible
-   🌊 Water tiles --- block movement
-   🦅 Eagle base --- triggers Game Over if destroyed
-   Tilemap levels built using **Tiled Editor**

### 🤖 Enemy AI

-   Random patrol behavior
-   Direction switching
-   Shooting logic
-   Obstacle avoidance
-   Progressive difficulty scaling

### ⭐ Power‑Ups

-   Star → Weapon upgrade
-   Shield → Temporary protection
-   Bomb → Destroy enemies instantly
-   Timer → Freeze enemies
-   Extra Life → Gain additional life

------------------------------------------------------------------------

## 🗺️ Level Progression

  Level     Description
  --------- ------------------------------
  Level 1   Introduction & basic enemies
  Level 2   Increased enemy aggression
  Level 3   Advanced enemy difficulty

Automatic level transition occurs after defeating all enemies.

------------------------------------------------------------------------

## 🖥️ HUD System

The in-game HUD displays:

-   Score
-   Current Level
-   Remaining Lives
-   Remaining Enemies

```{=html}
<p align="center">
```
`<img src="screenshots/hud.png" alt="HUD Screenshot" width="700"/>`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## 🧱 Project Architecture

    src/
     ├── scenes/
     │    ├── BootScene.ts
     │    ├── PreloadScene.ts
     │    ├── MenuScene.ts
     │    ├── GameScene.ts
     │    └── GameOverScene.ts
     │
     ├── assets/
     │    ├── images/
     │    ├── tiles/
     │    └── audio/
     │
     ├── levels/
     │    ├── level1.json
     │    ├── level2.json
     │    └── level3.json
     │
     ├── config.ts
     └── Game.ts

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

    git clone <repository-url>

### 2️⃣ Install Dependencies

    npm install

### 3️⃣ Run Development Server

    npm run dev

### 4️⃣ Open in Browser

    http://localhost:5173

------------------------------------------------------------------------

## 🎮 Controls

  Action       Key
  ------------ ----------
  Move Up      ⬆ Arrow
  Move Down    ⬇ Arrow
  Move Left    ⬅ Arrow
  Move Right   ➡ Arrow
  Shoot        Spacebar

------------------------------------------------------------------------

## 🏆 Assignment Deliverables Covered

✅ Phaser Scene Architecture\
✅ Tilemap-based Levels\
✅ Enemy AI System\
✅ Environment Interactions\
✅ HUD & Scoring\
✅ Multi-Level Gameplay\
✅ Complete Playable Build

------------------------------------------------------------------------

## 📸 Screenshots

### Gameplay

`<img src="screenshots/gameplay.png" width="700"/>`{=html}

### Enemy Combat

`<img src="screenshots/enemies.png" width="700"/>`{=html}

### Level Design

`<img src="screenshots/level.png" width="700"/>`{=html}

------------------------------------------------------------------------

## 👨‍💻 Author

**Bhavish Kayya**\
Head of Technology --- Naavinya Holidays India Pvt. Ltd.

------------------------------------------------------------------------

## 📝 Notes

This project demonstrates recreation of a classic arcade experience
using modern web technologies and structured game architecture suitable
for academic evaluation.

------------------------------------------------------------------------

⭐ If you like this project, consider starring the repository!
