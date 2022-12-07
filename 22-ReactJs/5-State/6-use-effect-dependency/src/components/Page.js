import React, { useEffect, useState } from 'react'

export default function Page() {
    const [count, setCount] = useState(5)
    useEffect(() => {
        // if (count > 0) {
        //     setTimeout(()=>{
        //     setCount(count-1)
        // },1000)
        // }
        const timer = count > 0 && setTimeout(() => {
            setCount(count - 1)
        }, 1000)
        return ()=> clearTimeout(timer)
    }, [count])
    const repeat = () => {
        clearTimeout(setCount(5))
    }
    return (
        <div>
            {count>0 &&<h3>{count} saniyeniz kaldı.</h3>}
            {count == 0 && <p>Süreniz doldu</p>}
            {count <= 0 && <button type="button" onClick={()=> repeat()}>Tekrar Gönder</button>}
        </div>

    )
}
