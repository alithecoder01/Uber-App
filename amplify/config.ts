import { Amplify } from 'aws-amplify';

export const AmplifyConfiguration = () =>
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: `${process.env.EXPO_PUBLIC_USER_POOL_ID}`,
        userPoolClientId: `${process.env.EXPO_PUBLIC_USER_POOL_CLIENT_ID}`,
        identityPoolId: `${process.env.EXPO_PUBLIC_IDENTITY_POOL_ID}`,
        loginWith: {
          email: true,
        },
        signUpVerificationMethod: 'code',
        userAttributes: {
          email: {
            required: true,
          },
        },
        allowGuestAccess: true,
        passwordFormat: {
          minLength: 8,
          requireLowercase: true,
          requireUppercase: true,
          requireNumbers: true,
          requireSpecialCharacters: true,
        },
      },
    },
  });
