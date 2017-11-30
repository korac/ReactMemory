import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
    grid-gap: 20px 30px;
    justify-content: center;
    align-content: center;
    padding: 40px;
`;
// ${props => console.log(props.no % 2 ? 3 : 2)}
