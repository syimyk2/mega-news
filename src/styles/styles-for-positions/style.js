import styled from 'styled-components'

export const Flex = styled.div`
   width: ${(props) => props.width || ''};
   display: flex;
   flex-direction: ${(props) => props.direction || 'row'};
   align-items: ${(props) => props.align || 'stretch'};
   justify-content: ${(props) => props.justify || 'stretch'};
   flex-wrap: ${(props) => props.wrap || 'nowrap'};
   gap: ${(props) => props.gap || '0px'};
   margin: ${({ margin }) => margin || '0'};
   margin-left: ${({ marginLeft }) => marginLeft || '0'};
   height: ${({ height }) => height || ''};
   max-width: ${({ maxWidth }) => maxWidth || ''};
`
export const Centered = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`
