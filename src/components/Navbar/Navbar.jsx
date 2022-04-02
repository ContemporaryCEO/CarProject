import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { links } from './navbarConfiguration'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'

const pages = links

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  /* Account menu handler */
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget)
  // }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (<Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top', horizontal: 'right'
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
              vertical: 'top', horizontal: 'right'
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>)

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (<Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
              vertical: 'top', horizontal: 'right'
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
              vertical: 'top', horizontal: 'right'
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error" component={MailIcon}>
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge color="error" component={NotificationsIcon}>
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
        </Menu>)
  return (<>
      <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                              vertical: 'bottom', horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top', horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                              display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {pages.map((page) => (<MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        align={'center'}
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (<Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {/* Account icon */}
                        {/* <Tooltip title="Open settings"> */}
                        {/*    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
                        {/*        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                        {/*    </IconButton> */}
                        {/* </Tooltip> */}
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                              vertical: 'top', horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top', horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}/>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error" component={MailIcon}>
                                <MailIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error" component={NotificationsIcon}>
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
    </>

  )
}
export default ResponsiveAppBar
