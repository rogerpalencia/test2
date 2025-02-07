import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var redes = this.props.sharedBasicInfo.social.map(function (red) {
        return (
          <span key={red.name} className="m-4">
            <a href={red.url} target="_blank" rel="noopener noreferrer">
              <i className={red.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{redes}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
