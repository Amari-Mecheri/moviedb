import styled from "styled-components";

export const Spinner= styled.div`
    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    border-bottom: 5px solid var(--medGrey);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin{
        0% {
            transform: rotate(0deg);
            opacity: 0.5;
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }
        50%{
            transform: rotate(180deg);
            opacity: 1;
            border-radius: 0%;
            width: 10px;
            height: 10px;
        }
        100% {
            transform: rotate(360deg);
            opacity: 0.5;
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }
    }
`;