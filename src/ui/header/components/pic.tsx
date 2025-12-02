import { styled } from "@linaria/react";

type Props = {
  className?: string;
};

export const Pic: React.FC<Props> = (props) => {
  return (
    <Main {...props}>
      <img src="/images/pic.jpg" alt="pic" />
    </Main>
  );
};

const Main = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
