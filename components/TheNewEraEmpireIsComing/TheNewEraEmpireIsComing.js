import Button from '../../global/Button/Button';
import styles from './TheNewEraEmpireIsComing.module.scss';

const TheNewEraEmpireIsComing = () => {
  return (
    <div className={styles.faq_Conclusion}>
      <h2 className={styles.faq_Conclusion_Title}>
        The New Era Empire Is Coming
      </h2>

      <p className={styles.faq_Conclusion_details}>
        The Meki Cats Club has returned and will establish its leadership and
        empire over the world as it had before. Join us now on Discord!
      </p>

      <Button>Let&apos;s build the Empire</Button>
    </div>
  );
};

export default TheNewEraEmpireIsComing;
