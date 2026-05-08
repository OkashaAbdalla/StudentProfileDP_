function Footer({ totalStudents, activeStudents }) {
  return (
    <footer className="footer">
      Total students: {totalStudents} | Active students: {activeStudents}
    </footer>
  );
}

export default Footer;
