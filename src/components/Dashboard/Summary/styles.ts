import styled from "styled-components";

export const Container = styled.div`
    margin-top: -5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    div {
        background: #fff;
        padding: 2rem 2rem;
        border-radius: 2px;
        color: #363F5F;

        header {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            font-size: 2rem;
            display: block;
            margin-top: 2rem;
        }

        &:last-child {
            background: #33CC95;
            color: #fff;
        }
    }
`