import { useState } from "react";
import QRCode from "qrcode";

const QR = () => {
    const [url, setUrl] = useState("");
    const [dataUrl, setDataUrl] = useState("");
    const venue_id = '133333372';

    const handleQRCodeGeneration = () => {
        QRCode.toDataURL(venue_id, { width: 300 }, (err, dataUrl) => {
            if (err) console.error(err);

            // set dataUrl state to dataUrl
            setDataUrl(dataUrl);
        });
    };

    return (
        <div className="app">
            <h1>QR Code Generator</h1>

            <form onSubmit={handleQRCodeGeneration}>
                <input
                    required
                    type="url"
                    placeholder="Enter a valid URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <input type="submit" value="Generate" />
            </form>

            {
                dataUrl && (
                    <div className="generated-view">
                        <img src={dataUrl} alt="Generated QR Code" />
                        <a href={dataUrl} download={`qr-code.png`} className="download-button">
                            Download QR Code
                        </a>
                    </div>
                )
            }
        </div>
    );
};

export default QR;