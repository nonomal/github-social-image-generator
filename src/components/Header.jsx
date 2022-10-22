import React, { useState, useEffect } from 'react';
import { Divider, Affix, Input, Badge, message } from 'antd';
import styled from 'styled-components';
import { getRepo, getQueryValue } from '../utils';

import Cases from './Cases';
const { Search } = Input;
const Wrapper = styled.header`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 34rem;
  margin: 0 auto;

  .ant-badge {
    width: 100%;
    position: sticky;
    top: 20;
  }
`;
const LOCAL_REPO_URL = getQueryValue('repo') || localStorage.getItem('LOCAL_REPO_URL') || '';

export default function Header({ gameover, loading, fetchRepo, total }) {
  const [repo, setRepo] = useState(null);
  const [input, setInput] = useState(LOCAL_REPO_URL);
  useEffect(() => {
    console.log({ gameover, total });
    if (total === null || (typeof gameover !== 'undefined' && !gameover)) {
      let tmpRepo = getRepo(input);
      setRepo(tmpRepo);
      console.log({ gameover, tmpRepo, total });

      if (tmpRepo && total === null) {
        fetchRepo(tmpRepo);
      }
    }
  }, [fetchRepo, input, gameover, total]);
  const handleChange = ({ target }) => {
    const { value } = target;

    setInput(value);
  };
  return (
    <Wrapper>
      <Cases updateInput={setInput} />
      <Affix offsetTop={20} style={{ width: '100%' }}>
        <Badge
          style={{ backgroundColor: '#87d068' }}
          count={repo ? total : 0}
          overflowCount={Number.POSITIVE_INFINITY}
        >
          <Search
            allowClear
            value={input}
            addonBefore={'URL'}
            placeholder="eg: https://github.com/zerosoul/PIW"
            enterButton="Awesome"
            onChange={handleChange}
            disabled={loading || !!gameover}
            onSearch={val => {
              if (!val) {
                return;
              }
              if (!val) {
                message.warning('Please input a github repo URL');
                return;
              }
              console.log({ repo, val });
              if (!repo) {
                message.warning('URL invalid');
                return;
              }
              console.log('ddddddddd');

              fetchRepo(repo);
            }}
          />
        </Badge>
      </Affix>
      <Divider />
    </Wrapper>
  );
}
