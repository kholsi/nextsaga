import { fetchMultipleFailure, fetchMultipleSuccess } from '@/reducers'
import { IMultipleState } from '@/reducers/slices/multiple'
import { multipleApi } from '@/services'
import { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'

function* fetch() {
  try {
    const response: AxiosResponse<IMultipleState> = yield call(
      multipleApi.endpoints.multiple.useLazyQuery
    )
    yield put(fetchMultipleSuccess(response.data))
  } catch (error) {
    yield put(fetchMultipleFailure(error))
  }
}

export default function* watch() {
  yield takeEvery('FETCH_MULTIPLE', fetch)
}
