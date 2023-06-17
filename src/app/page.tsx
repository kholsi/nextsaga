'use client'

import { DatePicker } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #7c0682;
  padding: 30px;
  margin: 3rem;
  h1 {
    color: #fff;
    margin-top: 0;
  }
  p {
    background-color: #ffa500;
    color: #000;
    padding: 1rem;
    margin-top: 2rem;
    margin-bottom: 0;
  }
`

export default function Home() {
  return (
    <Wrapper>
      <h1>Page</h1>
      <DatePicker />
      <p>TODO: Redux state demo!</p>
    </Wrapper>
  )
}
