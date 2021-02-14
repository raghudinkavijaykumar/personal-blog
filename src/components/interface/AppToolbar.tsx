import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "gatsby";
import React from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarMenuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  toolbarTitle: {
    flex: 1,
    fontStyle: "h2",
    alignSelf: "center",
  },
  toobarTitleLink: {
    textDecoration: "none",
    color: "inherit",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function AppToolbar(props: { siteTitle: React.ReactNode }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.toolbarMenuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          align="center"
          variant="h5"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to="/" className={classes.toobarTitleLink}>
            {props.siteTitle}
          </Link>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      {/* <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar> */}
    </React.Fragment>
  );
}
