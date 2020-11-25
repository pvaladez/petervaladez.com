import React from 'react';
import Img from 'gatsby-image';
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
  const { id, thumbnail, initLoading } = props;
  const [playing, setPlaying] = React.useState(false);
  const [player, setPlayer] = React.useState(null);
  const [loading, lazyLoad] = React.useState(false);

  React.useEffect(() => {
    if (initLoading === true) { lazyLoad(true); }
  }, [initLoading]);

  const onReady = (event) => {
    setPlayer(event.target);
    /* event.target.playVideo(); */
  };
  const onStateChange = (event) => {
    const state = event.data;

    if (state === 1) {
      setPlaying(true);
    } else if (state === 2) {
      setPlaying(false);
    }
  };
  const playClick = () => {
    setPlaying((prevState) => !prevState);

    if (!playing) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  };
  const opts = {
    host: 'https://www.youtube-nocookie.com',
    playerVars: {
      rel: 0,
      loop: 1,
      playlist: id,
      controls: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className={`${styles.youtubeEmbed} ${playing ? styles.playing : ''}`}>
      <YoutubeIcon className={styles.youtubeIcon} />
      {!player
        && (
          <div className={styles.thumbnail} onClick={playClick} role="presentation">
            <Img fluid={thumbnail} />
          </div>
        )}
      {!loading
        || (
          <>
            <div
              className={styles.overlay}
              onClick={playClick}
              role="presentation"
            />
            <YouTube videoId={id} opts={opts} onReady={onReady} onStateChange={onStateChange} />
          </>
        )}

    </div>
  );
}
