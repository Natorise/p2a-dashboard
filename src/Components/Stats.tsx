import { useEffect, useState } from "preact/hooks"
import styles from "./Stats.module.css"

const mode = import.meta.env.MODE

const apiEndpoint = mode === "development" ? "https://localhost:8080/api" : "/api"
const defaultStats = {
  guildCount: 0,
  commandCount: 0
}


const Stats = () => {
  console.log(mode)

  const [stats, setStats] = useState(defaultStats)

  useEffect(()=>{
    fetch(`${apiEndpoint}/stats`)
    .then(res=>{
      if(!res.ok) throw new Error("API error")
      return res.json()
    })
    .then(data=>{
      setStats(data)
    })
    .catch(console.log)
  },[])


  return (
    <div className="center">
      
      <h1 className={styles.title}>Statistics</h1>
      <div className={styles.values}>
      <div className={`transparent-box ${styles.value}`}>
        <h2>{stats.guildCount.toLocaleString()}</h2>
        <p>Servers</p>
      </div>
    <div className={`transparent-box ${styles.value}`}>
    <h2>{stats.commandCount.toLocaleString()}</h2>

      <p>Commands</p>

      {/* <p>{stats.commandCount.toLocaleString()}</p> */}
      
    </div>
      </div>
      
      

    </div>

  )
}

export default Stats