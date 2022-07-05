import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0 .5rem;

        th, td {
            padding: 1rem 2rem;
        }

        th {
            color: #969CB2;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            color: #969CB2;
            border: 0;
            background-color: #fff;
            border-radius: .25rem;

            &:first-child {
                color: black;
            }

            &.income {
                color: #33CC95;
            }

            &.outcome {
                color: #E52E4D;
            }
            
        }

        /* th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: .25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        } */
    }
`