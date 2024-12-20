import styled from "styled-components";

const Rondo = () => {
  return (
    <StyledWrapper>
      <div className="rondo">
        <p>
          <span>News Image 📰</span>
        </p>
        <p>
          <span>Online Link 🔗</span>
        </p>
        <p>
          <span>Article Text 📝</span>
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .rondo {
    width: 250px;
    height: 254px;
    border-radius: 4px;
    background: rgba(33, 33, 33, 0.3); /* Set transparency here */
    display: flex;
    gap: 4px;
    padding: 0.4em;
  }

  .rondo p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.5s;
    background: rgba(33, 33, 33, 0.01); /* Set transparency here */
    border: 3px solid rgba(255, 255, 255, 0.8); /* Set transparency here */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rondo p:hover {
    flex: 4;
  }

  .rondo p span {
    min-width: 14em;
    padding: 0.5em;
    text-align: center;
    transform: rotate(-90deg);
    transition: all 0.5s;
    text-transform: none;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8); /* Set transparency here */
    letter-spacing: 0.1em;
  }

  .rondo p:hover span {
    transform: rotate(0);
  }
`;

export default Rondo;