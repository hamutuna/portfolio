// @flow
import * as React from 'react';

import * as s from '../../../styles/index/Works/Work';

type Props = {
  id: string,
};

export default (props: Props) => {
  const { id } = props;
  const isHalf = id === '2' || id === '3';

  return (
    <s.Work href={`works/${id}`} isHalf={isHalf}>
      {id}
    </s.Work>
  );
};
