# DotNet Full Stack

A full-stack web application demonstrating CRUD operations with a Person entity, built with Angular frontend and .NET backend. This is a learning project focused on understanding full-stack development concepts and modern web development practices using Angular and .NET technologies.

## Project Overview

This project showcases modern full-stack development practices using:
- **Frontend**: Angular 20.1.0 with Bootstrap 5.3.7
- **Backend**: .NET 9.0 Web API with Minimal APIs
- **Database**: SQLite with Entity Framework Core
- **Validation**: FluentValidation for server-side validation
- **Architecture**: Clean separation of concerns with organized folder structure

## Features

- **Person CRUD Operations**: Create, Read, Update, Delete persons
- **RESTful API**: Clean API endpoints following REST conventions
- **Data Validation**: Server-side validation using FluentValidation
- **CORS Configuration**: Proper CORS setup for Angular-API communication
- **Entity Framework**: Code-first approach with migrations
- **Modern Angular**: Using Angular 20 with TypeScript 5.8
- **Responsive UI**: Bootstrap-powered responsive design

## Project Structure

```
DotnetFullStackDemo/
├── client/                     # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── person/         # Person feature module
│   │   │   │   ├── person.component.ts
│   │   │   │   ├── person.model.ts
│   │   │   │   ├── person.service.ts
│   │   │   │   └── person.store.ts
│   │   │   ├── shared/         # Shared components
│   │   │   └── ...
│   │   └── environments/       # Environment configurations
│   └── package.json
├── PersonCrud/                 # .NET Backend
│   └── PersonCrud.Api/
│       ├── Models/             # Data models
│       │   ├── Person.cs
│       │   └── AppDbContext.cs
│       ├── Endpoints/          # API endpoints
│       │   └── PersonEndpoints.cs
│       ├── Validators/         # FluentValidation validators
│       │   └── PersonValidator.cs
│       ├── Migrations/         # EF Core migrations
│       └── Program.cs          # Application entry point
└── README.md
```

## Technology Stack

### Frontend (Angular)
- **Angular**: 20.1.0
- **TypeScript**: 5.8.2
- **Bootstrap**: 5.3.7
- **RxJS**: 7.8.0
- **Angular Router**: For navigation
- **Angular Forms**: For form handling

### Backend (.NET)
- **.NET**: 9.0
- **Entity Framework Core**: 9.0.7
- **SQLite**: Database provider
- **FluentValidation**: 12.0.0
- **Minimal APIs**: For lightweight API endpoints

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/people` | Get all persons |
| GET | `/people/{id}` | Get person by ID |
| POST | `/people` | Create new person |
| PUT | `/people/{id}` | Update existing person |
| DELETE | `/people/{id}` | Delete person |
