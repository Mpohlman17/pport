import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/github">Login w/GitHub</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/auth/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        MERN + Passport + Redux
        <ul>{this.renderContent()}</ul>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import logo from "./gooddeedslogo.svg";

// class Header extends Component {
//   renderContent() {
//     switch (this.props.auth) {
//       case null:
//         return;
//       case false:
//         return (
//           <li>
//             <a href="/auth/github">Login w/GitHub</a>
//           </li>
//         );
//       default:
//         return (
//           <li>
//             <a href="/auth/logout">Logout</a>
//           </li>
//         );
//     }
//   }

//   render() {
//     return (
//       <nav>
//         <div>
//           <div className="Landing">
//             <img src={logo} alt="logo" id="signupLogo" />
//             <div className="headerArea">
//               {" "}
//               <br />
//             </div>
//           </div>
//         </div>
//         <ul>{this.renderContent()}</ul>
//       </nav>
//     );
//   }
// }
// function mapStateToProps({ auth }) {
//   return { auth };
// }
// export default connect(mapStateToProps)(Header);
