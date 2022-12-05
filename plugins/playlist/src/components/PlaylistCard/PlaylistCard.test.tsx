/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { entityRouteRef, catalogApiRef } from '@backstage/plugin-catalog-react';
import { renderInTestApp, TestApiRegistry } from '@backstage/test-utils';
import { lightTheme } from '@backstage/theme';
import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { CatalogApi } from '@backstage/catalog-client';
import { ApiProvider } from '@backstage/core-app-api';

const catalogApi: jest.Mocked<CatalogApi> = {
  getEntityByRef: jest.fn(),
} as any;

const apis = TestApiRegistry.from([catalogApiRef, catalogApi]);

import { rootRouteRef } from '../../routes';
import { PlaylistCard } from './PlaylistCard';

describe('<PlaylistCard/>', () => {
  it('renders playlist info', async () => {
    const rendered = await renderInTestApp(
      <ThemeProvider theme={lightTheme}>
        <ApiProvider apis={apis}>
          <PlaylistCard
            playlist={{
              id: 'id1',
              name: 'playlist-1',
              description: 'test description',
              owner: 'group:default/some-owner',
              public: true,
              entities: 3,
              followers: 2,
              isFollowing: false,
            }}
          />
        </ApiProvider>
      </ThemeProvider>,
      {
        mountedRoutes: {
          '/playlists': rootRouteRef,
          '/catalog/:namespace/:kind/:name': entityRouteRef,
        },
      },
    );

    expect(rendered.getByText('playlist-1')).toBeInTheDocument();
    expect(rendered.getByText('test description')).toBeInTheDocument();
    expect(rendered.getByText('some-owner')).toBeInTheDocument();
    expect(rendered.getByText('3 entities')).toBeInTheDocument();
    expect(rendered.getByText('2 followers')).toBeInTheDocument();
  });
});
