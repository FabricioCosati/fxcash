import styled from "styled-components"

export const Container = styled.header`
    background: #5429CC;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        height: 3rem;
        padding: 0 2rem;
        border-radius: 1.8px;
        border: none;
        background: #6933FF;
        color: white;
        font-weight: bold;
        transition: filter .2s ease-in-out;

        &:hover {
            filter: brightness(0.9);
        }
    }

`