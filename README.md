# Work-in-progress! Stay tuned!!!

# README

A very simple intuitive and scaleable skeleton for your next project.

- Using:
  React 18 + Next.js 13 + Redux + RTK Query + Redux Saga + Styled Component + AntD Framework
- Built with:
  Node Engine: 18.16.0
  Next.js: App Router

# Core Dependencies

```
"react": "18.2.0",
"next": "13.4.6",
"react-redux": "^8.1.0",
"@reduxjs/toolkit": "^1.9.5",
"redux-saga": "^1.2.3",
"axios": "^1.4.0",
"typescript": "5.1.3"
```

- Packaging: npm

# Folder Structure

- public: Serves public assets
- src:
  - app: Serves next.js pages
  - components: Serves components for `/app`
  - pool: Serves core redux logics
  - reducers: Serves redux slices
  - saga: Serves redux saga
  - services: Serves api requests

# Using imports

import from components: "@/components/_"
import from pool: "@/pool/_"
and so forth.

# Serve

- Run application

```
npm run dev
```

- Build application

```
npm run build
```
