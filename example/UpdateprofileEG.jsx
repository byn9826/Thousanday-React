import React, {Component} from 'react';
import {Updateprofile} from 'thousanday-react';
class UpdateprofileEG extends Component {
    saveProfile(newUrl) {
        
    }
    render() {
        return (
            <section id = "updateprofile" className = "example">
                <header className = "example-header">
                    <h2>Updateprofile</h2>
                    <h3>Update user's profile image(png)</h3>
                </header>
                <h4>#This component is depend on <a href="https://github.com/mosch/react-avatar-editor" target="__blank">react-avatar-editor</a></h4>
                <span className="example-span">
                    {"<Updateprofile src='profile.png' width='200' />"}
                </span>
                <Updateprofile src="/img/user/1.jpg" width="200" saveProfile={this.saveProfile.bind(this)}  fontFamily="'Rubik', sans-serif" />
                <h4>
                    <a href="https://github.com/byn9826/Thousanday-React#updateprofile" target="__blank">Check docs</a>
                </h4>
            </section>
        );
    }
}
export default UpdateprofileEG;