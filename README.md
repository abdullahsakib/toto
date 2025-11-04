Django + React (Vite) Todo App

Structure:
- backend/ (Django REST API)
- frontend/ (Vite + React)

Deploy instructions (recommended - separate services on Render):
1. Create two GitHub repositories or one monorepo with `backend/` and `frontend/` folders.
2. Create a Python Web Service in Render for `backend/` with build command `pip install -r requirements.txt && python manage.py collectstatic --noinput` and start command `gunicorn backend.wsgi --workers 3 --bind 0.0.0.0:$PORT`.
3. Create a Static Site in Render for `frontend/` with build command `npm install && npm run build` and publish directory `dist`.
4. Set env var `VITE_API_BASE` on the frontend to point to your backend API (e.g. https://django-todo-api.onrender.com/api)
5. On backend set SECRET_KEY, DEBUG=False, ALLOWED_HOSTS and DATABASE_URL (use managed Postgres recommended).

