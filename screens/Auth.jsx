import React, {useState} from 'react';
import {View} from 'react-native';
import Signup from '../src/auth/Signup';
import Signin from '../src/auth/Signin';
import PinVerification from '../src/auth/PinVerification';
import {useSelector} from 'react-redux';
const Auth = () => {
  const [isNew, setIsNew] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const {verificationPending} = useSelector(state => state.userReducer);
  const user = useSelector(state => state.userReducer);

  console.log(user);
  return (
    <View>
      {!verificationPending ? (
        isNew ? (
          <Signup setIsNew={setIsNew} />
        ) : (
          <Signin setIsNew={setIsNew} />
        )
      ) : (
        <PinVerification />
      )}
    </View>
  );
};
export default Auth;
