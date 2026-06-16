# RozgarSathi 

> *"400 million workers in India want to grow. We're building the ladder."*

## What is RozgarSathi?

RozgarSathi (meaning "companion for livelihood") is an AI-powered web platform built exclusively for India's blue collar workforce. A worker enters their skill and location in Hindi or English and instantly receives:

- **Relevant local job listings** matched to their profile
- **Government schemes they qualify for** — PMKVY, DDU-GKY, PM Vishwakarma and more — explained in simple language with application steps
- **AI-generated skill roadmap** — what to learn next to earn more,AI-generated skill roadmap powered by Google Gemini
- **WhatsApp** -ready sharing workflow for jobs, schemes and roadmap recommendations

## Current MVP Features

- Multi-category worker support (Construction, Factory, Electrical, Plumbing, Domestic, General)
- Dynamic skill selection based on chosen category
- Backend-powered recommendation engine using Flask APIs
- Job opportunities matched to worker skills
- Government welfare schemes relevant to selected profession
- Career growth roadmap for each profession
- Hindi-first user experience
- WhatsApp-ready workflow

## The Problem

India has 400+ million blue collar workers. They are:
- Discovering jobs purely through word of mouth
- Missing government schemes they qualify for simply because nobody told them
- Having no structured path to upskill and grow

Existing platforms like Naukri and LinkedIn are built for white collar India. RozgarSathi is built for the India that everyone else forgot.

## Target User

- Age 18-45, tier 2/3 cities and towns
- Construction workers, factory laborers, electricians, plumbers, domestic helpers
- Basic smartphone, WhatsApp user, Hindi/regional language speaker
- Has skills and ambition but zero structured guidance

## Tech Stack

- Frontend: HTML, Tailwind CSS, Vanilla JavaScript
- Backend: Python Flask
- Data Layer: Python data modules
- AI Layer: Google Gemini API
- Planned Messaging Layer: Twilio WhatsApp API
- Deployment: Railway

## Project Status

### Completed

- [x] Problem research
- [x] Idea validation
- [x] Team formation
- [x] Frontend UI
- [x] Flask backend setup
- [x] Backend API integration
- [x] Dynamic category & skill system
- [x] Worker opportunity database
- [x] Government scheme database
- [x] Career roadmap database
- [x] Gemini-powered roadmap generation
- [x] AI roadmap JSON parsing
- [x] Gemini-Flask integration
- [x] Deployment

### In Progress

- WhatsApp automation
- Real job data integration
- Real government scheme integration
- User testing and feedback collection

## Architecture

```
User
|
↓
Frontend
|
↓
Flask API
|
↓
data.py
|
↓
Google Gemini
|
↓
AI Roadmap Generation
|
↓
JSON Response
|
↓
Frontend Rendering
```

Routes:
- /search
- /skills/&lt;category&gt;

## Installation

```bash
git clone <https://github.com/RonakChakrawati/rozgarsathi>
cd RozgarSathi

python -m venv venv
source venv/bin/activate

pip install -r requirements.txt
python app.py

```

## Team

Built for Samsung Solve for Tomorrow 2026
Theme 1 — AI for Safer, Smarter, Inclusive Bharat

## Team members 

- Krish Raj
- Himanshu Raj

## License

MIT
