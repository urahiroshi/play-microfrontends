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
    <div>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </div>
    <div>
      <Link href='/other'>
        <a>Other</a>
      </Link>
    </div>
    <div>
      <Link href='/dynamic'>
        <a>Dynamic</a>
      </Link>
    </div>
  </div>
)
