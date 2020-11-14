import React from 'react';
import YouTube from 'react-youtube';
import styles from '../styles/components/swiperYoutube.module.scss';

function YoutubeIcon(props) {
  return (
    <svg
      viewBox="0 0 12 12"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M11.031 3.47a1.317 1.317 0 00-.928-.929C9.284 2.32 6 2.32 6 2.32s-3.284 0-4.103.219a1.317 1.317 0 00-.928.93C.75 4.289.75 6 .75 6s0 1.711.219 2.53c.121.452.477.809.928.929C2.716 9.68 6 9.68 6 9.68s3.284 0 4.103-.221c.452-.12.807-.477.928-.929.219-.819.219-2.53.219-2.53s0-1.711-.219-2.53z"
        fillRule="nonzero"
      />
      <path
        d="M4.957 7.57V4.43l2.72 1.558-2.72 1.582z"
        fill="#fff"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default function SwiperYoutube(props) {
  const { id } = props;
  const [playing, setPlaying] = React.useState(false);
  const [player, setPlayer] = React.useState(null);

  const onReady = (event) => {
    setPlayer(event.target);
  };
  const onStateChange = (event) => {
    const state = event.data;

    if (state === 1) {
      setPlaying(true);
    } else if (state === 2) {
      setPlaying(false);
    }
  };
  const playClick = (e) => {
    e.preventDefault();

    setPlaying(!playing);
    /* youtubeRef.current. */
    if (!playing) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  };
  const opts = {
    playerVars: {
      rel: 0,
    },
  };

  return (
    <div className={styles.youtubeEmbed}>
      <div
        className={`${styles.overlay} ${playing ? styles.playing : ''}`}
        onClick={playClick}
        role="presentation"
      >
        <YoutubeIcon className={styles.youtubeIcon} />
      </div>
      <YouTube videoId={id} opts={opts} onReady={onReady} onStateChange={onStateChange} />
    </div>
  );
}
