import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../../public/images/UNPLGD-logo2white.png';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
  return (
    <div className="ft">
      <div className="ft-wrapper">
        <div className="ft-logo">
          <img src={Logo2} />
        </div>
        <div className="ft-left">
          <h4>SHOP</h4>
          <Link className="react-link-ft" to={`/products/sort/guitars`}>
            <p>Guitars</p>
          </Link>
          <Link className="react-link-ft" to={`/products/sort/drums`}>
            <p>Drums</p>
          </Link>
          <Link className="react-link-ft" to={`/products/sort/cellos`}>
            <p>Cellos</p>
          </Link>
          <Link className="react-link-ft" to={`/products/sort/pianos`}>
            <p>Pianos</p>
          </Link>
          <Link className="react-link-ft" to={`/products/sort/accessories`}>
            <p>Accessories</p>
          </Link>
        </div>
        <div className="ft-center">
          <h4>GET IN TOUCH</h4>
          <div className="ft-center-phone">
            <PhoneIcon />
            <p>{'(111)-111-1111'}</p>
          </div>
          <div className="ft-center-phone">
            <EmailIcon />
            <p>sales@unplgd.com</p>
          </div>
          <div className="ft-center-phone">
            <LocationOnIcon />
            <p>5 Hanover Square 11th Floor, New York, NY</p>
          </div>
        </div>
        <div className="ft-right">
          <h4>FOLLOW US</h4>
          <div className="ft-right-wrap">
            <div className="ft-center-phone">
              <InstagramIcon style={{ cursor: 'pointer' }} />
            </div>
            <div className="ft-center-phone">
              <TwitterIcon style={{ cursor: 'pointer' }} />
            </div>
            <div className="ft-center-phone">
              <FacebookIcon style={{ cursor: 'pointer' }} />
            </div>
            <div className="ft-center-phone">
              <YouTubeIcon style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="pds-single-ctg">
<Link to={`/products/`}>
  <h3>All</h3>
</Link>
</div>
<div className="pds-single-ctg">
<Link to={`/products/sort/guitars`}>
  <h3>Guitars</h3>
</Link>
</div>
<div className="pds-single-ctg">
<Link to={`/products/sort/drums`}>
  <h3>Drums</h3>{' '}
</Link>
</div>
<div className="pds-single-ctg">
<Link to={`/products/sort/cellos`}>
  <h3>Cellos</h3>{' '}
</Link>
</div>
<div className="pds-single-ctg">
<Link to={`/products/sort/pianos`}>
  <h3>Pianos</h3>{' '}
</Link>
</div>
<div className="pds-single-ctg">
<Link to={`/products/sort/accessories`}>
  <h3>Accessories</h3>{' '}
</Link>
</div> */
}
