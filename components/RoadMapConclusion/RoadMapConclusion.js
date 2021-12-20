import styles from './RoadMapConclusion.module.scss';
import Image from 'next/image';
import Button from '../../global/Button/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

const RoadMapConclusion = () => {
  const matches = useMediaQuery('(max-width:1024px)');
  return (
    <div className="custom_container">
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        className={styles.roadmap_conclusion}
      >
        <Grid
          item
          md={matches ? 4 : 4}
          sm={5}
          xs={12}
          className={styles.roadmap_conclusion_left_image}
        >
          {/* <Image src="/chameleon.jpg" width={400} height={400} alt="horus1" /> */}
          <Image
            src="/chameleon_club.png"
            width={400}
            height={400}
            alt="horus1"
            objectFit="contain"
            loading="lazy"
            className={styles._roadmap_conclusion_image}
          />
        </Grid>
        <Grid item md={matches ? 8 : 5} sm={7} xs={12}>
          <h2 className={styles.roadmap_conclusion_title}>
            The New Era Empire Phase <br />
            <span>Development Roadmap</span>
          </h2>
          <div className={styles.roadmap_conclusion_details}>
            <p>
              The Meki Cats Club has been around for thousands of years and
              is here to stay to build a new era empire on Earth like they did
              before. The New Era Empire Phase has been announced on our Discord
              Channel. Check it out there! As always true believers in the
              Ancients Cats will be rewarded. Be ready!
            </p>
            <div className={styles._roadmap_conclusion_button}>
              <Button>Join our Club</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RoadMapConclusion;

// import styles from "./RoadMapConclusion.module.scss";
// import Image from "next/image";
// import Button from "../../global/Button/Button";

// const RoadMapConclusion = () => {
//   return (
// <div className={styles.roadmap_conclusion}>
//   {/* <Image
//     src="/Logos (use these ones)/logo_white_background.jpg"
//     width={180}
//     height={40}
//     alt="horus1"
//   /> */}
//   <img
//     src="/logo_transparent.png"
//     alt="horus1"
//     className={styles.roadmap_conclusion_image}
//   />
//   <h2 className={styles.roadmap_conclusion_title}>
//     The New Era <br />
//     Empire Phase <br />
//     <span>Development Roadmap</span>
//   </h2>
//   <div className={styles.roadmap_conclusion_details}>
//     <p>
//       The Meki Cats Club has been around for thousands of years and is
//       here to stay to build a new era empire on Earth like they did before.
//       The New Era Empire Phase has been announced on our Discord Channel.
//       Check it out there! As always true believers in the Ancients Cats will
//       be rewarded. Be ready!
//     </p>

//     <Button>Join our Discord</Button>
//   </div>
// </div>
//   );
// };

// export default RoadMapConclusion;
