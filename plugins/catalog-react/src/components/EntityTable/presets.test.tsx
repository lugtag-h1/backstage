/*
 * Copyright 2020 The Backstage Authors
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

import {
  ComponentEntity,
  RELATION_OWNED_BY,
  RELATION_PART_OF,
  SystemEntity,
} from '@backstage/catalog-model';
import { renderInTestApp, TestApiRegistry } from '@backstage/test-utils';
import { waitFor, screen } from '@testing-library/react';
import React from 'react';
import { entityRouteRef } from '../../routes';
import { EntityTable } from './EntityTable';
import { componentEntityColumns, systemEntityColumns } from './presets';
import { catalogApiRef } from '../../api';
import { CatalogApi } from '@backstage/catalog-client';
import { ApiProvider } from '@backstage/core-app-api';

const catalogApi: jest.Mocked<CatalogApi> = {
  getEntityByRef: jest.fn(),
} as any;

const apis = TestApiRegistry.from([catalogApiRef, catalogApi]);

describe('systemEntityColumns', () => {
  it('shows systems', async () => {
    const entities: SystemEntity[] = [
      {
        apiVersion: 'backstage.io/v1alpha1',
        kind: 'System',
        metadata: {
          name: 'my-system',
          namespace: 'my-namespace',
          description: 'Some description',
        },
        spec: {
          owner: 'owner-data',
        },
        relations: [
          {
            type: RELATION_PART_OF,
            targetRef: 'domain:my-namespace/my-domain',
          },
          {
            type: RELATION_OWNED_BY,
            targetRef: 'group:default/test',
          },
        ],
      },
    ];

    await renderInTestApp(
      <ApiProvider apis={apis}>
        <EntityTable
          title="My Systems"
          entities={entities}
          emptyContent={<div>EMPTY</div>}
          columns={systemEntityColumns}
        />
      </ApiProvider>,
      {
        mountedRoutes: {
          '/catalog/:namespace/:kind/:name/*': entityRouteRef,
        },
      },
    );

    await waitFor(() => {
      expect(screen.getByText('my-namespace/my-system')).toBeInTheDocument();
      expect(screen.getByText('my-namespace/my-domain')).toBeInTheDocument();
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByText(/Some/)).toBeInTheDocument();
    });
  });
});

describe('componentEntityColumns', () => {
  it('shows components', async () => {
    const entities: ComponentEntity[] = [
      {
        apiVersion: 'backstage.io/v1alpha1',
        kind: 'Component',
        metadata: {
          name: 'my-component',
          namespace: 'my-namespace',
          description: 'Some description',
        },
        spec: {
          type: 'service',
          lifecycle: 'production',
          owner: 'owner-data',
        },
        relations: [
          {
            type: RELATION_PART_OF,
            targetRef: 'system:my-namespace/my-system',
          },
          {
            type: RELATION_OWNED_BY,
            targetRef: 'group:default/test',
          },
        ],
      },
    ];

    await renderInTestApp(
      <ApiProvider apis={apis}>
        <EntityTable
          title="My Components"
          entities={entities}
          emptyContent={<div>EMPTY</div>}
          columns={componentEntityColumns}
        />
      </ApiProvider>,
      {
        mountedRoutes: {
          '/catalog/:namespace/:kind/:name/*': entityRouteRef,
        },
      },
    );

    await waitFor(() => {
      expect(screen.getByText('my-namespace/my-component')).toBeInTheDocument();
      expect(screen.getByText('my-namespace/my-system')).toBeInTheDocument();
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByText('production')).toBeInTheDocument();
      expect(screen.getByText('service')).toBeInTheDocument();
      expect(screen.getByText(/Some/)).toBeInTheDocument();
    });
  });
});
