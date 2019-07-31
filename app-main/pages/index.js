import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default () => (
  <div>
    <Title>
      My page
    </Title>
    <Link href='/about'>
      <a>About</a>
    </Link>
  </div>
)
