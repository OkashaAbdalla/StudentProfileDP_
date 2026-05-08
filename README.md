# Student Profile Directory

A React assignment project that demonstrates core React concepts:
- reusable components
- props
- JSX
- conditional rendering
- basic state management with `useState`

## Project Objective

Build a Student Profile Directory application that displays a list of student cards and allows each student's status to be toggled between active and inactive.

## Features Implemented

- Clear component structure: `App`, `Header`, `ProfileList`, `ProfileCard`, `Footer`
- Student data stored in state inside `App`
- Dynamic rendering of profiles using `map`
- Props passed from parent components to child components
- Conditional rendering for status text (`Active` / `Inactive`)
- Button on each profile to toggle active state
- Dynamic footer summary showing:
  - total students
  - active students
- Clean and responsive UI styling

## Component Structure

```text
App
├── Header
├── ProfileList
│   └── ProfileCard
└── Footer
```

## State and Data Model

The `App` component manages the main application state:

- `students` (array of objects)

Each student object contains:
- `id`
- `name`
- `track`
- `bio`
- `skillLevel`
- `isActive`

## Toggle Logic

`App` defines the `toggleActive(id)` function and updates state immutably:

```js
function toggleActive(id) {
  setStudents((prevStudents) =>
    prevStudents.map((student) =>
      student.id === id
        ? { ...student, isActive: !student.isActive }
        : student
    )
  );
}
```

This function is passed down through props:
- `App` -> `ProfileList` -> `ProfileCard`

## Props Flow

- `App` -> `ProfileList`
  - `students`
  - `onToggleActive`
- `App` -> `Footer`
  - `totalStudents`
  - `activeStudents`
- `ProfileList` -> `ProfileCard`
  - `student`
  - `onToggleActive`

## UI and Styling Notes

- Consistent color palette and spacing
- Card-based layout with visual hierarchy
- Status color indicators for active/inactive students
- Responsive grid layout for different screen sizes
- Clear and readable text styles

## How to Run the Project

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3) Run tests

```bash
npm test -- --watchAll=false
```

## Assignment Requirement Checklist

- [x] Component structure implemented correctly
- [x] Proper use of props
- [x] Dynamic rendering with array and `map`
- [x] State managed in parent component (`App`)
- [x] Toggle functionality for active status
- [x] Conditional rendering for student status
- [x] Clean, readable, and organized code
- [x] Fully functional application

## Submission

GitHub Repository: `https://github.com/OkashaAbdalla/StudentProfileDP`

If required by your mentor, include screenshots or a demo link here before final submission.
