import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
const soundPad = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
const soundsName = {};

const BoardKey = ({play, sound:{id,key,url,keyCode}}) => {
const handleKeydown = (e) => {
    if(keyCode === e.keyCode) {
      const audio = document.getElementById(key);
      play(key, id);
  }
}
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    
  }, [])
  return(<button id={keyCode} className="drum-pad" onClick={() => play(key,id)}>
      <audio className="clip" id={key} src={url} />
      {key}
    </button>)
}
const Pad = ({play}) => (
  <div className="Pad">
    {soundPad.map((sound) => <BoardKey play={play} sound={sound} />)}
 </div>
  )
const Control =({name}) => (
  <div className="control">
    <h2 id="display">{name}</h2>
    </div>
)

 const Drum = () => {
 const [soundType, setSoundType] = React.useState("");
 const [soundName, setSoundName] =React.useState("");
 const play = (key,sound) => {
 setSoundName(sound)
 const audio = document.getElementById(key);
  audio.currentTime = 0;
    audio.play();
  }
  return (
    <div id="drum-machine">
    <div className="wrapper">
    <Pad play={play} />
    <Control name={soundName || soundsName[soundType]}    />
  </div>
 </div>
      )
};
    
ReactDOM.render(<Drum /> , document.querySelector("#drum"))