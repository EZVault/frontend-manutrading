import type { BeefyState } from '../../../redux-types';
import type { ChainEntity } from '../entities/chain';
import type { TokenEntity } from '../entities/token';
import { BIG_ZERO } from '../../../helpers/big-number';

export const selectAllowanceByTokenAddress = (
  state: BeefyState,
  chainId: ChainEntity['id'],
  tokenAddress: TokenEntity['address'],
  spenderAddress: string
) => {
  return (
    state.user.allowance.byChainId[chainId]?.byTokenAddress[tokenAddress.toLowerCase()]
      ?.bySpenderAddress[spenderAddress.toLocaleLowerCase()] || BIG_ZERO
  );
};
