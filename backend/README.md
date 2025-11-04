Django REST API for Todo App.

Deploy notes:
- Set DATABASE_URL, SECRET_KEY, ALLOWED_HOSTS, DEBUG=False on Render.
- Add managed Postgres in Render and set DATABASE_URL to use Postgres.
- Set CORS_ALLOWED_ORIGINS to the frontend URL (e.g. https://your-frontend.onrender.com).
