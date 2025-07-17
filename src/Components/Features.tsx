import { ComponentChildren } from "preact";
import styles from "./Features.module.css";

interface PropsType {
  name: string;
  desc: string;
  children: ComponentChildren;
}
const Feature = ({ name, desc, children }: PropsType) => {
  return (
    <div className={`transparent-box ${styles.feature} center`}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.images}>{children}</div>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features" className={`${styles.features} center`}>
      <h1>Features</h1>

      <Feature
        name="Naming"
        desc="P2 Assistant will automatically name Pokétwo spawns. Members can also set shiny hunts and collections to be pinged when it spawns!"
      >
        <img src="/features/naming.png" />
      </Feature>

      <Feature
        name="Auctions"
        desc="Search through over 800,000 Pokétwo auctions to help price check your Pokémon!"
      >
        <img src="/features/auctions.png" />
      </Feature>

      <Feature
        name="Leaderboards"
        desc="With global and server based leaderboards for Pokétwo, users can compete against friends and other players to be on top!"
      >
        <img src="/features/globalleaderboard.png" />
        <img src="/features/serverleaderboard.png" />
        <img src="/features/baltop.png" />
      </Feature>

      <Feature
        name="Starboard"
        desc="P2 Assistant can detect and automatically put rare Pokétwo catches in starboard!"
      >
        <img src="/features/starboard.png" />
      </Feature>
    </div>
  );
};

export default Features;
