import Image from "next/image";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiFacebookCircleFill,
  RiShip2Fill,
} from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import styles from "./Footer.module.scss";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={styles._spacing}
      >
        <Grid item xs={12} md={3} className={styles._logo}>
          <Image src="/logo.png" height={100} width={200} alt="logo" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ fontWeight: "bold", padding: "0 3px" }}
          >
            &copy; {new Date().getFullYear()} Meki Cats. All rights
            reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={styles._social_links}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RiShip2Fill className={styles._social_icon} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className={styles._social_icon} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RiFacebookCircleFill className={styles._social_icon} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RiTwitterFill className={styles._social_icon} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <SiDiscord className={styles._social_icon} />
          </a>
        </Grid>
      </Grid>
    </section>
  );
};

export default Footer;
