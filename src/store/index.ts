/* eslint-disable indent */
import produce, { Draft } from 'immer';
import createGlobalSlice, { GlobalSlice } from 'reducers/Global';
import create, State, { GetState, StateCreator, StoreApi } from 'zustand';
import { NamedSet } from 'zustand/middleware';

export const immer =
  <
    T extends State,
    CustomSetState extends NamedSet<T>,
    CustomGetState extends GetState<T>,
    CustomStoreApi extends StoreApi<T>,
    >(
      config: StateCreator<
        T,
        (partial: ((draft: Draft<T>) => void) | T, replace?: boolean, name?: string) => void,
        CustomGetState,
        CustomStoreApi
      >,
  ): StateCreator<T, CustomSetState, CustomGetState, CustomStoreApi> =>
    (set, get, api) =>
      config(
        (partial, replace, name) => {
          const nextState =
            typeof partial === 'function' ? produce(partial as (state: Draft<T>) => T) : partial;
          return set(nextState, replace, name);
        },
        get,
        api,
      );

export type IStore = GlobalSlice;

export type StoreSlice<T> = (
  set: NamedSet<IStore>,
  get: GetState<IStore>,
  api: StoreApi<IStore>,
) => T;

const useStore = create<IStore, NamedSet<IStore>, GetState<IStore>, StoreApi<IStore>>(
  immer((set, get, api) => ({
    ...createGlobalSlice(set as NamedSet<IStore>, get, api),
  })),
);

export default useStore;
