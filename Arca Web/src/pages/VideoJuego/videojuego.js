import React, { useEffect } from 'react'
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: 'unity/Build/JuegoGL2.loader.js',
    dataUrl: 'unity/Build/JuegoGL2.data',
    frameworkUrl: 'unity/Build/JuegoGL2.framework.js',
    codeUrl: 'unity/Build/JuegoGL2.wasm',
});

const mystyle = {
    width: "100%",
    height: "auto"
}

function Videojuego() {

    useEffect(() => {     
        unityContext.on("progress",(progress)=>{
            if(progress === 1){
                setTimeout(()=>{
                    unityContext.send("id","getUser",localStorage.getItem("usId"))
                },0)
            }
        })
        
    },[])
    return (        
        <Unity style={mystyle} unityContext={unityContext} />
    );


}

export default Videojuego