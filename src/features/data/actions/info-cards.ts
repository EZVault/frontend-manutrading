import { createAsyncThunk } from '@reduxjs/toolkit';
import type { BeefyState } from '../../../redux-types';
import { getConfigApi } from '../apis/instances';
import type { InfoCardsConfig } from '../apis/config-types';

export interface FulfilledAllInfoCardsPayload {
  cards: InfoCardsConfig;
}

export const fetchAllInfoCards = createAsyncThunk<
  FulfilledAllInfoCardsPayload,
  void,
  { state: BeefyState }
>('infoCards/fetchAllInfoCards', async () => {
  const api = getConfigApi();
  const cards = await api.fetchAllInfoCards();
  return { cards };
});
