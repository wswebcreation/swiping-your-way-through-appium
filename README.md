# Swiping your way through Appium
This repo will hold the example code and puzzle assignment for the "Swiping your way through Appium"-talk during 
Appium Conference 2021.

## Table of contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
  - [Installing NodeJS](#installing-nodejs)
    - [Windows](#windows)
      - [Mac/Linux](#maclinux)
  - [Setting up an Android Emulator or an iOS Simulator](#setting-up-an-android-emulator-or-an-ios-simulator)
  - [Installing Appium](#installing-appium)
- [Test your setup](#test-your-setup)
  - [Testing your Android setup](#testing-your-android-setup)
  - [Testing your iOS setup](#testing-your-ios-setup)
- [Assignment](#assignment)

## Introduction:
We will be using:
- a local Android emulator, because this can be used on all platforms (Windows, Mac and Linux).
- a local iuOS simulator, if you have a Mac
- WebdriverIO as an automation tool

## Prerequisites
- A Windows, Mac or Linux operating system
- Administrator and/or installation rights on your machine
- Installed NodeJS, this needs to be an even version, so 12 or 14 (No odd versions like 11, 13, 15 which are not stable
  versions)
- You have downloaded and configured an Android Emulator and/or an iOS Simulator
- Have the latest version of Appium installed on your machine (1.21.0 or higher)
- Some basic JavaScript knowledge

How to set up NodeJS, configure an Android Emulator/iOS Simulator and Appium are explained below.

### Installing NodeJS
If you already have NodeJS installed on your machine then you may skip this step.

There are several ways to install NodeJS, this can be done by:
- downloading it from the [NodeJS](https://nodejs.org/en/download/) website and selecting your environment,
- or by using Node Version Manager.

My advice is to use Node Version Manager because this will give you the ability to easily switch between NodeJS versions 
in the future.

> **Note:**
> Make sure that if you are downloading NodeJS that you are using even versions with a minimum of NodeJS 12. The odd
> versions (11, 13, 15) are not the stable versions to use. For more information about NodeJS checkout this
> [MeetUp recording of MoT Athens](https://youtu.be/AO49tZYoZ_8?t=4600).

#### Windows:
Follow the instructions for Windows [here](https://github.com/coreybutler/nvm-windows).

#### Mac/Linux:
Follow the instructions [here](https://github.com/nvm-sh/nvm).

### Setting up an Android Emulator or an iOS Simulator
> You can skip this if you’ve already have an emulator/simulator set up.

Android and iOS both have their own prerequisites. Please follow the installation instructions that can be found
[here](https://youtu.be/BL3ruGJmwwk) to prepare your local machine. This will help you configure your Android Emulator
or iOS simulator.

If you configure your Android emulator, then make sure that you are using Android 10.

> NOTE: Make sure that you alter the name of the Android Emulator in the WebdriverIO config files to make sure that
> everything will work, see [here](./test/configs/wdio.android.local.emu.conf.ts) and 
> [here](./test/configs/wdio.android.ios.local.conf.ts) 

### Installing Appium
> If you already have Appium installed on your machine then you may skip this step.

You can follow the instructions, to install Appium on your local machine, by watching
[this](https://youtu.be/AQD1bDX1K-k) video. You don’t need to watch the complete video, the installation part is
mentioned at the beginning and stops at 4:11 min.

As mentioned in the video, make sure you use [Appium Doctor](https://github.com/appium/appium-doctor) to verify if
everything works as expected.

## Test your setup
To make sure everything is working you can execute the following steps:

- Clone the project to your local machine. Open a terminal, go to a folder (or create it) to where you want to store
  this project. Then copy paste the following command in that terminal

        git clone https://github.com/wswebcreation/swiping-your-way-through-appium.git

- then go into the directory with the following command

        cd swiping-your-way-through-appium

- when you are in the `swiping-your-way-through-appium` folder you can install all dependencies with the following command

        npm install

### Testing your Android setup
Make sure you have opened the Android emulator that you configured. Verify that the name of the emulator is the same
as the name in [this](./test/configs/wdio.android.local.emu.conf.ts) or 
[this](./test/configs/wdio.android.ios.local.conf.ts)-file. If not, then change the `deviceName` to the name of your 
emulator.

You can now execute the following command in your terminal

    npm run npm run examples.android

This will execute a file with skipped tests on your Android emulator and should produce the following logs

```log
> npm run examples.android

> swiping-your-way-through-appium@1.0.0 examples.android
> npx wdio test/configs/wdio.android.local.emu.conf.ts


Execution of 1 workers started at 2021-09-15T10:46:37.918Z

[0-0] RUNNING in Android - /test/specs/gestures.spec.ts
[0-0] PASSED in Android - /test/specs/gestures.spec.ts

 "spec" Reporter:
------------------------------------------------------------------
[emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing /Users/wimselles/Sauce/Git/appium-conf-2021/swiping-your-way-through-appium/apps/Android-NativeDemoApp-0.4.1.apk
[emulator-5554 Android 10 #0-0] Session ID: 07df76ba-ac4a-471b-9e74-4767c7507181
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] » /test/specs/gestures.spec.ts
[emulator-5554 Android 10 #0-0] Appium Gestures
[emulator-5554 Android 10 #0-0]    - should be able to scroll to the bottom of the page
[emulator-5554 Android 10 #0-0]    - should be able to zoom the logo
[emulator-5554 Android 10 #0-0]    - should be able to scroll the "easy" way
[emulator-5554 Android 10 #0-0]    - should be able to zoom the logo the "easy" way
[emulator-5554 Android 10 #0-0]
[emulator-5554 Android 10 #0-0] 4 skipped (357ms)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:09 
```


### Testing your iOS setup
> If you have a Mac you can also check this.

Make sure you have opened the iOS simulator that you configured. Verify that the name of the simulator is the same
as the name in [this](./test/configs/wdio.ios.local.sim.conf.ts) or 
[this](./test/configs/wdio.android.ios.local.conf.ts)-file. If not, then change the `deviceName` to the name of your
simulator.

You can now execute the following command in your terminal

    npm run examples.ios

This will execute a file with skipped tests on your iOS simulator and should produce the following logs

```log
> npm run examples.ios

> swiping-your-way-through-appium@1.0.0 examples.ios
> npx wdio test/configs/wdio.ios.local.sim.conf.ts


Execution of 1 workers started at 2021-09-15T11:23:15.861Z

[0-0] RUNNING in iOS - /test/specs/gestures.spec.ts
[0-0] PASSED in iOS - /test/specs/gestures.spec.ts

 "spec" Reporter:
------------------------------------------------------------------
[iPhone 12 iOS 14.5 #0-0] Running: iPhone 12 on iOS 14.5 executing /Users/wimselles/Sauce/Git/appium-conf-2021/swiping-your-way-through-appium/apps/iOS-Simulator-NativeDemoApp-0.4.1.app.zip
[iPhone 12 iOS 14.5 #0-0] Session ID: 38e469da-01aa-4417-b3b9-e390402bf844
[iPhone 12 iOS 14.5 #0-0]
[iPhone 12 iOS 14.5 #0-0] » /test/specs/gestures.spec.ts
[iPhone 12 iOS 14.5 #0-0] Appium Gestures
[iPhone 12 iOS 14.5 #0-0]    - should be able to scroll to the bottom of the page
[iPhone 12 iOS 14.5 #0-0]    - should be able to zoom the logo
[iPhone 12 iOS 14.5 #0-0]    - should be able to scroll the "easy" way
[iPhone 12 iOS 14.5 #0-0]    - should be able to zoom the logo the "easy" way
[iPhone 12 iOS 14.5 #0-0]
[iPhone 12 iOS 14.5 #0-0] 4 skipped (1s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:08
```

## Assignment
The assignment can be found [here](./test/specs/drag.and.drop.assignment.spec.ts).

> **NOTE:** Yes you are able to cheat, but I leave it up to you on how you want to learn

Open the file in your editor and follow the instructions. If you want to run the test then open a terminal and execute
the following script(s)

    # Android:
      npm run assignment.android
    # iOS (if you have a Mac):
      npm run assignment.ios

if you want to run the answer then please check the steps in [this](./test/specs/drag.and.drop.answer.spec.ts)-file and 
execute the following script(s) in the terminal

    # Android:
      npm run answer.android
    # iOS (if you have a Mac):
      npm run answer.ios

