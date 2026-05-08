// Displays one student profile and forwards toggle actions.
function ProfileCard({ student, onToggleActive }) {
  // Derived values keep JSX clean and readable.
  const isActive = student.isActive === true;
  const statusText = isActive ? 'Active' : 'Inactive';
  const statusClassName = isActive ? 'status active' : 'status inactive';

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
        <span className="label">Status:</span>
        <span className="status-badge">{statusText}</span>
      </p>
      <button type="button" onClick={() => onToggleActive(student.id)}>
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </article>
  );
}

export default ProfileCard;
