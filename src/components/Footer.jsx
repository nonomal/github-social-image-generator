/* eslint-disable react/jsx-no-target-blank */
import styled from 'styled-components';
import { Divider } from 'antd';
import { TwitterCircleFilled, WeiboCircleFilled } from '@ant-design/icons';
const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 3rem;
  font-size: 0.8rem;
  color: #ddd;
  .producthunt {
    margin-bottom: 0.5rem;
    z-index: 999;
  }
  .copyright,
  .icp {
    z-index: 999;
    margin-bottom: 1rem;
    a {
      color: #666;
      padding: 0 0.4rem;
    }
  }
  .social {
    z-index: 999;
    font-size: 0.6rem;
    display: flex;
    margin-bottom: 0.5rem;
    > a {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      padding: 0 0.5rem;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Divider />
      <div className="social">
        <a href="//twitter.com/wsygc" target="_blank">
          <TwitterCircleFilled style={{ fontSize: '1.2rem' }} />
          @wsygc
        </a>
        <a href="//weibo.com/yanggc2014" target="_blank">
          <WeiboCircleFilled style={{ fontSize: '1.2rem' }} />
          @Zerosoul_Man
        </a>
      </div>
      <div className="copyright">
        Copyright © 2019 by
        <a href="//yangerxiao.com" target="_blank">
          Tristan
        </a>
      </div>
      <div className="icp">
        <a rel="noopener noreferrer" target="_blank" href="http://www.beian.miit.gov.cn/">
          京ICP备16015459号-1
        </a>
      </div>
    </Wrapper>
  );
}
