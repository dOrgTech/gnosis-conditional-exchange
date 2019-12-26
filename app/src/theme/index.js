const theme = {
  fonts: {
    defaultSize: '14px',
    fontFamily: `'Roboto', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    fontFamilyCode: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
  },
  colors: {
    activeListItemBackground: '#fafafa',
    darkGray: '#acacac',
    error: '#fa0000',
    mainBodyBackground: '#fafafa',
    primary: '#00be95',
    secondary: '#ff7848',
    tertiary: '#f5f5f5',
    textColor: '#333',
    textColorLight: '#888',
  },
  cards: {
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 0 18px 0 rgba(0, 0, 0, 0.08)',
    paddingHorizontal: '15px',
    paddingVertical: '20px',
    textColor: '#000',
    textColorSecondary: '#333',
    titleColor: '#000',
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    height: '60px',
    color: '#666',
  },
  footer: {
    color: '#000',
  },
  themeBreakPoints: {
    lg: '992px',
    md: '768px',
    sm: '480px',
    xl: '1024px',
    xs: '320px',
    xxl: '1280px',
    xxxl: '1366px',
  },
  borders: {
    borderColor: '#d5d5d5',
    commonBorderRadius: '5px',
  },
  paddings: {
    mainPadding: '15px',
  },
  textfield: {
    borderColor: '#d9d9d9',
    color: '#333',
    fontSize: '15px',
    fontWeight: '500',
    placeholderColor: '#666',
  },
  createSteps: {
    maxWidth: '400px',
  },
  viewMarket: {
    maxWidth: '550px',
  },
  list: {
    maxWidth: '620px',
  },
  dropdown: {
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.12)',
    lightTextColor: '#666',
    textColor: '#000',
  },
  modalStyle: {
    content: {
      backgroundColor: '#fff',
      borderColor: 'transparent',
      borderRadius: '5px',
      bottom: 'auto',
      boxShadow: '0 0 18px 0 rgba(0, 0, 0, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '0',
      height: 'fit-content',
      left: 'auto',
      margin: 'auto 0',
      overflow: 'hidden',
      padding: '15px 20px',
      position: 'relative',
      right: 'auto',
      top: 'auto',
      width: '350px',
    },
    overlay: {
      alignItems: 'unset',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'auto',
      padding: '10px',
      zIndex: '12345',
    },
  },
}

export default theme
