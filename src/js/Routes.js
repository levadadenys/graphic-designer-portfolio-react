import AboutPage from './pages/AboutPage';
import SkillsetPage from './pages/SkillsetPage';
import PortfolioPage from './pages/PortfolioPage';
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
    path: '/contact-me',
    component: ContactsPage,
  },
  {
    component: NotFoundPage
  }
]);