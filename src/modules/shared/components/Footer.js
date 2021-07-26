import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Link } from '@material-ui/core';

const Footer = () => {
  const styles = useStyles();
  const footerOptions = [
    {
      title: 'Resources',
      options: [
        {
          name: 'ARTH Valuecoin',
          navigateTo: '/Valuecoin.html'
        },
        {
          name: 'Whitepaper',
          navigateTo: '/Whitepaper.html'
        },
        {
          name: 'MAHA Etherscan',
          navigateTo: '/Etherscan'
        },
        {
          name: 'ARTH Etherscan',
          navigateTo: '/Etherscan'
        }
      ]
    },
    {
      title: 'Products',
      options: [
        {
          name: 'Arthcoin',
          navigateTo: '/Arthcoin.html'
        },
        {
          name: 'Stake',
          navigateTo: '/Stake.html'
        },
        {
          name: 'Vote',
          navigateTo: '/Vote'
        }
      ]
    },
    {
      title: 'About',
      options: [
        {
          name: 'Team',
          navigateTo: '/Team.html'
        },
        {
          name: 'Partners',
          navigateTo: '/Partners.html'
        },
        {
          name: 'Tokenomics',
          navigateTo: '/Tokenomics'
        },
        {
          name: 'Ambassadors',
          navigateTo: '/Ambassadors'
        },
        {
          name: 'Brand kit',
          navigateTo: '/Brand kit'
        },
        {
          name: 'Careers',
          navigateTo: '/Careers'
        }
      ]
    },
    {
      title: 'Contact us',
      options: [
        {
          name: 'Partnership',
          navigateTo: '/Partnership.html'
        },
        {
          name: 'Marketing',
          navigateTo: '/Marketing.html'
        }
      ]
    }
  ]

  return (
    <div className={styles.footer}>
      <Grid
        container
        className={styles.root}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}>
        <Grid item>
          <Grid container justifyContent="space-between">
            {footerOptions.map((element, index) => (
              <Grid key={index} item xs={6} sm={2} md={2}>
                <Typography variant="h6" className={styles.optionTitle}>
                  {element.title}
                </Typography>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  className={styles.subOptionContainer}>
                  {element.options.map((subElement, subIndex) => (
                    <Grid key={subIndex} className={styles.subOptionItem} item>
                      <Typography component={Link} href="#" className={styles.subOptionItemNameLink}>
                        {subElement.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12} sm={12} md={4}>
              <Typography variant="h6" className={styles.optionTitle}>
                Join the community
              </Typography>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                className={`${styles.subOptionContainer} ${styles.joinCommunity}`}>
                <Grid item>
                  <Typography className={styles.subOptionItemNameText}>
                    Learn more about the MahaDAO, chat with the team and others in the community. Have your say in shaping the future of decentralized finance.
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="stretch">
                    <Grid item>
                      <Grid
                        container
                        justifyContent="flex-start"
                        className={styles.actionItems}
                      >
                        <Grid item>
                          <Typography component={Link} className={styles.social} href="https://twitter.com/TheMahaDAO">
                            <button className={styles.socialButton}><i className="faIcon fa fa-twitter"></i></button>
                          </Typography>
                          <Typography component={Link} className={styles.social} href="https://t.me/MahaDAO">
                            <button className={styles.socialButton}><i className="fa fa-telegram"></i></button>
                          </Typography>
                          <Typography component={Link} className={styles.social} href="https://medium.com/mahadao">
                            <button className={styles.socialButton}><i className="fa fa-medium"></i></button>
                          </Typography>
                          <Typography component={Link} className={styles.social} href="https://www.reddit.com/r/MahaDAO/">
                            <button className={styles.socialButton}><i className="fa fa-reddit"></i></button>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        justifyContent="flex-start"
                        className={styles.actionItems}
                      >
                        <Grid item>
                          <Typography component={Link} className={styles.social} href="https://discuss.mahadao.com/">
                            <button className={styles.socialButton}><i className="fa fa-comment"></i></button>
                          </Typography>
                          <Typography component={Link} className={styles.social} href="https://twitter.com/TheMahaDAO">
                            <button className={styles.socialButton}><i className="fa fa-facebook-f"></i></button>
                          </Typography>
                          <Typography component={Link} className={styles.social} href="https://twitter.com/TheMahaDAO">
                            <button className={styles.socialButton}><i className="fa fa-instagram"></i></button>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <div className={styles.whiteLine}></div>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid item>
              <Typography component={Link} href="#" className={styles.subOptionItemNameLink}>
                Privacy Policy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    background: '#171717',
    padding: '70px 130px',
    marginTop: 30,
    position: 'relative',
    [theme.breakpoints.down("md")]: {
      padding: '70px 24px'
    }
  },
  footerContainer: {
  },
  optionTitle: {
    opacity: 0.85
  },
  subOptionContainer: {
    paddingTop: 15
  },
  subOptionItem: {
    paddingBottom: 10
  },
  subOptionItemNameLink: {
    color: '#969699',

    "&:hover": {
      textDecoration: 'none',
      opacity: 0.85
    }
  },
  subOptionItemNameText: {
    color: '#969699'
  },
  joinCommunity: {
    height: '100%',
    [theme.breakpoints.down("sm")]: {
      alignItems: 'center',
    }
  },
  whiteLine: {
    position: 'relative',
    background: '#555',
    margin: '30px auto',
    height: '1px',
  },
  socialButton: {
    background: '#AEAEAE',
    width: 35,
    height: 35,
    borderRadius: 45,
    margin: '11px 0px',
    cursor: 'pointer',
    "& i": {
      fontSize: 22,
      color: '#262626',
      transform: 'translate(-6%, 3%)'
    },
    "&:hover": {
      background: '#fff',
      outline: 'none',
      textDecoration: 'none'
    }
  },
  social: {
    marginRight: 25
  },
  actionItems: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center'
    }
  }
}));

export default Footer;
