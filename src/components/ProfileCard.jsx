function ProfileCard({ student, onToggleActive }) {
  const statusText = student.isActive ? 'Active' : 'Inactive';
  const statusClassName = student.isActive ? 'status active' : 'status inactive';

  return (
    <article className="profile-card">
      <h3>{student.name}</h3>
      <p>
        <span className="label">Track:</span> {student.track}
      </p>
      <p>
        <span className="label">Bio:</span> {student.bio}
      </p>
      <p>
        <span className="label">Skill Level:</span> {student.skillLevel}
      </p>
      <p className={statusClassName}>
        <span className="label">Status:</span> {statusText}
      </p>
      <button type="button" onClick={() => onToggleActive(student.id)}>
        {student.isActive ? 'Deactivate' : 'Activate'}
      </button>
    </article>
  );
}

export default ProfileCard;
