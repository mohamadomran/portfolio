import { Global } from "@emotion/react";

export const fonts = {
    heading: "'Prometo Trial', sans-serif",
    body: "'Prometo Trial', sans-serif",
};

export const GlobalFonts = () => (
    <Global
        styles={`
        /* latin */
        @font-face {
            font-family: 'Prometo Trial';
            font-style: normal;
            font-weight: 450;
            src: local('Prometo Trial'), url('https://fonts.cdnfonts.com/s/83741/Prometo_Trial_Rg.woff') format('woff');
        }
        @font-face {
            font-family: 'Prometo Trial';
            font-style: italic;
            font-weight: 450;
            src: local('Prometo Trial'), url('https://fonts.cdnfonts.com/s/83741/Prometo_Trial_It.woff') format('woff');
        }
        @font-face {
            font-family: 'Prometo Trial';
            font-style: normal;
            font-weight: 500;
            src: local('Prometo Trial'), url('https://fonts.cdnfonts.com/s/83741/Prometo_Trial_Md.woff') format('woff');
        }
        @font-face {
            font-family: 'Prometo Trial';
            font-style: italic;
            font-weight: 500;
            src: local('Prometo Trial'), url('https://fonts.cdnfonts.com/s/83741/Prometo_Trial_MdIt.woff') format('woff');
        }
        @font-face {
            font-family: 'Prometo Trial';
            font-style: normal;
            font-weight: 700;
            src: local('Prometo Trial'), url('https://fonts.cdnfonts.com/s/83741/Prometo_Trial_Bd.woff') format('woff');
        }
        @font-face {
            font-family: 'Prometo Trial';
            font-style: italic;
            font-weight: 700;
            src: local('Prometo Trial'), url('https://fonts.cdnfonts.com/s/83741/Prometo_Trial_BdIt.woff') format('woff');
        }
        @font-face {
            font-family: 'Prometo Trial';
            font-style: normal;
            font-weight: 900;
            src: local('Prometo Trial'), url('https://fonts.cdnfonts.com/s/83741/Prometo_Trial_Blk.woff') format('woff');
        }
        @font-face {
            font-family: 'Prometo Trial';
            font-style: italic;
            font-weight: 900;
            src: local('Prometo Trial'), url('https://fonts.cdnfonts.com/s/83741/Prometo_Trial_BlkIt.woff') format('woff');
        }
        `}
    />
);
