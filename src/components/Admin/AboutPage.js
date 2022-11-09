import React,{useState, useEffect} from "react";
const AboutPage = () => {
 
    return (
        <>
            <div className="page-wrapper" style={{ minHeight: "250px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="application-detail-heading-area">
                                <h2>Create About Page</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-notification-detail-main-area">
                                <form className="send-notifications-form-area">
                                    <div className="form-group">
                                        <label>About </label>
                                        <input type="text" className="form-control field"  name="holdername" placeholder="Enter Heading" autofocus="" required="" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control"  placeholder="Enter Description"></textarea>
                                    </div>
                                    <div className="contact-form-submint-btn-area">
                                        <button  className="contact-form-submint-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    
                </div>
                <footer className="footer text-center"> 2022 © Admin Panel brought to you by <a
                    href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
                </footer>
            </div>
        </>
    );
};

export default AboutPage;