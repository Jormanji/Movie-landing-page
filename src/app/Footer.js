export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="column">
            <h4>MovieDB</h4>
            <ul className="list">
              <li><a href="/about" className="link">About Us</a></li>
              <li><a href="/contact" className="link">Contact</a></li>
              <li><a href="/privacy" className="link">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="column">
            <h4>Follow Us</h4>
            <ul className="list">
              <li><a href="https://facebook.com" className="link">Facebook</a></li>
              <li><a href="https://twitter.com" className="link">Twitter</a></li>
              <li><a href="https://instagram.com" className="link">Instagram</a></li>
            </ul>
          </div>
          
          <div className="column">
            <h4>Explore</h4>
            <ul className="list">
              <li><a href="/movies" className="link">Movies</a></li>
              <li><a href="/tvshows" className="link">TV Shows</a></li>
              <li><a href="/people" className="link">People</a></li>
            </ul>
          </div>
        </div>
  
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} MovieDB. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
  