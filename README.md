# Student Hub

A clean, responsive student productivity web app built with vanilla HTML, CSS, and JavaScript. Manage your notes, tasks, and focus sessions all in one place. Hosted via GitHub Pages.

## Live Demo

[View Live Site](https://advaitzerosix.github.io/studenthub_Advait/index.html)

## Features

**Task Manager**
Add tasks with a priority level (Low, Medium, High). Mark tasks as complete using a checkbox. Delete individual tasks. Completed tasks are grouped separately. All tasks persist across page refreshes using localStorage.

**Pomodoro Timer**
25 minute focus sessions with 5 minute breaks. Animated SVG countdown ring. Start, Pause, Resume, and Reset controls. Automatically switches between focus and break mode. Tracks and logs every completed session for the day. Session history resets at midnight. Session count persists on refresh using localStorage.

**Notes Storage**
Browse study notes organized by subject. Live search filters notes by title and description in real time.

**Dark and Light Mode**
Theme toggle with user preference saved via localStorage.

**Responsive Design**
Fully responsive layout with a hamburger menu on mobile.

**Scroll to Top**
Floating button appears after scrolling and returns to the top of the page smoothly.

## Pages

| Page | Description |
|------|-------------|
| index.html | Landing page with features overview and about section |
| dashboard.html | Central hub with task manager and links to all tools |
| notes.html | Notes library with live search |
| pomodoro.html | Pomodoro timer with session tracking |

## Tech Stack

- HTML5
- CSS3 with custom properties for theming and animations
- Vanilla JavaScript with no frameworks or libraries
- GitHub Pages for hosting

## Project Structure

```
studenthub/
    index.html
    dashboard.html
    notes.html
    pomodoro.html
    style.css
    script.js
```

## Getting Started Locally

1. Clone the repository

```bash
git clone https://github.com/advaitzerosix/studenthub_Advait.git
```

2. Open index.html in your browser. No build step or dependencies needed.

## Deployment

This site is hosted using GitHub Pages. Any push to the main branch automatically updates the live site.

To enable GitHub Pages on your own fork, go to Settings then Pages, set the source to the main branch and root folder, and save. Your site will be live at https://your-username.github.io/your-repo-name.

## Roadmap

- [x] Task manager with add, complete, delete, and priority tags
- [x] Pomodoro timer with session tracking and localStorage persistence
- [x] Live search on notes page
- [x] Dark and light mode toggle
- [x] Responsive design with hamburger menu
- [x] Scroll to top button
- [ ] Upload and open actual note files
- [ ] Per subject note filtering with tags
- [ ] Timetable manager
- [ ] User accounts and cloud storage

## Author

Advait Saxena
Built as a personal productivity tool for students.

## License

This project is open source and available under the MIT License.