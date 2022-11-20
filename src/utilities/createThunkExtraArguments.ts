import { RootState, ThunkExtraArguments } from '../store/types';
import { ApiClient } from './clients/api';
import { getFetchWithAuth } from './clients/fetch';

const createThunkExtraArgs = (): ThunkExtraArguments => ({
  api: (
    state: RootState,
  ): ApiClient => new ApiClient(getFetchWithAuth(state)),
});

export default createThunkExtraArgs;
