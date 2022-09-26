import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import { useRef } from 'react';
import { ChangeEvent, useState } from 'react';
import { CodeInputFieldWrapper, InputField } from './styles/codeInputField.s';
import * as Palette from '../../assets/colorPalette';

interface propsType {
  code: string[];
  setCode: React.Dispatch<React.SetStateAction<string[]>>;
  codeIsTrue: boolean;
}

export const CodeInputField = (props: propsType) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let updatedCode = [...props.code];
    updatedCode[index] = e.target.value;
    props.setCode(updatedCode);
  };

  const ref = useRef<HTMLInputElement[]>([]);

  return (
    <CodeInputFieldWrapper>
      {props.code.map((_, i) => {
        return (
          <InputField
            type={'text'}
            ref={(elem) => (ref.current[i] = elem!)}
            maxLength={1}
            key={i}
            value={props.code[i]}
            onChange={(e) => {
              handleInput(e, i);
              if (e.target.value.length >= 1) {
                if (i < 5) ref.current[i + 1]!.focus();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && props.code[i] === '') {
                if (i > 0) ref.current[i - 1]!.focus();
              }
            }}
            style={
              props.codeIsTrue
                ? { border: '0' }
                : { border: `1.5px solid ${Palette.NASHOR_RED_ERROR}` }
            }
          />
        );
      })}
    </CodeInputFieldWrapper>
  );
};
