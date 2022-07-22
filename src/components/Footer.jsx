import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from '@mui/icons-material';
import { React } from 'react';

function Footer() {
  const socialIconStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';

  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">ZainKeepsCode</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          expedita cupiditate sint doloribus ullam nihil aliquam unde ea, totam
          recusandae enim, eius quod labore quia harum blanditiis perspiciatis
          sequi neque?
        </p>
        <div className="flex item-center justify-center mt-3 self-start">
          <div className={`${socialIconStyle} bg-blue-700`}>
            <Facebook />
          </div>
          <div className={`${socialIconStyle} bg-[#D02C70]`}>
            <Instagram />
          </div>
          <div className={`${socialIconStyle} bg-sky-400`}>
            <Twitter />
          </div>
          <div className={`${socialIconStyle} bg-red-600`}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">Busan</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">051-111-1111</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined />
          <p className="pl-3">codingBear@coding.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
