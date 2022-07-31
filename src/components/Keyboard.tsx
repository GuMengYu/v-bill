import { Button, Box } from "@mui/material";
import { useRef, useState } from "react";
import { INPUTKEY } from "../types";
import { Backspace as BackspaceIcon } from "@mui/icons-material";
export default function Keyboard({
  onChange,
  value,
}: {
  onChange: (val: string) => void;
  value: string;
}) {
  const state = useRef({
    decimal: false,
  })
  const [calc, setCalc] = useState(false)
  function keybordPress(code: INPUTKEY) {
    if (code === INPUTKEY.dot) {
      state.current.decimal = !state.current.decimal 
    } else if (code === INPUTKEY.del) {
      let [int = "0", dec = "00"] = value?.split(".") ?? [];
      let [f = "0", s = "0"] = dec.split("") ?? [];
      if (s !== "0") {
        s = "0";
      } else if (f !== "0") {
        f = "0";
        state.current.decimal = false
      } else if (int !== "0") {
        let temp = int.split("");
        temp.pop();
        int = temp.length ? temp.join("") : "0";
      }
      onChange(`${int}.${f}${s}`);
    } else if (code === INPUTKEY.plus) {
      // if (calc) {
      //   const res = calcExpression(value)
      //   onChange(`${res}+`);
      // } else {
      //   setCalc(true)
      // }
      // onChange(`${value}${code}`);

    } else if (code === INPUTKEY.minus) {
      // if (calc) {
      //   const res = calcExpression(value)
      //   onChange(`${res}-`);
      // } else {
      //   setCalc(true)
      //   onChange(`${value}${code}`);
      // }
    } else if (code === INPUTKEY.confirm) {
      // const res = calcExpression(value)
      // onChange(res)
      // setCalc(false)
    } else {
      const res = resolveValue(value, code as string, state.current.decimal)
      onChange(res);
    }
  }
  function resolveValue(prev = '0:00', current = '0', resovleDecimal = false) {
    let [int = "0", dec = "00"] = prev?.split(".") ?? [];
      if (resovleDecimal) {
        let [f = "0", s = "0"] = dec.split("") ?? [];
        if (f == "0") {
          f = current as string;
        } else if (s == "0") {
          s = current as string;
        }
        dec = `${f}${s}`;
      } else {
        if (int == "0") {
          int = current as string;
        } else {
          int = `${int}${current}`;
        }
      }
      return `${int}.${dec}`
  }
  function calcExpression(expression: string): string {
    try {
      let res = Function(`"use strict";return (${expression})`)()
      if (res < 0) {
        res = 0
      }
      return Number(res).toFixed(2)
    } catch(e) {
      console.error(e)
      return '0.00'
    }
  }
  const InputButton = ({
    children,
    code = 0,
    gridColumn,
  }: {
    children: React.ReactNode;
    code?: INPUTKEY;
    gridColumn?: string;
  }) => {
    return (
      <Button
        variant="outlined"
        size="large"
        sx={{
          margin: "3px",
          gridColumn: gridColumn,
          fontSize: '1.25rem',
        }}
        onClick={(e) => keybordPress(code)}
      >
        {children}
      </Button>
    );
  }
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      <InputButton code={INPUTKEY.seven}>7</InputButton>
      <InputButton code={INPUTKEY.eight}>8</InputButton>
      <InputButton code={INPUTKEY.nine}>9</InputButton>
      <InputButton code={INPUTKEY.del}>
        <BackspaceIcon sx={{ fontSize: "1rem" }} />
      </InputButton>
      <InputButton code={INPUTKEY.four}>4</InputButton>
      <InputButton code={INPUTKEY.five}>5</InputButton>
      <InputButton code={INPUTKEY.six}>6</InputButton>
      <InputButton code={INPUTKEY.plus}>+</InputButton>
      <InputButton code={INPUTKEY.one}>1</InputButton>
      <InputButton code={INPUTKEY.two}>2</InputButton>
      <InputButton code={INPUTKEY.three}>3</InputButton>
      <InputButton code={INPUTKEY.minus}>-</InputButton>
      <InputButton code={INPUTKEY.zero} gridColumn="1/3">
        0
      </InputButton>
      <InputButton code={INPUTKEY.dot}>.</InputButton>
      <InputButton code={INPUTKEY.confirm}> {calc ? '=' : '完成'}</InputButton>
    </Box>
  );
}
