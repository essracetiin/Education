import React from 'react'
import Confirm from './Confirm'

export default function Personnal({plist}) {
    let html = plist.map(p=> {
        return (
            <li>{p.name} {p.surname} {p.salary}</li>
        )
    })
  return (
    <ul>
        <Confirm>
        {html}
        </Confirm>
    </ul>
  )
}
