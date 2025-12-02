import { Container } from "./ui/container.tsx";
import { Header } from "./ui/header";
import { Content } from "./ui/content";
import { styled } from "@linaria/react";
import { Sidebar } from "./ui/sidebar";
import "./libs/i18n";

export const App = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
        <Content />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`;
