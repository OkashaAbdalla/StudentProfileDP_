function ProfileCard({ student, onToggleActive }) {
  return (
    <article className="profile-card">
      <h3>{student.name}</h3>
      <p>Track: {student.track}</p>
      <p>Bio: {student.bio}</p>
      <p>Skill Level: {student.skillLevel}</p>
      {student.isActive ? <p>Status: Active</p> : <p>Status: Inactive</p>}
      <button type="button" onClick={() => onToggleActive(student.id)}>
        {student.isActive ? 'Deactivate' : 'Activate'}
      </button>
    </article>
  );
}

export default ProfileCard;
