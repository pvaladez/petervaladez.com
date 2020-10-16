import React, {useEffect, useContext} from 'react'
import styles from '../styles/templates/blogPost.module.scss'
import { ThemeContext } from "../components/ThemeProvider.js"

export default function Comment({ commentBox }) {
  const { colorMode } = useContext(ThemeContext);

  useEffect(() => {
    const commentScript = document.createElement('script')
    const theme =
      typeof window !== 'undefined' && localStorage.getItem('color-mode') === 'dark'
        ? 'github-dark'
        : 'github-light'
    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'pvaladez/utterances_comments') // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('theme', theme)
    commentScript.setAttribute('crossorigin', 'anonymous')
    colorMode && (commentBox.current.innerHTML = '')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }

  }, [colorMode]) // eslint-disable-line
  
  return (
    <section ref={commentBox} className={styles.comment_box} />
  )
}
