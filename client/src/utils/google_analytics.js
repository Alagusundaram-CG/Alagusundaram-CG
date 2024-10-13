import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  // ReactGA.initialize('G-248SKQ7Z79');
};

// Log page views
export const logPageView = () => {
  // ReactGA.set({ page: window.location.pathname });
  // ReactGA.pageview(window.location.pathname);
};

// Log custom events
export const logEvent = (category = '', action = '', label = '') => {
  console.log(category, action);
  if (category && action) {
    // ReactGA.event({ category, action, label });
  }
};

// Log exceptions
export const logException = (description = '', fatal = false) => {
  if (description) {
    // ReactGA.exception({ description, fatal });
  }
};
