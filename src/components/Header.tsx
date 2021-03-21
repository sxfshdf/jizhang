import styled from 'styled-components';
import Variables from '../variables';

const HeaderWrapper = styled.div`
  height: 44px;
  display: flex;
  background: ${Variables.$blue};
`
const IconWrapper = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
`

const Header = (props: any) => {
  return (
    <HeaderWrapper>
      <IconWrapper />
      <TitleWrapper>{props.title ? props.title : 'Title'}</TitleWrapper>
      <IconWrapper />
    </HeaderWrapper>
  )
}

export default Header
