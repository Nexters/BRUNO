export enum KlipApiStatus {
  PREPARED = 'prepared',
  REQUESTED = 'requested',
  COMPLETED = 'completed',
  CANCELED = 'canceled',
  ERROR = 'error',
}

export enum Stage {
  INITIAL = 'inital',
  PREPARE = 'prepare',
  REQUEST = 'request',
  RESULT = 'result',
  REQUEST_FAIL = 'request_fail',
}
