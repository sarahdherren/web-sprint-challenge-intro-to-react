
import Sound from 'react-sound';
import Theme from '../images/star-wars-theme-song.mp3';


const PlayAudio = ({
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
}) => {
    return (
        <div>
          <Sound
            url={Theme}
            playStatus={Sound.status.PLAYING}
            playFromPosition={300}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
          />
        </div>
      );
}
  
  export default PlayAudio;