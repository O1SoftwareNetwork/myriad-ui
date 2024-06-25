import styles from './styles/mainpage.module.css'
export default function Home() {
  return (
    <div>
      Myriad-ui
      <div className={styles.venue}>
        <h1>Venue</h1>
        <p>Always be booked</p>
        <p>Diversity of artists will attract a broader audience</p>
        <button>Book a Venue</button>
      </div>
      
      <div className={styles.artist}>
        <h1>Artist Signup</h1>
        <p>Opportunity to perform at different venues</p>
        <p>Expand your fan base</p>
        <button>Signup as Artist</button>
      </div>

      <div className={styles.fan}>
        <h1>Fan Signup</h1>
        <p>Support your favorite artists</p>
        <p>Fun night out</p>
        <button>Signup as a fan</button>
      </div>
    </div>
  );
}
/*Colors?*/

/* Dark background & Vibrant text */
/* logo? */

/* people that do bookings ALWAYS have their phone. Doing booking on their phone or talking and doing it onother device is a plus */