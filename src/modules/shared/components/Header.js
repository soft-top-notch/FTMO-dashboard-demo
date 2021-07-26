import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button, Link, makeStyles } from '@material-ui/core';
import { useMetaMask } from 'metamask-react';
import { useDispatch } from 'react-redux';

import { setUser } from '../../../store/reducers/auth';
import { getBalanceOf, getChainId } from '../helper/contract';
import logo from '../../../styles/images/logo.svg';
import { NavMenu } from './NavMenu';

const Header = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { connect, status, account } = useMetaMask();
  const connected = status === 'connected';
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (account) {
      getBalanceOf(account).then(balance => {
        console.log(balance);
        dispatch(
          setUser({
            address: account.toLowerCase(),
            balance
          })
        );
      });
    } else {
      dispatch(
        setUser({
          address: null,
          balance: 0
        })
      );
    }

    if (account) {
      setUsername(account.slice(0, 4) + '...' + account.slice(-4));
    } else {
      setUsername(null);
    }
  }, [dispatch, account]);

  const connectAccount = () => {
    if (connected) {
      return;
    }
    connect().then(() => getChainId()).then(chainId => {
      console.log(chainId);
      if (chainId !== 255) {
        alert("Switch to Fantom Opera");
      }
    });
  };

  return (
    <div className={styles.headerRootFixed}>
      <Grid container alignItems="center" justifyContent="space-between" className={styles.container}>
        <Grid item>
          <Typography variant="h4" component="h3" className={styles.logoRoot}>
            <img src={logo} alt="bug" />
          </Typography>
        </Grid>

        <Grid item className={styles.actions}>
          <Grid container alignItems="center" justifyContent="flex-end" spacing={4}>
            <Grid item>
              <Typography color="textPrimary" component={Link} href="https://google.com" target="_blank">
                Whitepaper
          </Typography>
            </Grid>
            <Grid item>
              <Typography color="textPrimary" component={Link} href="https://google.com" target="_blank">
                Presentation/Media
          </Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="large" onClick={connectAccount}>
                {username || 'Connect Wallet'}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={styles.navMenu}>
          <NavMenu />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  headerRootFixed: {
    left: 0,
    right: 0,
    top: 0,
    position: 'fixed',
    background: 'rgba(0,0,0,0.08)',
    backdropFilter: 'blur(70px)',
    padding: '0px 130px',
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      padding: '0 24px'
    }
  },
  logoRoot: {
    display: 'flex'
  },
  container: {
    position: 'relative',
    padding: '15px 0'
  },
  actions: {
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    }
  },
  navMenu: {
    display: 'none',
    [theme.breakpoints.down("sm")]: {
      display: 'block'
    }
  }
}));

export default Header;
