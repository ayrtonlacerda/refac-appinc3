/* import React, { useState, useCallback } from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

import * as Atom from '../../Atom';

const config = {
};
/*
1. no file - pronto pra gravar
2. grvando - stop
3. tem file
a. gravar novo
b. estuar existente(play e pause)
c. apagar (volta pro estado 1)

const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioRec = ({ keyField, value, onChange }) => {
  // const [audio, setAudio] = useState(value || null);
  const [recoder, setRecoder] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [timer, setTimer] = useState({
    recordSecs: 0,
    recordTime: '00:00:00',
  });
  const [error, setError] = useState(null);

  const handleRec = useCallback(async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener((e) => {
        setTimer({
          recordSecs: e.current_position,
          recordTime: audioRecorderPlayer.mmssss(
            Math.floor(e.current_position),
          ),
        });
      });
    } catch (err) {
      console.log(err);
    }
    setRecoder(true);
  }, [value, audioRecorderPlayer]);

  const handleStop = useCallback(async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setTimer((prev) => ({
      ...prev,
      recordSecs: 0,
    }));
    console.log({ result });
    setRecoder(false);
    // setAudio(result);
    setPlaying(false);
    onChange(keyField, result);
  }, [value, recoder]);

  const handlePlay = useCallback(async () => {
    if (!playing) {
      const msg = await audioRecorderPlayer.startPlayer();
      audioRecorderPlayer.addPlayBackListener((e) => {
        if (e.current_position === e.duration) {
          console.log('finished');
          audioRecorderPlayer.stopPlayer();
          setPlaying(false);
        } else {
          setPlaying(true);
        }
        setTimer({
          currentPositionSec: e.current_position,
          currentDurationSec: e.duration,
          playTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
          duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        });
      });
      return;
    }
    setPlaying(false);
    await audioRecorderPlayer.pausePlayer();
  }, [value, playing]);

  const handleDelete = useCallback(() => {
    // remover o arquivo
    setTimer({
      recordSecs: 0,
      recordTime: '00:00:00',
    });
    onChange(keyField, null);
  }, [value]);

  return (
    <Atom.Container>
      <Atom.Box
        height={50}
        flexDirection="row"
        justifyContent={!value ? 'center' : 'space-between'}
      >
        {value && (
          <Atom.Icon
            type="blackhole"
            width={20}
          />
        )}
        <Atom.Text>
          {timer.playTime ? timer.playTime : timer.recordTime}
        </Atom.Text>
        {value && (
          <Atom.Icon
            type="trash"
            size="xbig"
            color="RED"
            onClickIcon={handleDelete}
          />
        )}
      </Atom.Box>
      <Atom.Container
        height="15%"
        flexDirection="row"
        justifyContent="center"
        p={2}
      >
        {recoder ? (
          <Atom.Touch onPress={handleStop}>
            <Atom.Ball size="XXXBIG">
              <Atom.Icon type="stop" size="xbig" />
            </Atom.Ball>
          </Atom.Touch>
        ) : (
            <Atom.Touch onPress={handleRec}>
              <Atom.Ball size="XXXBIG">
                <Atom.Icon type="rec" size="xbig" />
              </Atom.Ball>
            </Atom.Touch>
          )}
        {(value && !recoder) && (
          <>
            <Atom.Touch onPress={handlePlay}>
              {playing ? (
                <Atom.Ball size="XXXBIG">
                  <Atom.Icon type="pause" size="xbig" />
                </Atom.Ball>
              ) : (
                  <Atom.Ball size="XXXBIG">
                    <Atom.Icon type="play" size="xbig" />
                  </Atom.Ball>
                )}
            </Atom.Touch>
          </>
        )}
      </Atom.Container>
    </Atom.Container>

  );
};

export default AudioRec;
 */
