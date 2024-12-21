volunteer-management-platform/
├── public/
├── src/
│ ├── assets/ // Images, logos, and other static files
│ ├── components/ // Reusable UI components
│ │ ├── Navbar.js
│ │ ├── Footer.js
│ │ ├── SearchBar.js
│ │ ├── Card.js
│ │ ├── Modal.js
│ ├── pages/ // Page components for different routes
│ │ ├── HomePage.js
│ │ ├── LoginPage.js
│ │ ├── RegisterPage.js
│ │ ├── AllPostsPage.js
│ │ ├── MyPostsPage.js
│ │ ├── AddPostPage.js
│ │ ├── UpdatePostPage.js
│ │ ├── PostDetailsPage.js
│ │ ├── MyRequestsPage.js
│ ├── context/ // React Context for state management
│ │ ├── AuthContext.js
│ │ ├── PostsContext.js
│ ├── hooks/ // Custom React hooks
│ │ ├── useAuth.js
│ │ ├── usePosts.js
│ ├── services/ // API service files
│ │ ├── authService.js // Authentication (login, register, logout)
│ │ ├── postsService.js // CRUD operations for posts
│ │ ├── requestsService.js // CRUD operations for volunteer requests
│ ├── utils/ // Utility functions
│ │ ├── toastUtils.js // Toast/sweet alert helpers
│ │ ├── validationUtils.js // Form validation logic
│ ├── App.js // Main app component
│ ├── index.js // Entry point
│ ├── styles/ // CSS/SCSS files
│ ├── global.css
│ ├── navbar.css
│ ├── footer.css
