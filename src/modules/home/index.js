import {
  Button, Grid, makeStyles,
  Typography
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import cardImage from '../../styles/images/card_image.jpg';
import circleImage from '../../styles/images/Ethos_Hero_HR.png';
import { InfoCard } from './components/InfoCard';

export const Home = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.backgroundAnim1}></div>
      <div className={styles.backgroundAnim2}></div>
      <Grid
        container
        direction="column"
        className={styles.bodyRoot}>
        <Grid item className={styles.commonItem}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            className={styles.titleSection}
          >
            <Grid item className={styles.commonItem}>
              <Typography variant="h3" component="h3" className={styles.outlineTitle}>
                Timeless Value
              </Typography>
            </Grid>
            <Grid item className={styles.commonItem}>
              <Typography variant="h3" component="h3" className={styles.mainHeading}>
                World's first non-depreciating currency
              </Typography>
            </Grid>
            <Grid item className={styles.commonItem}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                className={styles.slideTitle}>
                <Grid item className={styles.line}></Grid>
                <Grid item>
                  <Typography variant="body1" className={styles.textSlideRight}>
                    Introducing Temporary coin. A new kind of money that maintains it's buying power irrespective of which direction the market moves in.
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={styles.commonItem}>
              <Button variant="contained" size="large" href="#" className={styles.titleUseArthButton}>
                Use Temporary
              </Button>
              <Button
                startIcon={<PlayArrowIcon />}
                className={styles.playArrowButton}
              >
                Imagine. Temporary
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={styles.commonItem}>
          <div className={styles.cardSection}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center">
              <Grid item xs={12} sm={8} className={styles.cardItem}>
                <InfoCard
                  title="Welcome"
                  content="This is the first project of its kind on Fantom"
                  imgURL={cardImage}>
                </InfoCard>
              </Grid>
              <Grid item xs={12} sm={8} className={styles.cardItem}>
                <InfoCard
                  title="Step1"
                  content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. 
                  Add 1 cup of frozen peas along with the mussels, if you like."
                  imgURL={cardImage}
                  cardActions={false}>
                </InfoCard>
              </Grid>
              <Grid item xs={12} sm={8} className={styles.cardItem}>
                <InfoCard
                  title="Step2"
                  content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. 
                  Add 1 cup of frozen peas along with the mussels, if you like."
                  imgURL={cardImage}
                  cardActions={false}>
                </InfoCard>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '120px 130px 0px 130px',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down("md")]: {
      padding: '120px 24px',
      lineHeight: 1.2
    }
  },
  bodyRoot: {
    position: 'relative',
    height: '100%'
  },
  titleSection: {
    position: 'relative',
    paddingTop: 60,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 0
    }
  },
  outlineTitle: {
    fontWeight: 700,
    lineHeight: '55px',
    letterSpacing: 1,
    color: '#303030',
    WebkitTextStroke: '0.5px #fff',
    fontSize: 52,

    [theme.breakpoints.down("xs")]: {
      fontSize: 32,
      lineHeight: 1.2
    }
  },
  mainHeading: {
    fontWeight: 700,
    fontStyle: 'normal',
    color: 'rgba(255,255,255,0.88)',
    lineHeight: 1.5,
    fontSize: 52,

    [theme.breakpoints.down("xs")]: {
      fontSize: 32,
      lineHeight: 1.2
    }
  },
  slideTitle: {
    maxWidth: 645,
    position: 'relative',
    margin: '32px 0'
  },
  line: {
    background: 'linear-gradient(38.44deg, #F47F57 15.81%, #FD5656 87.57%)',
    width: 4,
    position: 'absolute',
    height: '100%'
  },
  textSlideRight: {
    overflow: 'hidden',
    lineHeight: '24px',
    color: 'rgba(255,255,255,0.64)',
    fontWeight: 700,
    paddingLeft: 19,
    fontSize: 21
  },
  commonItem: {
    width: '100%'
  },
  backgroundAnim1: {
    backgroundImage: `url(${circleImage})`,
    width: 1300,
    height: 1300,
    position: 'absolute',
    backgroundSize: 'cover',
    right: -300,
    top: 50,
    zIndex: -2,
    WebkitAnimation: `$background-animate 25s infinite linear`,
    animation: `$background-animate 25s infinite linear`
  },
  backgroundAnim2: {
    backgroundImage: `url(${circleImage})`,
    width: 1300,
    height: 1300,
    position: 'absolute',
    backgroundSize: 'cover',
    right: 25,
    top: 50,
    zIndex: -2,
    WebkitAnimation: `$circleAround 25s infinite linear`,
    animation: `$circleAround 25s infinite linear`
  },
  titleUseArthButton: {
    background: 'linear-gradient(38.44deg, #F47F57 15.81%, #FD5656 87.57%)',
    border: '1px solid #EB7254',
    borderRadius: 6,
    color: 'white',
    minWidth: 160,
    padding: '12px 15px',
    fontWeight: 600
  },
  cardSection: {
    margin: '130px -10px 0px -10px'
  },
  cardItem: {
    paddingBottom: 40
  },
  playArrowButton: {
    padding: '12px 15px',
    fontWeight: 600
  },
  "@keyframes background-animate": {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(-360deg)'
    }
  },
  "@keyframes circleAround": {
    from: {
      transform: 'rotate(0deg) translateX(325px)'
    },
    to: {
      transform: 'rotate(-360deg) translateX(325px)'
    }
  }
}));

export default Home;
