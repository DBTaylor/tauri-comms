import * as React from 'react'
import {render} from 'react-dom'
import {useState} from 'react'
import {invoke} from '@tauri-apps/api'

const App = () => {
    let [msg, setMsg] = useState("Hello World")
    React.useEffect(()=>{
        invoke("test")
            .then((res: any) =>
                setMsg("Ok: " + res?.toString() ?? "nothing")
            )
            .catch(err =>
                setMsg("Err: " + err.toString())
            )
    }, [])
    return <h1>
        {msg}
    </h1>
}

render(<App/>, document.getElementById('app'))