# Student Hub

A clean, responsive student productivity web app to manage notes, timetables, and tasks all in one place. Built with vanilla HTML, CSS, and JavaScript. Hosted via GitHub Pages.

---

## Live Demo

 [View Live Site](https://advaitzerosix.github.io/studenthub_Advait/index.html)

---

## Features

- **Notes Storage** — Browse and search your study notes by subject or topic
- **Timetable Manager** — Keep track of your class schedule *(coming soon)*
- **Tasks Manager** — Manage assignments and deadlines *(coming soon)*
- **Dark / Light Mode** — Theme toggle with preference saved via localStorage
- **Live Search** — Filters notes by subject title and description in real time
- **Responsive Design** — Works on desktop and mobile

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with features overview and about section |
| `dashboard.html` | Central hub linking to all tools |
| `notes.html` | Notes library with live search |

---

## Tech Stack

- HTML5
- CSS3 (custom properties / CSS variables for theming)
- Vanilla JavaScript (no frameworks or libraries)
- GitHub Pages (hosting)

---

## Project Structure

```
student-hub/
├── index.html       # Home / landing page
├── dashboard.html   # Dashboard
├── notes.html       # Notes page
├── style.css        # All styles with CSS variable theming
└── script.js        # Theme toggle, search filter, upload handler
```

---

## Getting Started Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/student-hub.git
   ```
2. Open `index.html` in your browser — no build step or dependencies needed.

---

## Deployment

This site is hosted using **GitHub Pages**. Any push to the `main` branch automatically updates the live site.

To enable GitHub Pages on your own fork:
1. Go to **Settings → Pages**
2. Set source to `main` branch, `/ (root)` folder
3. Save — your site will be live at `https://your-username.github.io/student-hub`

---

## Roadmap

- [ ] Functional timetable manager
- [ ] Tasks manager with deadlines and priority tags
- [ ] Upload and open actual note files
- [ ] Dynamic active nav link via JavaScript
- [ ] Per-subject note filtering with dropdown tags
- [ ] Scroll-to-top button
- [ ] User accounts and persistent storage

---

## Author

**Advait Saxena**  
Built as a personal productivity tool for students.

---

## License

This project is open source and available under the [MIT License](LICENSE).