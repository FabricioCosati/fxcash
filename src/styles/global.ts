import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }

        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: #E5E5E5;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    .modal-overlay {
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        background: #fff;
        padding: 3rem;
        border-radius: .25rem;
        width: 100%;
        max-width: 576px;
        position: relative;

    }

    .close-react-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        border: 0;
        background: transparent;
        transition: filter .2s;

        &:hover {
            filter: brightness(.8);
        }
    }
`