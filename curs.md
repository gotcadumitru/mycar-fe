# ASSIST REACT-NATIVE WORKSHOP

A Cross Platform project build with React-Native special for ours super devs

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```text
REQUEST_URL=https://team-backend-c.herokuapp.com/
REQUEST_DEV_URL=https://team-backend-c.herokuapp.com/
GOOGLE_SIGN_IN_WEB_CLIENT=346836464582-i01uu2v59rj506ejhpqu9qs218qs8hcg.apps.googleusercontent.com
GOOGLE_SIGN_IN_IOS_CLIENT=346836464582-t5rchjk63i5fd8d8gd4hu1jkd926lhjd.apps.googleusercontent.com
GOOGLE_SIGN_IN_ANDROID_CLIENT=346836464582-857khqeqij1288ft1i6rn62i79t7m93l.apps.googleusercontent.com
```

# ASSIST REACT NATIVE WORKSHOP #8

## 1. Google Authentication

### 1.1 Install npm dependency

```text
yarn add @react-native-google-signin/google-signin
```

### 1.2 iOS Pod install

```text
npx pod-install
```

### 1.3 Create google cloud credentials for Android/Web/iOS
### 1.2 Download plist and rename to GoogleService-Info.plist

### 1.4 Open Project in xCode
#### 1.4.1 Focus on ReportifyAssist from xCode files 
#### 1.4.2 Go to Info Tab
#### 1.4.3 Expand URL Types
#### 1.4.4 Press on +
#### 1.4.5 Copy The iOS URL scheme from console cloud google
#### 1.4.5 Right click on ReportifyAssit->ReportifyAssit and select Add files
#### 1.4.5 Select GoogleService-Info.plist
#### 1.4.6 Check "Copy items if needed"

### 1.5 Env file
### 1.5.1 Create e .env file in the project root and add google client ids:
```text
REQUEST_URL=https://team-backend-c.herokuapp.com/
REQUEST_DEV_URL=https://team-backend-c.herokuapp.com/
GOOGLE_SIGN_IN_WEB_CLIENT=346836464582-i01uu2v59rj506ejhpqu9qs218qs8hcg.apps.googleusercontent.com
GOOGLE_SIGN_IN_IOS_CLIENT=346836464582-t5rchjk63i5fd8d8gd4hu1jkd926lhjd.apps.googleusercontent.com
GOOGLE_SIGN_IN_ANDROID_CLIENT=346836464582-857khqeqij1288ft1i6rn62i79t7m93l.apps.googleusercontent.com
```

### 1.6 Go to src/store/slices/user/userSlice/services.ts and add:
```typescript
export const googleSignIn = createAsyncThunk(
  userActionNames.LOGIN_GOOGLE,
  async (_, { dispatch }) => {
    await GoogleSignin.hasPlayServices()
    await GoogleSignin.signIn()
    const tokens = await GoogleSignin.getTokens()
    const response = await api.post(
      'api/auth/googlelogin',
      { token: tokens.idToken },
      { notification: REQUEST_MESSAGES.LOGIN_GOOGLE },
    )
    dispatch(onJwtReceivedSuccessfully(response.data.token))
  },
)
```

### 1.7 Go to src/Main.tsx at the top of the file:
```typescript
GoogleSignin.configure({
  webClientId: GOOGLE_SIGN_IN_WEB_CLIENT,
})
```

### 1.8 Go to src/components/SocialLogin/SocialLogin.tsx and add:
```typescript
const onGoogleSignInPress = () => dispatch(userServices.googleSignIn())
```

### 1.9 Start the project on iOS and wait for something to go wrong :)

## 2. Bootsplash

### 2.1 Add react-native-bootsplash dependency
```text
yarn add react-native-bootsplash
```

### 2.1 Add react-native-bootsplash dependency
```text
yarn add react-native-bootsplash && npx pod-install
```


### 2.2 Bootsplash setup
```text
yarn react-native generate-bootsplash src/assets/images/logo.png --platforms=android,ios      
```

### 2.3.1 Add to ios/ReportifyAssist/AppDelegate.mm line 2:
```text
#import "RNBootSplash.h" 
```

### 2.3.1 Add to ios/ReportifyAssist/AppDelegate.mm before @end
```text
- (UIView *)createRootViewWithBridge:(RCTBridge *)bridge
                          moduleName:(NSString *)moduleName
                           initProps:(NSDictionary *)initProps {
  UIView *rootView = [super createRootViewWithBridge:bridge
                                          moduleName:moduleName
                                           initProps:initProps];
  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView]; 
  return rootView;
}
```

### 2.4 Open xCode => Info Tab => App Icons and Launch Screen => Set Launch screen file to Bootsplash 

### 2.5 Android setup
### 2.5.1 Edit android/app/src/main/res/values/styles.xml
```xml
<resources>

    <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
    </style>

    <style name="BootTheme" parent="Theme.BootSplash">
        <item name="bootSplashBackground">@color/bootsplash_background</item>
        <item name="bootSplashLogo">@drawable/bootsplash_logo</item>
        <!-- <item name="bootSplashBrand">@drawable/bootsplash_brand</item> -->
        <item name="postBootSplashTheme">@style/AppTheme</item>
    </style>

</resources>
```

### 2.5.2 Edit android/app/src/main/AndroidManifest.xml
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.READ_CONTACTS" />
    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />

    <uses-feature android:name="android.hardware.camera" android:required="false" />
    <uses-feature android:name="android.hardware.camera.front" android:required="false" />


    <queries>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="http" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="https" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="geo" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="google.navigation" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="applemaps" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="citymapper" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="uber" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="lyft" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="transit" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="truckmap" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="waze" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="yandexnavi" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="moovit" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="yandexmaps://maps.yandex." />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="yandextaxi" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="kakaomap" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="mapycz" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="mapsme" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="osmand.geo" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="gett" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="nmap" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="dgis" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="lftgpas" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="petalmaps" />
        </intent>
    </queries>

    <application
            android:name=".MainApplication"
            android:label="@string/app_name"
            android:icon="@mipmap/ic_launcher"
            android:roundIcon="@mipmap/ic_launcher_round"
            android:allowBackup="false"
            android:theme="@style/BootTheme">
        <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id" />
        <meta-data android:name="com.google.android.geo.API_KEY"
                   android:value="AIzaSyDRvC6Q5uvEzTFo_CB0RiegSYQ-PxNNUEc" />

        <activity
                android:name=".MainActivity"
                android:label="@string/app_name"
                android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
                android:launchMode="singleTask"
                android:windowSoftInputMode="adjustResize"
                android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>
</manifest>
```

### 2.5.3 Edit android/app/src/main/java/com/reportifyassist/MainActivity.java
Add on line 7:
```text
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash;
```
Add on line 19:
```text
@Override
protected void onCreate(Bundle savedInstanceState) {
    RNBootSplash.init(this, R.style.BootTheme); // ⬅️ initialize the splash screen
    super.onCreate(savedInstanceState); // or super.onCreate(null) with react-native-screens
}
```

### 2.6 Hide splash screen inside src/Main.tsx
```javascript
useEffect(() => {
  BootSplash.hide({ fade: true })
}, [])
```

```javascript
import BootSplash from 'react-native-bootsplash'
```

## 3. App icons
### 3.1 Go to https://easyappicon.com/
### 3.2 Select our icon
### 3.3 Press Download
### 3.4 Android
### 3.4.1 Open android/app/src/main/res in finder
### 3.4.2 Select all files from downloaded android folder, press option Key and drag and drop them to the sec/main/res folder, select Merge for all

### 3.4 iOS
### 3.4.1 Open ios/ReportifyAssist/Images.xcassets/AppIcon.appiconset in finder
### 3.4.2 Select all files from downloaded ios folder and move them all to AppIcon.apiconset

