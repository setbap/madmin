import { FC, useMemo, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Appbar from "./appbar";
import { path as DashboardPath, title as DashboardTitle } from "../pages/index";
import {
  path as UsersListPath,
  title as UsersListTitle,
} from "../pages/users_list";
import {
  path as BuildingListPath,
  title as BuildingListTitle,
} from "../pages/building_list";
import { useHistory } from "react-router-dom";
import { DrawerWidth } from "../utils/utils";
import { Link as RouterLink } from "react-router-dom";
import { forwardRef } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    active: {
      backgroundColor: theme.palette.primary.light,
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: DrawerWidth,
        flexShrink: 0,
      },
    },

    toolbar: {
      ...theme.mixins.toolbar,
      backgroundColor: theme.palette.primary.main,
    },
    toolbarFreeSpace: {
      ...theme.mixins.toolbar,
    },
    listItem: {
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(0, 0, 1, 0),
    },
    list: {
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(0, 2, 0, 2),
    },
    drawerPaper: {
      width: DrawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const Layout: FC<{ title: string }> = ({ children, title }) => {
  const classes = useStyles();
  const pages = [
    { route: DashboardPath, title: DashboardTitle },
    { route: BuildingListPath, title: BuildingListTitle },
    { route: UsersListPath, title: UsersListTitle },
  ];

  const history = useHistory();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function ListItemLink({
    icon,
    primary,
    to,
    isActive,
  }: {
    icon: JSX.Element;
    primary: string;
    to: string;
    isActive?: boolean;
  }) {
    const renderLink = useMemo(
      () =>
        forwardRef((itemProps, ref) => (
          <RouterLink
            to={to}
            // @ts-ignore
            ref={ref}
            {...itemProps}
          />
        )),
      [to]
    );

    return (
      <li>
        <ListItem
          className={classes.listItem + ` ${isActive ? classes.active : ""} `}
          button
          component={renderLink}
        >
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List className={classes.list}>
        {pages.map(function ({ route, title }, index) {
          return (
            <ListItemLink
              icon={<InboxIcon />}
              key={route}
              primary={title}
              isActive={history.location.pathname === route}
              to={route}
            />
          );
        })}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Appbar title={title} onOpenClick={handleDrawerToggle} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            anchor="left"
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbarFreeSpace} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
