import React, { useEffect, useContext } from 'react';
import styles from '../styles/templates/blogPost.module.scss';
import { ThemeContext } from './ThemeProvider';

export default function Comments({ commentBox }) {
  const { colorMode } = useContext(ThemeContext);

  useEffect(() => {
    if (!document.getElementById('utterances') && colorMode !== 'undefined') {
      const commentScript = document.createElement('script');
      const theme = typeof window !== 'undefined'
        && localStorage.getItem('color-mode') === 'dark'
        ? 'github-dark'
        : 'github-light';
      commentScript.async = true;
      commentScript.src = 'https://utteranc.es/client.js';
      commentScript.setAttribute('repo', 'pvaladez/utterances_comments'); // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
      commentScript.setAttribute('issue-term', 'pathname');
      commentScript.setAttribute('id', 'utterances');
      commentScript.setAttribute('theme', theme);
      commentScript.setAttribute('crossorigin', 'anonymous');
      if (commentBox && commentBox.current) {
        // eslint-disable-next-line no-param-reassign
        commentBox.current.innerHTML = '';
        commentBox.current.appendChild(commentScript);
      } else {
        // eslint-disable-next-line no-console
        console.log(`Error adding utterances comments on: ${commentBox}`);
      }
    }
  }, [colorMode, commentBox]);

  return <section ref={commentBox} className={styles.comment_box} />;
}
