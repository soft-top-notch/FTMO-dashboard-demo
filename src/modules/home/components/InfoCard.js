import {
  Grid, Link, IconButton,
  CardHeader, CardContent,
  CardMedia, CardActions,
  Typography, Card,
  makeStyles, Button
} from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export const InfoCard = ({ title, content, imgURL, cardActions = true }) => {
  const styles = useStyles();

  return (
    <Card className={styles.cardRoot}>
      <CardHeader
        title={title}
        className={styles.cardHeader}
      />
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="180"
        image={imgURL}
        title="Contemplative Reptile"
        className={styles.cardImg}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={styles.cardText}>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {cardActions && (
          <>
            <IconButton aria-label="add to favorites" href="https://google.com" target="_blank">
              <TelegramIcon />
            </IconButton>
            <IconButton aria-label="share" href="https://google.com" target="_blank">
              <PlayArrowIcon />
            </IconButton>
            <IconButton aria-label="share" href="https://google.com" target="_blank">
              <TwitterIcon />
            </IconButton>
          </>
        )}
        <Grid
          container
          justifyContent="flex-end"
          alignItems="flex-end">
          <Grid item>
            <Button className={styles.buyButton} component={Link} to="/">
              Buy
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  cardRoot: {
    margin: '0px 10px',
    borderRadius: 16
  },
  cardHeader: {
    textAlign: 'center'
  },
  cardImg: {
    opacity: 0.8
  },
  cardText: {
    fontSize: 19,
    textAlign: 'center'
  },
  buyButton: {
    "&:hover": {
      textDecoration: 'none'
    }
  }
}));
