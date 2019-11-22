import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: transform .2s, box-shadow .2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
  }

  h4 {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.primary};
    padding: 1.5rem 1.5rem .8rem;

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }

  p {
    text-align: left;
    color: #888;
    padding: 0 1.5rem;
    flex: 1;
    margin-bottom: 1.5rem;
  }
`;

export const RepositoryStats = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
  margin-top: auto;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;

    & + div {
      border-left: 1px solid #ddd;
    }

    svg {
      width: 17px;
      height: 17px;
      color: ${({ theme }) => theme.accent};
    }

    span {
      color: #666;
      font-size: 1.5rem;
      margin-top: .3rem;
    }
  }
`;
