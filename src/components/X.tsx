import styled from "styled-components"
import Icon from 'components/Icon'

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,.4);
`

type DivProps = {
  center?: boolean,
  height?: string,
  width?: string
}

type ButtonProps = {
  cancel?: boolean
}

const MainContent = styled.div<DivProps>`
  width:  ${props => props.width ? props.width : '360px'};
  height: ${props => props.height ? props.height : '240px'};
  background: #fff;
  border-radius: 4px;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
`
const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  font-size: 16px;
  line-height: 44px;
  padding: 0 16px;
`
const CloseWrapper = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  padding: 16px;
  flex: 1;
`
const Footer = styled.div`
  padding: 4px 16px;
  text-align: right;
  > button {
    margin-left: 8px;
    &:first-child {
      margin-left: 0;
    }
  }
`
const Button = styled.button<ButtonProps>`
  font-size: 16px;
  line-height: 16px;
  color: ${props => props.cancel ? '#333' : '#fff'};
  padding: 10px 12px;
  border: ${props => props.cancel ? '1px solid #ddd' : '1px solid #0170fe'};
  background: ${props => props.cancel ? '#fff' : '#0170fe'};
  border-radius: 4px;
`

type Props = {
  title?: string,
  closable?: boolean,
  visible?: boolean,
  onClose?: () => void,
  onConfirm?: () => void
}

const X: React.FC<Props> = (props) => {
  return (
    props.visible ? <>
      <MainContent center>
        <Header>
          <Title>{props.title || 'Title'}</Title>
          {props.closable === true || props.closable === undefined ?
            <CloseWrapper onClick={props.onClose}><Icon name="close"/></CloseWrapper>
            : null
          }
        </Header>
        <Content>{props.children}</Content>
        <Footer>
          <Button onClick={props.onConfirm}>Confirm</Button>
          <Button cancel onClick={props.onClose}>Cancel</Button>
        </Footer>
      </MainContent>
      <Mask/>
    </> : null
  )
}

export {X}
