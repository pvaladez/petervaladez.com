import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
/* import { Icon } from '@iconify/react-with-api'; --This fails on Gatsby Build-- */
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-ant-design/github-filled';
import linkedinIcon from '@iconify/icons-cib/linkedin';
import stackoverflowIcon from '@iconify/icons-cib/stackoverflow';
import twitterIcon from '@iconify/icons-ant-design/twitter-circle-filled';
import devToIcon from '@iconify/icons-bx/bxl-dev-to';
import styles from '../styles/components/socialMediaLinks.module.scss';


export default function SocialMediaLinks(props) {
  const {infoData: {contact}} = useSiteMetadata();
  return (
    <ul className={props.className ? props.className : styles.socialMedia} aria-label="Social Media">
      <li>
        <a href={contact.github.url} aria-label="github">
        <Icon icon={githubIcon} aria-hidden="true" /></a>
      </li>
      <li>
        <a href={contact.linkedin_url} aria-label="linkedin">
        <Icon icon={linkedinIcon} aria-hidden="true" /></a>
      </li>
      <li>
        <a href={contact.stackoverflow_url} aria-label="stackoverflow">
        <Icon icon={stackoverflowIcon} aria-hidden="true"/></a>
      </li>
      <li>
        <a href={contact.twitter.url} aria-label="twitter">
        <Icon icon={twitterIcon} aria-hidden="true"/></a>
      </li>
      <li>
        <a href={contact.devto_url} aria-label="dev.to">
        <Icon icon={devToIcon} aria-hidden="true" /></a>
      </li>
    </ul>
  )
}
