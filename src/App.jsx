
import styles from './App.module.css';

const galleryImages = [
  // Placeholder images, replace with real project images
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
];

function App() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Daniela Ruano</h1>
        <p className={styles.heroSubtitle}>Architect | Modern, Sustainable, Inspired</p>
      </section>

      {/* Portfolio / Gallery Section */}
      <section className={styles.gallery}>
        {galleryImages.map((src, idx) => (
          <div className={styles.galleryItem} key={idx}>
            <img src={src} alt={`Project ${idx + 1}`} />
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>About</h2>
        <p>
          Daniela Ruano is a passionate architect with over 10 years of experience designing modern, sustainable spaces. Her work blends creativity with functionality, always focusing on the needs of her clients and the environment.
        </p>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Contact</h2>
        <form onSubmit={e => { e.preventDefault(); alert('Thank you for reaching out!'); }}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required />

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
