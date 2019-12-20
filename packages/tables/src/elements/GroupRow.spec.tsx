/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import { Table } from './Table';
import { Body } from './Body';
import { GroupRow } from './GroupRow';

describe('GroupRow', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLTableRowElement>();
    const { getByTestId } = render(
      <Table>
        <Body>
          <GroupRow data-test-id="groupRow" ref={ref} />
        </Body>
      </Table>
    );

    expect(getByTestId('groupRow')).toBe(ref.current);
  });

  it('applies default styling by default', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <GroupRow data-test-id="groupRow" />
        </Body>
      </Table>
    );
    const groupRow = getByTestId('groupRow');

    expect(groupRow).toHaveClass('c-table__row');
    expect(groupRow).toHaveClass('c-table__row--group');
  });
});