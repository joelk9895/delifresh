
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <nav>
       <h1>Deli fresh</h1>
    </nav>
    <section>
        <img src="https://bl-i.thgim.com/public/incoming/pdxlv3/article66992931.ece/alternates/FREE_1200/Pic.png" alt="milma milk photo" className='milma' />
    </section>
    <section>
     <p>Welcome to Deli Fresh - Your Ultimate Grocery Shopping Destination!</p>
    </section>
    <footer><a href="tel:+919351558143">Phone</a> <a href="https://goo.gl/maps/Qk4G6vZnpFaQKcYL7">Direction</a><a href="mailto:georgeksales366@gmail.com">Mail</a></footer>
    </main>
  )
}
