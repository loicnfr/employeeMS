import React from 'react'

const Cards = () => {
  return (
    <>
        <div className="row mt-4">
              <div className="col-md-4 mb-3">
                <div className="card rounded-2 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Salary</h4>
                  </div>
                  <div className="card-body">
                    <h4 className="my-0 fw-normal">Total:</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card rounded-2 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Expenses</h4>
                  </div>
                  <div className="card-body">
                    <h4 className="my-0 fw-normal">Total:</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card rounded-2 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Revenue</h4>
                  </div>
                  <div className="card-body">
                    <h4 className="my-0 fw-normal">Total:</h4>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Cards