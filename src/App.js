import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import Footer from './components/Footer';

const initialStudents = [
  {
    id: 1,
    name: 'Amina Hassan',
    track: 'Frontend Development',
    bio: 'Enjoys building clean and responsive user interfaces with React.',
    skillLevel: 'Beginner',
    isActive: true,
  },
  {
    id: 2,
    name: 'Kofi Mensah',
    track: 'Backend Development',
    bio: 'Focused on APIs, databases, and secure server-side architecture.',
    skillLevel: 'Intermediate',
    isActive: false,
  },
  {
    id: 3,
    name: 'Lina Okoro',
    track: 'UI/UX Design',
    bio: 'Designs intuitive user experiences and accessible design systems.',
    skillLevel: 'Intermediate',
    isActive: true,
  },
  {
    id: 4,
    name: 'David Njoroge',
    track: 'Mobile Development',
    bio: 'Builds cross-platform apps and experiments with performance tuning.',
    skillLevel: 'Beginner',
    isActive: false,
  },
  {
    id: 5,
    name: 'Fatima Sule',
    track: 'Data Analysis',
    bio: 'Works with data visualization and turns insights into decisions.',
    skillLevel: 'Advanced',
    isActive: true,
  },
  {
    id: 6,
    name: 'Samuel Adeyemi',
    track: 'Cloud Engineering',
    bio: 'Interested in deployment pipelines and scalable cloud infrastructure.',
    skillLevel: 'Intermediate',
    isActive: true,
  },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  function toggleActive(id) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student
      )
    );
  }

  return (
    <main className="app">
      <Header />
      <ProfileList students={students} onToggleActive={toggleActive} />
      <Footer totalStudents={students.length} />
    </main>
  );
}

export default App;
