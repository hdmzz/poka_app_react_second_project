import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Retour</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Suivant</button>}
        </div>
    )
}
