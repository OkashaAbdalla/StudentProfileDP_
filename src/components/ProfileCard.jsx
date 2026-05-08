function ProfileCard({ student }) {
  return (
    <article className="profile-card">
      <h3>{student.name}</h3>
      <p>Track: {student.track}</p>
      <p>Bio: {student.bio}</p>
      <p>Skill Level: {student.skillLevel}</p>
      <p>Status: {String(student.isActive)}</p>
      <button type="button">Activate / Deactivate</button>
    </article>
  );
}

export default ProfileCard;
