import type { NextPage } from "next";
import Layout from "../components/Layout";
import styled from "styled-components";

const Wrapper = styled.h1`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const IndexPage: NextPage = () => {
    return (
        <Layout title="404">
            <Wrapper>404 | Page not found</Wrapper>
        </Layout>
    );
};

export default IndexPage;
