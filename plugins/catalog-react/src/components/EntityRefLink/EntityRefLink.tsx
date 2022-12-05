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
  Entity,
  CompoundEntityRef,
  DEFAULT_NAMESPACE,
  parseEntityRef,
  isUserEntity,
  isGroupEntity,
} from '@backstage/catalog-model';
import React, { forwardRef } from 'react';
import { entityRouteRef } from '../../routes';
import { humanizeEntityRef } from './humanize';
import { Link, LinkProps } from '@backstage/core-components';
import { useApi, useRouteRef } from '@backstage/core-plugin-api';
import {
  Button,
  Tooltip,
  Typography,
  CardContent,
  Card,
  CardActions,
  makeStyles,
} from '@material-ui/core';
import {
  usePopupState,
  bindPopover,
  bindHover,
  PopupState,
} from 'material-ui-popup-state/hooks';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import useAsync from 'react-use/lib/useAsync';
import { catalogApiRef } from '../../api';
import { Alert } from '@material-ui/lab';

/**
 * Props for {@link EntityRefLink}.
 *
 * @public
 */
export type EntityRefLinkProps = {
  entityRef: Entity | CompoundEntityRef | string;
  defaultKind?: string;
  title?: string;
  children?: React.ReactNode;
} & Omit<LinkProps, 'to'>;

type PeekAheadPopoverProps = {
  popupState: PopupState;
  entityRef: CompoundEntityRef;
};

const useStyles = makeStyles(() => {
  return {
    popoverPaper: {
      width: '20em',
    },
  };
});

export const PeekAheadPopover = ({
  popupState,
  entityRef,
}: PeekAheadPopoverProps) => {
  const entityRoute = useRouteRef(entityRouteRef);
  const classes = useStyles();
  const catalogApi = useApi(catalogApiRef);

  const {
    value: entity,
    loading,
    error,
  } = useAsync(async () => {
    if (popupState.isOpen) {
      const retrievedEntity = await catalogApi.getEntityByRef(entityRef);
      if (!retrievedEntity) {
        throw new Error(`${entityRef.name} was not found`);
      }
      return retrievedEntity;
    }
    return undefined;
  }, [popupState]);

  if (loading) {
    return null;
  }

  return (
    <HoverPopover
      PaperProps={{
        className: classes.popoverPaper,
      }}
      {...bindPopover(popupState)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Card>
        <CardContent>
          <Typography gutterBottom>{entityRef.namespace}</Typography>
          <Typography variant="h5" component="div">
            {entityRef.name}
          </Typography>
          <Typography>{entityRef.kind}</Typography>
          <Typography variant="body2">
            {error && <Alert severity="warning">{error.message}</Alert>}
            {entity && (
              <>
                {entity.metadata.description}
                <br />
                <br />
                {entity.spec?.type}
              </>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          {entity &&
            (isUserEntity(entity) || isGroupEntity(entity)) &&
            entity.spec.profile?.email && (
              <Tooltip title={`Email ${entity.spec.profile.email}`}>
                <Button
                  target="_blank"
                  href={`mailto:${entity.spec.profile.email}`}
                  size="small"
                >
                  <EmailIcon color="action" />
                </Button>
              </Tooltip>
            )}
          <Tooltip title="Show details">
            <Link component="button" to={entityRoute(entityRef)}>
              <InfoIcon color="action" />
            </Link>
          </Tooltip>
        </CardActions>
      </Card>
    </HoverPopover>
  );
};
/**
 * Shows a clickable link to an entity.
 *
 * @public
 */
export const EntityRefLink = forwardRef<any, EntityRefLinkProps>(
  (props, ref) => {
    const { entityRef, defaultKind, title, children, ...linkProps } = props;
    const entityRoute = useRouteRef(entityRouteRef);
    const popupState = usePopupState({
      variant: 'popover',
      popupId: 'entity-peek-ahead',
    });

    let kind;
    let namespace;
    let name;

    if (typeof entityRef === 'string') {
      const parsed = parseEntityRef(entityRef);
      kind = parsed.kind;
      namespace = parsed.namespace;
      name = parsed.name;
    } else if ('metadata' in entityRef) {
      kind = entityRef.kind;
      namespace = entityRef.metadata.namespace;
      name = entityRef.metadata.name;
    } else {
      kind = entityRef.kind;
      namespace = entityRef.namespace;
      name = entityRef.name;
    }

    kind = kind.toLocaleLowerCase('en-US');
    namespace = namespace?.toLocaleLowerCase('en-US') ?? DEFAULT_NAMESPACE;

    const routeParams = { kind, namespace, name };
    const formattedEntityRefTitle = humanizeEntityRef(
      { kind, namespace, name },
      { defaultKind },
    );

    const link = (
      <Link
        {...bindHover(popupState)}
        {...linkProps}
        ref={ref}
        to={entityRoute(routeParams)}
      >
        {children}
        {!children && (title ?? formattedEntityRefTitle)}
      </Link>
    );

    return (
      <>
        {title ? (
          <Tooltip title={formattedEntityRefTitle}>{link}</Tooltip>
        ) : (
          link
        )}

        <PeekAheadPopover
          popupState={popupState}
          entityRef={{ kind, namespace, name }}
        />
      </>
    );
  },
) as (props: EntityRefLinkProps) => JSX.Element;
