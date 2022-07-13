import React,{useRef,useState} from "react";
import "./uploadsection.css";


const UploadSection = ()=>{
    const fileInput = useRef(null);
    const [fileName, setFileName] = useState("/images/step1.png");

    const handleChange = ()=>{
        const [file] = fileInput.current.files;
        setFileName(URL.createObjectURL(file));
    }
    return(
        <section className="section-upload">
            <div className="upload-container">
                <div className="upload-image-container">
                    <img src={fileName} alt="upload"></img>
                    <p>Selected Image will apper here 👆</p>
                </div>
                <div className="upload-btn-container" onClick={()=> fileInput.current.click()}>
                    <input type="file" ref={fileInput} onChange={handleChange} style={{"display" : "none"}} name="image" accept="image/*"></input>
                    <p>Choose Image to Upload</p>
                    <i className="gg-add-r"></i>
                </div>
            </div>
            <div className="upload-submit-container">
                <div className="upload-inputs-container">
                    <h2>Set Limit</h2>
                    <label>Set How many times your photo should be downloadable.</label>
                    <input className="input-primary" type="number" placeholder="Choose from 1 to 50"></input>
                    <p>by default it is set on 10.</p>
                </div>
                
                <div className="upload-inputs-container">
                    <h2>Set Password</h2>
                    <label>Set the Paasword</label>
                    <input type="password" className="input-primary" placeholder="Choose Password"></input>

                </div>
                
                <button className="hero-btn btn-upload">
                    Upload
                </button>
            </div>
        </section>
    );
};

export default UploadSection;