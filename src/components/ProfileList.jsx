import ProfileCard from './ProfileCard';

function ProfileList({ students, onToggleActive }) {
  return (
    <section className="profile-list">
      <h2>Profiles</h2>
      {students.map((student) => (
        <ProfileCard
          key={student.id}
          student={student}
          onToggleActive={onToggleActive}
        />
      ))}
    </section>
  );
}

export default ProfileList;
