import React, { Component } from 'react';



class Footer extends Component {
    render() {
        return (
            <footer id="signup-footer">
                DeLite Fast Food copyright &copy; {(new Date()).getFullYear()}
            </footer>
        )
    }
}

export default Footer;
