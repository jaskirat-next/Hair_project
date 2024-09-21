import Image from "next/image";
import Imgzero from "../../../public/images/profile.jpg";
import "../../../public/sass/pages/myprofile.scss";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import { GiBookmark } from "react-icons/gi";
import { FaMapLocationDot, FaRegHeart } from "react-icons/fa6";
import { TbLogout, TbPasswordUser } from "react-icons/tb";

const Slidebar = () => {
  return (
    <div className="main">
      <div className="top_section">
        <div className="left">
          <div className="img_area">
            <Image src={Imgzero} height="auto" width="auto"></Image>
          </div>
        </div>
        <div className="right">
          <div className="text">Hello,</div>
          <div className="name">Charles</div> 
        </div>
      </div>
      <div className="bottom_section">
        <ul>
          <li className="active">
            <IoPerson className="icon" />
            <Link href="/Dashboard/myprofile">My Profile</Link>
          </li>
          <li>
            <GiBookmark className="icon" />
            <Link href="/Dashboard/myorder">My Orders</Link>
          </li>
          <li>
            <FaRegHeart className="icon" />
            <Link href="/Dashboard/mywishlist">My Wishlist</Link>
          </li>
          <li>
            <FaMapLocationDot className="icon" />
            <Link href="/Dashboard/save_address">Saved Address</Link>
          </li>
          <li>
            <TbPasswordUser className="icon" />
            <Link href="/Dashboard/change_password">Change Password</Link>
          </li>
          <li>
            <TbLogout className="icon" />
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Slidebar;
