import routes from '../../../shared/routes';

const menuItems = [
  {
    label: routes.PREMIERES.name,
    path: routes.PREMIERES.path,
  },
  {
    label: routes.FILMS.name,
    path: `${routes.FILMS.path}/top`,
  },
  {
    label: routes.SERIES.name,
    path: `${routes.SERIES.path}/top`,
  },
  {
    label: routes.ACTORS.name,
    path: routes.ACTORS.path,
  },
  {
    label: routes.SAVED.name,
    path: routes.SAVED.path,
  },
];

export default menuItems;
