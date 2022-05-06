import React, { useEffect } from 'react'
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
});

function Videojuego() {

    

    //VARIABLES
    useEffect(() => {         //clase             //método
        unityContext.send("GameController", "SpawnEnemies", localStorage.getItem("usId"))
    })

    return (
        //ES EL VIDEOJUEGO
        <Unity unityContext={unityContext} />
    );


}

export default Videojuego