PROJECT LOG

⸻

9 June 2026 :
Completed

* Fixed Search Again functionality
* Fixed hidden results bug after re-search
* Explored city input improvement
* Learned datalist basics
* Compared HTML validation vs JavaScript validation

Decision

* No city API integration yet
* No real-city verification yet
* Focus on core MVP
* Prioritize frontend-backend learning path before adding advanced features

Learning

* Difference between HTML validation and JavaScript validation
* Search flow debugging
* Importance of fixing UX bugs before adding new features

⸻

10 June 2026 :

Flask Learning

Learned:

* Flask app creation
* Routes
* Functions
* Requests
* Query parameters
* request.args.get()
* Validation
* JSON responses
* Status codes
* GET requests
* Running Flask server

Outcome

Built foundation for frontend-backend communication.

⸻

11-12 June 2026 : 

Frontend-Backend Integration

Worked on:

* fetch()
* JSON responses
* API communication
* Search functionality

Challenges

* Understanding response.json()
* Understanding request flow
* Understanding frontend/backend responsibilities

Outcome

Successfully connected frontend and Flask.

⸻

13 June 2026 : 

Debugging Session

Problems Encountered:

* CORS errors
* Wrong server running on port 5000
* Flask-CORS confusion
* Failed fetch requests
* Method Not Allowed errors

Learning

Frontend and backend are separate applications.

Flow:

User
↓
JavaScript
↓
Fetch Request
↓
Flask
↓
JSON Response
↓
JavaScript
Outcome

Successfully resolved communication issues.

⸻

14 June 2026 : 

Completed

* Implemented /skills/<category> API
* Migrated skill dropdown to backend
* Removed opportunitiesDb from frontend
* Centralized all application data in data.py
* Updated README
* Synced GitHub repository

Additional Work

* Created backend-driven skill dropdown
* Built Flask route for dynamic skill loading
* Refactored frontend to consume backend APIs
* Learned Git fetch, rebase and synchronization workflow

Outcome

Frontend no longer owns application data.
Backend is now the single source of truth.

Architecture:

Frontend
↓
Flask API
↓
data.py
↓
JSON Response
↓
Frontend Rendering
Current Status

Completed:

* Frontend UI
* Flask backend
* Search API
* Skills API
* Job database
* Scheme database
* Roadmap database

Not Started:

* Gemini integration
* WhatsApp automation
* Deployment

Next Planned Steps

1. Full testing of all categories
2. Project cleanup
3. Flask file handling practice
4. Gemini integration research
5. AI-generated roadmap generation