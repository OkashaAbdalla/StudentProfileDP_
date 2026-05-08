import ProfileCard from './ProfileCard';

function ProfileList({ students, onToggleActive }) {
  return (
    <section className="profile-list">
      <div className="profile-list-header">
        <h2>Profiles</h2>
        <p>{students.length} students in directory</p>
      </div>
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
