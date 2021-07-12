import RequestDescription from './RequestDescription'
import ResponseDecription from './ResponseDecription'

export default function OperationDescription() {
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-12">
          <RequestDescription />
        </div>
      </div>
      <div className="row mt-2 ">

        <div className="col-md-12">
          <ResponseDecription />
        </div>
      </div>
    </>
  )
}
