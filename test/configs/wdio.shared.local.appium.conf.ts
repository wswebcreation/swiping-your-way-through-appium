import {config} from './wdio.shared.conf';

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

// ===================
// Test Configurations
// ===================
//
config.services =
  [
    [
      'appium',
      // This will tell the service to use the local installed version of Appium
      {
        command: 'appium',
      },
    ],
  ];

export default config;
