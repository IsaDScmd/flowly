# Flowly

Flowly is a task management web application inspired by Trello.  
It helps users organize their work visually using boards, columns and task cards.

## Functional Description

Users can create boards, organize tasks into columns, and move tasks through different workflow stages.

## MVP Features

- User registration
- User login
- Create boards
- View boards
- Create columns
- Create tasks
- Edit tasks
- Delete tasks
- Move tasks between columns

## Tech Stack

- Frontend: React + Vite
- Styling: Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB
- ODM: Mongoose
- Version Control: Git + GitHub

## Data Model

### User

- id
- name
- email
- password

### Board

- id
- title
- owner
- members
- createdAt
- updatedAt

### Column

- id
- title
- board
- position
- createdAt
- updatedAt

### Task

- id
- title
- description
- board
- column
- priority
- dueDate
- position
- createdAt
- updatedAt

## Future Features (v2.0)

- Comments in tasks
- File attachments
- Notifications
- Team collaboration
- Calendar view
- Activity history