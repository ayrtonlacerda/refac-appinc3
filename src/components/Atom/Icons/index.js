import React from 'react';
import {
  Touch,
  InformationIcon,
  ArrowBackIcon,
  TrashIcon,
  PencilIcon,
  TimeIcon,
  DownlaodIcon,
  KeyIcon,
  ExitIcon,
  MenuIcon,
  BlackHole,
  PlayIcon,
  PauseIcon,
  StopIcon,
  RecorderIcon,
  BarCodeIcon,
  LocationIcon,
  MinusIcon,
  RemoveIcon,
  CheckIcon,
} from './styles';

const Icons = ({
  type, size, color, onClickIcon, ...props
}) => {
  if (type === 'information') {
    return (
      <Touch onPress={onClickIcon}>
        <InformationIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'check') {
    return (
      <Touch onPress={onClickIcon}>
        <CheckIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'back') {
    return (
      <Touch onPress={onClickIcon}>
        <ArrowBackIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'remove') {
    return (
      <Touch onPress={onClickIcon}>
        <RemoveIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'trash') {
    return (
      <Touch onPress={onClickIcon}>
        <TrashIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'pencil') {
    return (
      <Touch onPress={onClickIcon}>
        <PencilIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'time') {
    return (
      <Touch onPress={onClickIcon}>
        <TimeIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'download') {
    return (
      <Touch onPress={onClickIcon}>
        <DownlaodIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'key') {
    return (
      <Touch onPress={onClickIcon}>
        <KeyIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'exit') {
    return (
      <Touch onPress={onClickIcon}>
        <ExitIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'menu') {
    return (
      <Touch onPress={onClickIcon}>
        <MenuIcon color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'blackhole') {
    return (
      <Touch onPress={onClickIcon}>
        <BlackHole color={color} size={size} {...props} />
      </Touch>
    );
  }

  if (type === 'minus') {
    return <MinusIcon color={color} size={size} />;
  }

  if (type === 'play') {
    return <PlayIcon color={color} size={size} />;
  }

  if (type === 'pause') {
    return <PauseIcon color={color} size={size} />;
  }

  if (type === 'stop') {
    return <StopIcon color={color} size={size} />;
  }

  if (type === 'rec') {
    return <RecorderIcon color={color} size={size} />;
  }

  if (type === 'barcode') {
    return (
      <Touch onPress={onClickIcon}>
        <BlackHole color={color} size={size} />
      </Touch>
    );
  }

  if (type === 'location') {
    return (
      <Touch onPress={onClickIcon}>
        <LocationIcon color={color} size={size} />
      </Touch>
    );
  }

  return <AddIcon />;
};

export default Icons;
