# Volunteer Management Platform

## Purpose

The Volunteer Management Platform is a user-friendly web application that facilitates the creation, management, and participation in volunteer opportunities. Users can create volunteer need posts, update and delete their posts, and volunteer for opportunities posted by others. The platform ensures a seamless and secure experience for all users.

## Live URL

[https://volunteer-connect-793ad.web.app](#)

## Key Features

### General Features

- **Responsive Design**: Fully responsive and accessible on mobile, tablet, and desktop devices.
- **Dynamic Titles**: The website title changes dynamically based on the active route.
- **Dark/Light Theme**: Toggle between dark and light themes for better user experience.
- **404 Page**: Custom-designed page displayed when a route is not found.

### Authentication

- Email/password-based authentication using Firebase.
- Google and GitHub social login .
- JWT-based authentication to secure private routes.

### Pages and Routes

- **Home Page**: Includes an eye-catching banner, volunteer needs section (showing posts sorted by deadline), and additional meaningful sections.
- **Add Volunteer Need Post**: A protected route where users can create volunteer posts. Includes fields like thumbnail, title, description, category, location, and more.
- **Volunteer Need Post Details**: Displays detailed information about a post with an option to volunteer for it.
- **Be a Volunteer Page/Modal**: Allows logged-in users to volunteer for posts. Dynamically updates the number of volunteers needed.
- **All Volunteer Need Posts Page**: Displays all volunteer opportunities with search functionality and layout toggling (grid or table).
- **Manage My Posts**: Displays user-specific posts in two sections: "My Volunteer Need Posts" and "My Volunteer Request Posts" with options to update or delete.

### Additional Features

- **Spinner**: Displays a loading spinner during data fetch operations.
- **Toast Notifications**: Displays relevant success/error messages for all CRUD operations.
- **Confirmation Dialogs**: Asks for confirmation before deleting or canceling posts.

### Challenge Features

- Restriction for volunteering if the required number of volunteers is zero.
- MongoDB sort functionality to display posts by upcoming deadlines.
- $inc operator used to dynamically update the number of volunteers needed.

## NPM Packages Used

- `react-router-dom`: For routing and navigation.
- `firebase`: For authentication and secure data handling.
- `jsonwebtoken` (JWT): For token generation and verification.
- `axios`: For API calls and data fetching.
- `react-toastify` or `sweetalert`: For displaying toast notifications.
- `react-datepicker`: For selecting dates in forms.
- `tailwindcss`: For building responsive and visually appealing UI components.
- `dotenv`: For managing environment variables securely.
- `mongodb` and `mongoose`: For database operations.
- `cors`: For handling cross-origin requests.

# Thanks For Read This

**MD:Tonmoy Hosen**
