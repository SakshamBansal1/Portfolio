# Portfolio Angular

This is an Angular v20 conversion of the React portfolio website.

## Project Structure

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── hero-section/
│   │   │   ├── about-section/
│   │   │   ├── skills-section/
│   │   │   ├── experience-section/
│   │   │   ├── projects-section/
│   │   │   ├── certifications-section/
│   │   │   ├── contact-section/
│   │   │   └── footer/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   └── not-found/
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── styles.scss
│   ├── index.html
│   └── main.ts
├── tailwind.config.js
├── angular.json
└── package.json
```

## Features

- Angular v20 with standalone components
- Tailwind CSS for styling
- Responsive design
- Dark mode support
- Smooth scrolling navigation
- Contact form
- Project filtering
- Typing animation effect

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- Angular 20
- TypeScript
- Tailwind CSS
- SCSS
- Standalone Components
- Angular Router
- Angular Forms

## Backend Integration

The folder structure is maintained to easily integrate with a backend later. You can:

1. Add services in `src/app/services/`
2. Add models/interfaces in `src/app/models/`
3. Add HTTP interceptors in `src/app/interceptors/`
4. Configure API endpoints in `src/environments/`

## Notes

- All components are standalone (no NgModule required)
- Uses Angular's new control flow syntax where applicable
- Tailwind CSS configured with custom theme matching the original design
- Form handling uses Angular FormsModule
- Routing configured with lazy loading support
