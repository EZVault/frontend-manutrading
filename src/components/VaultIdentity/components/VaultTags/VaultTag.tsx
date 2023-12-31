import { styles } from './styles';
import { makeStyles } from '@material-ui/core';
import type { ReactNode } from 'react';
import { forwardRef, memo } from 'react';
import clsx from 'clsx';
import type { TooltipProps } from '../../../Tooltip';
import { Tooltip } from '../../../Tooltip';

const useStyles = makeStyles(styles);

export type VaultTagProps = {
  className?: string;
  children: ReactNode;
};
export const VaultTag = memo(
  forwardRef<HTMLDivElement, VaultTagProps>(function VaultTag({ children, className }, ref) {
    const classes = useStyles();
    return (
      <div className={clsx(classes.vaultTag, className)} ref={ref}>
        {children}
      </div>
    );
  })
);

export type VaultTagWithTooltipProps = {
  className?: string;
  children: ReactNode;
} & TooltipProps;
export const VaultTagWithTooltip = memo(
  forwardRef<HTMLDivElement, VaultTagWithTooltipProps>(function VaultTagWithTooltip(
    { children, className, triggerClass, ...rest },
    ref
  ) {
    const classes = useStyles();
    return (
      <Tooltip triggerClass={clsx(classes.vaultTag, className, triggerClass)} ref={ref} {...rest}>
        {children}
      </Tooltip>
    );
  })
);
