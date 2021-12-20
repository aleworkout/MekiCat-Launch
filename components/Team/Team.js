import { team } from '../../Data/team';
import styles from './Team.module.scss';
import Member from './Member';

const Team = () => {
  return (
    <div className={styles.team}>
      <h3 className={styles.title}>Our Team</h3>

      <p className={styles.description}>
        The Meki Cats Club was created by a team of digital and tech experts:
        Entrepreneurs, Blockchain experts, Marketing wizards, Artists, Advisors,
        Investors… We are committed to delivering the best experience and making
        this project a true success.
      </p>

      <div className={styles.team_Members}>
        {team?.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
