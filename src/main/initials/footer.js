import React from "react"
import { FaFacebookF } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () =>{
    return (
        <div class="grid2">
          	<p className="footr">©copyright 2020 by Dev. T-Rex.</p>
          	<p className="footr">Logo</p>
          	<p className="footr"><i class="fa fa-facebook-square fa-2x ic" aria-hidden="true"></i>
                <FaFacebookF size={15} class="ic"/>
                <FaGithubAlt size={15} class="ic"/>
                <FaLinkedinIn size={15} class="ic"/>
                <FaInstagramSquare size={15} class="ic" />
            </p>
        </div>
    );
}

export default Footer