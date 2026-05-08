import ProfileCard from './ProfileCard';

function ProfileList({ students }) {
  return (
    <section className="profile-list">
      <h2>Profiles</h2>
      {students.map((student) => (
        <ProfileCard key={student.id} student={student} />
      ))}
    </section>
  );
}

export default ProfileList;
