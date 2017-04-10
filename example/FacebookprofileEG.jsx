import React, {Component} from 'react';
import {Facebookprofile} from 'thousanday-react';
class FacebookprofileEG extends Component {
    render() {
        return (
            <section id="facebookprofile" className="example">
                <header className="example-header">
                    <h2>Facebookprofile</h2>
                    <h3>Catch clear square user profile by Facebook Id</h3>
                </header>
                <span className="example-span">
                    {"<Facebookprofile facebookId='123123213' />"}
                </span>
                <h4>
                    <b>Features:</b><br/>
                    1. Display a clear square 200*200 profile image by Facebook Id<br/>
                    2. Be able to return data for saving image in backend<br/>
                </h4>
                <h4>
                    <b>Demo:</b><br/>
                </h4>
                <h4>Directly get image from facebook api</h4>
                <img src={"http://graph.facebook.com/1950471678518843/picture?type=square"} />
                <h4>Process image by Facebookprofile</h4>
                <Facebookprofile ref="facebook" facebookId="1950471678518843" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#facebookprofile" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
};
export default FacebookprofileEG;