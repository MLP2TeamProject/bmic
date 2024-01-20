'use client';
import { textState } from '@/store';
import React from 'react';
import { useRecoilState } from 'recoil';

function TextView() {
  const [text, setText] = useRecoilState(textState);
  return <div>TextView:{text}</div>;
}

export default TextView;
