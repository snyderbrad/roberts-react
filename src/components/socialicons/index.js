import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialProfiles } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialProfiles.github && (
          <li>
            <a href={socialProfiles.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialProfiles.twitter && (
          <li>
            <a href={socialProfiles.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialProfiles.facebook && (
          <li>
            <a href={socialProfiles.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialProfiles.linkedin && (
          <li>
            <a href={socialProfiles.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
