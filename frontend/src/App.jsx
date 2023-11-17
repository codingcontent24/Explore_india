import react from 'react';
import Layout from './component/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
const App = () => {
    const theme={
        color:{
            bgc_1:"#ccc",
            bg_btn:"rgb(244, 59, 108)",
        }
    }
    return (
        <>
            <ThemeProvider theme={theme}>
               <GlobalStyle/>
                <Layout />
            </ThemeProvider>
        </>
    )
}



export default App; 