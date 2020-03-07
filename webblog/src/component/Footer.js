import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "../css/footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Grid container spacing={6}>
          <Grid item md={4} sm={12}>
            <img
              src="https://geeksjapan.asia/assets/img/logo/logo_white.png"
              width="120"
              alt="logo"
            />
            <p>
              Geeks Japan is a job search site for IT talent looking for career
              opportunities abroad especially in Japan, this program is targeted
              to people who wants to pursue and sharpen in their expertise in IT
              industry.
            </p>
          </Grid>

          <Grid item md={4} sm={12}>
            <h3>Quick Links</h3>
            <ul>
              <li>Life</li>
              <li>Explore</li>
              <li>Working</li>
              <li>Culture</li>
              <li>Learn</li>
            </ul>
          </Grid>

          <Grid item md={4} sm={12}>
            <h3>Follow Us</h3>
            <div className="social-media">
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-facebook icon"></i>
              <i className="fab fa-twitter icon"></i>
            </div>
            <p>
              Follow our social media to stay up to date
              <br /> and get notices about our new Job!
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;
