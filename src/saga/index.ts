import { all } from 'redux-saga/effects'
import { watchMultipleSaga, watchSingleSaga } from './handlers'

export default function* rootSaga() {
  yield all([watchSingleSaga(), watchMultipleSaga()])
}
