import { botInvite, serverInvite } from "../modules/links"
import styles from "./Landing.module.css"




const Landing = () => {
  return (
    <div className="center">
      <img src="/starly.png" width={200} className={styles.image}/>              
      <h1 className={styles.title}>P2 Assistant</h1>
      <p className={styles.description}>P2 Assistant is a bot which assists with all things Pokétwo (and more!)</p>
        
      <div className={styles.buttons}>
        {/* <button className="button">Add Bot</button> */}
        <a href={botInvite} className="button primary">Invite Bot</a>
        <a href={serverInvite} className="button secondary">Support Server</a>
        {/* <a className="button"> top.gg</a> */}


      </div>
    </div>



  )
}

export default Landing