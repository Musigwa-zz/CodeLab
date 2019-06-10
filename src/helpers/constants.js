export const colors = ({ opacity = 1 } = {}) => ({
  primary: `rgba(19, 206, 102, ${opacity})`,
  primaryLight: `rgba(99, 255, 149, ${opacity})`,
  primaryDark: `rgba(0, 156, 57, ${opacity})`,
  secondary: `rgba(255, 255, 255, ${opacity})`,
  secondaryLight: `rgba(255, 255, 255, ${opacity})`,
  secondaryDark: `rgba(204, 204, 204, ${opacity})`,
  primaryText: `rgba(255, 255, 255, ${opacity})`,
  secondaryText: `rgba(46, 78, 109, ${opacity})`
});

export const baseURL = 'https://api.github.com';

export const metrics = ({ color = 'secondaryDark', opacity = 1 }) => ({
  border: {
    borderWith: 0.5,
    borderColor: colors({ opacity })[color]
  }
});
