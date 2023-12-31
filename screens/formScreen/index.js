import {StatusBar} from 'react-native';
import {useLayoutEffect} from 'react';

import CommonBg from '../../components/shared/commonBg/index';
import LoginForm from '../../components/forms/loginForm/index';
import SignUpForm from '../../components/forms/signUpForm/index';
import {COLORS} from '../../constants/theme';
import {FORM_PARAMS_TITLES} from '../../constants/strings';
import {styles} from './styles';

const Form = ({route, navigation}) => {
  useLayoutEffect(() => {
    route.params.formType === FORM_PARAMS_TITLES.login
      ? navigation.setOptions({title: 'Login'})
      : navigation.setOptions({title: ' Sign Up'});
  });

  const FormType = route.params.formType;

  return (
    <CommonBg>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
      />
      {FormType === FORM_PARAMS_TITLES.login ? (
        <LoginForm
          userType={route.params.userType}
          providerType={route.params.providerType}
        />
      ) : (
        <SignUpForm
          userType={route.params.userType}
          providerType={route.params.providerType}
        />
      )}
    </CommonBg>
  );
};
export default Form;
