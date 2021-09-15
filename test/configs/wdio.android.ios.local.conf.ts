import {join} from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Capabilities
// ============
//
config.maxInstances = 2;
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    // @ts-ignore
    platformName: 'Android',
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:deviceName': 'Pixel_3_10.0',
    'appium:platformVersion': '10.0',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    // The path to the app
    'appium:app': join(
      // Take the current folder
      __dirname,
      // Go back to the root
      '../../',
      // and join the above 2 with the folder location of the app
      './apps/Android-NativeDemoApp-0.4.1.apk',
    ),
    // Wait for the main activity to start
    // @ts-ignore
    'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    'appium:noReset': true,
    'appium:newCommandTimeout': 240,
  },
  {
    // The defaults you need to have in your config
    // @ts-ignore
    platformName: 'iOS',
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:deviceName': 'iPhone 12',
    'appium:platformVersion': '14.5',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    // The path to the app
    'appium:app': join(
      // Take the current folder
      __dirname,
      // Go back to the root
      '../../',
      // and join the above 2 with the folder location of the app
      './apps/iOS-Simulator-NativeDemoApp-0.4.1.app.zip',
    ),
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    'appium:noReset': true,
    'appium:newCommandTimeout': 240,
    // @ts-ignore
    'appium:allowTouchIdEnroll': true,
  },
];

exports.config = config;
