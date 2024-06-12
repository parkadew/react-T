import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from "./libs/routes/router"
import { ThemeProvider } from 'styled-components';
import { theme } from './libs/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}> 
                  {/*key = {value}*/}  
      <RouterProvider router={router} />
    </ThemeProvider>
    // 컴포넌트
  );
}
export default App;
