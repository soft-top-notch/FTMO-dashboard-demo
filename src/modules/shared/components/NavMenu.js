import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useMetaMask } from 'metamask-react';
import { useDispatch } from 'react-redux';
import { getBalanceOf, getChainId } from '../helper/contract';
import { setUser } from '../../../store/reducers/auth';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.grey,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export const NavMenu = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { connect, status, account } = useMetaMask();
  const connected = status === 'connected';
  const [username, setUsername] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
      >
        <MenuIcon></MenuIcon>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem component="a" href="https://google.com" target="_blank" className={styles.menuItem}>
          <ListItemText primary="Whitepaper" />
        </StyledMenuItem>
        <StyledMenuItem component="a" href="https://google.com" target="_blank" className={styles.menuItem}>
          <ListItemText primary="Presentation/Media" />
        </StyledMenuItem>
        <StyledMenuItem className={styles.menuItem} onClick={connectAccount}>
          <ListItemText primary={username || 'Connect Wallet'} />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}

const useStyles = makeStyles({
  menuItem: {
    color: 'white'
  }
});