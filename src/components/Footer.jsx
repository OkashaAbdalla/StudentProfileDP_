function Footer({ totalStudents, activeStudents }) {
  return (
    <footer className="footer">
      <span>Total students: {totalStudents}</span>
      <span>Active students: {activeStudents}</span>
    </footer>
  );
}

export default Footer;
