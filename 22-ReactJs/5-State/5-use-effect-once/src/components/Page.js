import {useEffect, useState} from "react";

export default function Page() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    },[]);
    return <h3>Sayaç Değeri : {count}</h3>;
}
