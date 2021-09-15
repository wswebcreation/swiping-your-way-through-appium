import {MobileConfig} from '../configs/wdio.shared.conf';

export async function restartApp () {
  if (!(driver.config as MobileConfig).firstAppStart) {
    await driver.reset();
  }

  // Set the firstAppstart to false to say that the following test can be reset
  (driver.config as MobileConfig).firstAppStart = false;
}
