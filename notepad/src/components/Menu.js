import React from 'react'


export default function menu() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
    <a className="navbar-brand" href="/">Notepad</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className = "Buttons">
      <button type="button" class="btn btn-success me-2">Save</button>
      <button type="button" class="btn btn-primary">History</button>

      </div>
    </div>
    </nav>
    </>
  )
}




