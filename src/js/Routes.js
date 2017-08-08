import AboutPage from './pages/AboutPage';
import SkillsetPage from './pages/SkillsetPage';
import PortfolioPage from './pages/PortfolioPage';
import OpenSourcePage from './pages/OpenSourcePage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

export default ([
  {
    path: '/'
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/skillset',
    component: SkillsetPage,
  },
  {
    path: '/portfolio',
    component: PortfolioPage,
  },
  {
    path: '/open-source',
    component: OpenSourcePage,
  },
  {
    path: '/contact-me',
    component: ContactsPage,
  },
  {
    component: NotFoundPage
  }
]);