import Stats from '../Components/Stats'
import Landing from '../Components/Landing'
import Features from '../Components/Features'

import styles from "./Home.module.css"
const Home = () => {
  return (
    <>
        
      <div className={styles.home}>

        <Landing />
        <Stats />

        <Features />
        
      {/* <ServerWidget /> */}
      {/* <div> */}


      {/* </div> */}
      {/* <h1>Showcase</h1>
      <h3>Spawn Naming</h3>
      <img />   
      <h3>View Poketwo Auctions</h3>
      <img />

      <h3>Automatic Locking</h3>
      <img />

      <h3> Automatic Starboard</h3> */}
    </div>

    </>
  )
}

export default Home