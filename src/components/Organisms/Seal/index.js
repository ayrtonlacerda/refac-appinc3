import React, { useEffect, useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import * as Atom from '../../Atom';
import * as Molecules from '../../Molecules';

export default (props) => (
  <Molecules.Scanner {...props} />
);
