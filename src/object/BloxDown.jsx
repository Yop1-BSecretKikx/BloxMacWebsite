import { useState } from "react"

export default function BloxDown () {

    function currentVersion () {
        return (
            <span>v0.0.1</span>
        )
    }

    const [show, setshow] = useState(false)


    const handlebar = () => {
        setshow(!show)
    }
    return (
        <>
        
        <h1 className="Bloxdown">

            <p className="ExplicationAboutBloxMac">Enjoy a whole new Roblox experience on your Mac. BloxMac is a super-fast, secure, and tailor-made Roblox launcher for macOS<br/>
            <button className="BtnDownload" id="ShowBloxBownload" onClick={handlebar}>Download the latest version {currentVersion()}</button>
            

            </p>
            <img className="Logo" src="./Logo.png" alt="" />
        </h1>
        {show ?
            <div className="DownloadBox"  id="DownloadBox">
                <div className="boxDownload">
                <a href="#" className="DownloadLink" download>Download X64</a>
                </div>
                <div className="boxDownload">
                <a href="#" className="DownloadLink">Download ARM64</a>
                </div>
            </div>:null
            
}
        </>
    )
}