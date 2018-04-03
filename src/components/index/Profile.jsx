// @flow
import React from 'react';

import * as s from '../../styles/index/Profile';
import { anchors } from '../_common/NaviItem';

export default () => (
  <s.Section>
    <s.Title id={anchors.profile}>Profile</s.Title>
    <s.Image />
    <s.IconWrapper>
      <s.Icon />
      <s.Icon />
    </s.IconWrapper>
    <s.Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </s.Description>
  </s.Section>
);
