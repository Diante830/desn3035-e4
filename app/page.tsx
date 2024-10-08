import React from "react";
import Nav from "./components/nav";
import Header from "./components/header";

export default function Page() {
    return <>
        <div className="container py-4">
            <div className="row">

                <Header/>

                <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>Hello Coffee Lovers</h1>
                    <p>
                        Explore our meticulously sourced beans, learn about our roasting process, and discover unique flavor profiles. Join us on a journey from farm to cup, and experience the true essence of coffee like never before!
                        Delve into the stories behind each bean and meet the passionate farmers who bring their craft to life. Indulge your senses as we guide you through tastings that celebrate the rich diversity of our coffee heritage.
                    </p>
                </div>

            </div>
        </div>
    </>
}
