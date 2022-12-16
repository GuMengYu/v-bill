import { Box, Button } from '@mui/material'
import { INPUT_KEY } from '@/types'
import { Backspace as BackspaceIcon } from '@mui/icons-material'
import camelCase from 'camelcase'
import React from 'react'

export default function Keyboard({
  onChange,
  onTap,
  value,
}: {
  onChange: (val: string) => void
  onTap: (code: INPUT_KEY) => void
  value: string
}) {
  function keyboardPress(code: INPUT_KEY) {
    const next = (code = '') => {
      const matcher = expressionMatch(value)
      if (matcher) {
        // not valid express
        if ((matcher.index ?? 0) + 1 === value.length) {
          return
        } else {
          value = calcExpression(value)
        }
      }
      onChange(`${value}${code}`)
    }
    switch (code) {
      case INPUT_KEY.dot: {
        const stack = value.split(/[+-]/).pop()
        if (stack === '') {
          onChange(`${value}0.`)
        } else if (stack && stack.match(/\./g)) {
          return
          // onChange(`${value}${code}`);
        } else {
          onChange(`${value}${code}`)
        }
        break
      }
      case INPUT_KEY.del: {
        const str = value.substring(0, value.length - 1)
        onChange(str || '0')
        break
      }
      case INPUT_KEY.eq: {
        next()
        break
      }
      case INPUT_KEY.confirm: {
        break
      }
      case INPUT_KEY.minus:
      case INPUT_KEY.plus: {
        next(code)
        break
      }
      default: {
        const res = resolveValue(value, code as number)
        onChange(res)
        break
      }
    }
    onTap(code)
  }

  function resolveValue(prev = '0', current = 0): string {
    if (prev === '0') {
      prev = ''
    }
    const matcher = expressionMatch(prev)
    if (matcher) {
      const stack = prev.split(/[+-]/).pop()
      const res = resolveValue(stack, current)
      const index = prev.match(/[+-]/)?.index ?? prev.length
      return `${prev.substring(0, index + 1)}${res}`
    }
    const decimal = `${prev}`.match(/\./g)
    if (decimal && decimal.length === 1) {
      const [, dec] = `${prev}`.split('.') ?? []
      if (dec.length >= 2) {
        return prev
      }
    }
    return `${prev}${current}`
  }

  function expressionMatch(str: string) {
    return str.match(/[+-]/)
  }

  function calcExpression(expression: string): string {
    try {
      let res = Function(`"use strict";return (${expression})`)() as number
      if (res < 0) {
        res = 0
      }
      return Number.isSafeInteger(res) ? `${res}` : Number(res).toFixed(2)
    } catch (e) {
      console.error(e)
      return '0'
    }
  }

  const InputButton = ({
    children,
    code = 0,
    gridColumn,
    color = 'surfaceVariant',
  }: {
    children: React.ReactNode
    code?: INPUT_KEY
    gridColumn?: string
    color?: string
  }) => {
    const textColor = `${camelCase(`on ${color}`)}.main`
    return (
      <Button
        color={color as 'primary'}
        variant='contained'
        size='large'
        sx={{
          margin: '2px',
          borderRadius: 2,
          gridColumn: gridColumn,
          fontSize: '1rem',
          boxShadow: 'none',
          color: textColor,
        }}
        onClick={e => {
          e.preventDefault()
          keyboardPress(code)
        }}
      >
        {children}
      </Button>
    )
  }
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      <InputButton code={INPUT_KEY.seven}>7</InputButton>
      <InputButton code={INPUT_KEY.eight}>8</InputButton>
      <InputButton code={INPUT_KEY.nine}>9</InputButton>
      <InputButton code={INPUT_KEY.plus} color='tertiaryContainer'>
        +
      </InputButton>

      <InputButton code={INPUT_KEY.four}>4</InputButton>
      <InputButton code={INPUT_KEY.five}>5</InputButton>
      <InputButton code={INPUT_KEY.six}>6</InputButton>
      <InputButton code={INPUT_KEY.minus} color='tertiaryContainer'>
        -
      </InputButton>

      <InputButton code={INPUT_KEY.one}>1</InputButton>
      <InputButton code={INPUT_KEY.two}>2</InputButton>
      <InputButton code={INPUT_KEY.three}>3</InputButton>
      <InputButton code={INPUT_KEY.eq} color='tertiaryContainer'>
        =
      </InputButton>
      <InputButton code={INPUT_KEY.dot}>.</InputButton>
      <InputButton code={INPUT_KEY.zero}>0</InputButton>
      <InputButton code={INPUT_KEY.del}>
        <BackspaceIcon sx={{ fontSize: '1rem' }} />
      </InputButton>
      <InputButton code={INPUT_KEY.confirm} color='primaryContainer'>
        {' '}
        完成
      </InputButton>
    </Box>
  )
}
