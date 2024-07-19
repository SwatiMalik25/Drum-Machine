import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
const soundPad = [
{
  keyCode: 81,
  key: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  key: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  key: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  key: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  key: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  key: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  key: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  key: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  key: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


const soundsName = {};

const BoardKey = ({ play, sound: { id, key, url, keyCode } }) => {
  const handleKeydown = e => {
    if (keyCode === e.keyCode) {
      const audio = document.getElementById(key);
      play(key, id);
    }
  };
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

  }, []);
  return /*#__PURE__*/React.createElement("button", { id: keyCode, className: "drum-pad", onClick: () => play(key, id) }, /*#__PURE__*/
  React.createElement("audio", { className: "clip", id: key, src: url }),
  key);

};
const Pad = ({ play }) => /*#__PURE__*/
React.createElement("div", { className: "Pad" },
soundPad.map(sound => /*#__PURE__*/React.createElement(BoardKey, { play: play, sound: sound })));


const Control = ({ name }) => /*#__PURE__*/
React.createElement("div", { className: "control" }, /*#__PURE__*/
React.createElement("h2", { id: "display" }, name));



const Drum = () => {
  const [soundType, setSoundType] = React.useState("");
  const [soundName, setSoundName] = React.useState("");
  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };
  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement(Pad, { play: play }), /*#__PURE__*/
    React.createElement(Control, { name: soundName || soundsName[soundType] }))));



};

ReactDOM.render( /*#__PURE__*/React.createElement(Drum, null), document.querySelector("#drum"));