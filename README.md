# Uber Clone

## Add Signin/Signup using Amplify AWS

> You can start with these processes once the Cognito user pool has been successfully set up.

1. Run the below command to create amplify file in your project

```
npm create amplify@latest
```

2. Remove the data file: amplify/data
3. Connect to AWS resources using [config](./amplify/config.ts) file
4. Add reqired dependencies
```
npm add \
  @aws-amplify/ui-react-native \
  @aws-amplify/react-native \
  aws-amplify \
  @react-native-community/netinfo \
  @react-native-async-storage/async-storage \
  react-native-safe-area-context \
  react-native-get-random-values \
  react-native-url-polyfill
```

5. Wrap the app with Authenticator from @aws-amplify/ui-react-native

```
<Authenticator.Provider>
    <Authenticator>
```
