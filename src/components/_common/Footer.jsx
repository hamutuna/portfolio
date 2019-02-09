// @flow
import React from 'react';

import * as s from '../../styles/components/_common/Footer';

import injectNaviItems from '../_hoc/injectNaviItems';
import { anchors } from './NaviItem';

import type { NaviItem } from '../_hoc/injectNaviItems';
import type { ImageSharp } from '../../../entities/types';

type Props = {
  pageTopImage: ImageSharp,
};

const Footer = (props: Props) => {
  const { pageTopImage } = props;
  return (
    <s.Footer>
      <nav>
        <s.PageTop
          href="#"
          onClick={() => {
            const target = document.querySelector(`#${anchors.firstView}`);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
              });
            }
          }}
        >
          <s.PageTopImage resolutions={pageTopImage.resolutions} />
          <s.PageTopText>PAGE TOP</s.PageTopText>
        </s.PageTop>
      </nav>
      <s.Copy>&copy;tuna All rights reserved.</s.Copy>
    </s.Footer>
  );
};

export default injectNaviItems(Footer);
