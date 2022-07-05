import styled from "styled-components"
import { transparentize } from "polished"

export const Container = styled.form`
    padding: 2.5rem 1rem;

    header {
        margin-bottom: 2rem;
        color: #363F5F;
    }

    > div {
        display: flex;
        flex-direction: column;

        input {
            padding: 1rem;
            border: 1px solid #d7d7d7;
            background: #E7E9EE;

            font-size: 1.05rem;
            border-radius: 5px;


            + input {
                margin-top: 1rem;
            }
        }

        .submit-transaction {
            margin-top: 2rem;
            padding: 1rem 0;
            font-size: 1.2rem;
            width: 100%;
            font-weight: bold;
            background: #33CC95;
            border-radius: 5px;
            color: white;
            border: 0;
            transition: filter .2s;

            &:hover {
                filter: brightness(.9);
            }
        }
    }

`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
`

interface RadioButtonProps {
    isSelected: boolean;
    activeColor: "green" | "red"
}

const colors = {
    green: '#33CC95',
    red: '#e52e4d'
}

export const RadioButton = styled.button<RadioButtonProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.isSelected ? transparentize(.9, colors[props.activeColor]) : "transparent"};

    span {
        font-size: 1.1rem;
        margin-left: 1.5rem;
    }
`