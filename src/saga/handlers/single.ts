import { fetchSingleFailure, fetchSingleSuccess } from '@/reducers'
import { ISingleState } from '@/reducers/slices'
import { singleApi } from '@/services'
import { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'

function* fetch() {
  try {
    const response: AxiosResponse<ISingleState> = yield call(
      singleApi.endpoints.single.useLazyQuery
    )
    yield put(fetchSingleSuccess(response.data))
  } catch (error) {
    yield put(fetchSingleFailure(error))
  }
}

export default function* watch() {
  yield takeEvery('FETCH_SINGLE', fetch)
}
