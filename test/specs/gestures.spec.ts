/**
 * We are not going to use Page Objects here for the "easy" of this project
 */

import {restartApp} from '../helpers/utils';

describe('Appium Gestures', () => {
  // Before each test we are going to...
  beforeEach(async () => {
    // Restart the app so it will start in the correct state
    await restartApp();
    // Wait for the Swipe tab to be shown, then we know the app is loaded
    await $('~Swipe').waitForDisplayed();
    // Go to the swipe screen by clicking on the Swipe tab bar button and wait for it
    await $('~Swipe').click();
    // Wait for the swipe screen so we can interact with it
    await $('~Swipe-screen').waitForDisplayed();
  });

  // Remove the `.skip` or change it to `.only` to put focus on this test
  it.skip('should be able to scroll to the bottom of the page', async () => {
    // We want to find the logo at the bottom of the page.
    // The selector of this logo is '~WebdriverIO logo'

    // 1.   Get the size of the scroll area
    const scrollViewRect = await driver.getElementRect(await $('~Swipe-screen').elementId);

    // 2.   Determine X and Y position of initial touch
    //      We move our finger on the vertical axis, this means we need to
    //      have a starting Y position and the center X position will stay the same.
    //      We need to determine the centerX and startY position. Then we need to determine the endY position where we
    //      want to let our finger go from the screen.
    // 2a.  First determine the X position, the advice is to take the center of the element
    //      and add the X position to it. We can do that by using the half of the width of
    //      the element and count the X position of the element on the screen to it
    const centerX = scrollViewRect.x + (scrollViewRect.width / 2);
    // 2b.  Now we need to determine the starting Y position. We are going to move over the vertical axis
    //      so the Y position will change. We start at the 'bottom' of the element and move to the top position of the
    //      element on the screen. This can be done by using the Y position of the the element on the screen and then
    //      add the height of the element to it. To make sure that we are not touching other elements we are going to
    //      start a little bit above the bottom of the element by using 90% of the height.
    const startY = scrollViewRect.y + (scrollViewRect.height * 0.9);
    // 2c.  At last determine the end position on the vertical axis where we let our finger go from the screen. This can
    //      be the top of the element which is the Y position itself of the element
    const endY = scrollViewRect.y;

    // 3.   Execute the touch action until the logo is visible
    //      We swipe over the vertical axis which means the X position will always stay the same.
    //      See https://github.com/jlipps/simple-wd-spec#perform-actions for a clear explanation of all properties
    for (let scrolls = 0; scrolls < 5; scrolls++) {
      await driver.performActions([
        {
          // 3a. Create the event
          type: 'pointer',
          id: 'finger1',
          parameters: {pointerType: 'touch'},
          actions: [
            // 3b. Move finger into start position
            {type: 'pointerMove', duration: 0, x: centerX, y: startY},
            // 3c. Finger comes down into contact with screen
            {type: 'pointerDown', button: 0},
            // 3d. Pause for a little bit
            {type: 'pause', duration: 100},
            // 3e. Finger moves to end position
            //     We move our finger from the center of the element to the
            //     starting position of the element.
            //     Play with the duration to make the scroll go slower / faster
            {type: 'pointerMove', duration: 500, x: centerX, y: endY},
            // 3f. Finger gets up, off the screen
            {type: 'pointerUp', button: 0},
          ],
        },
      ]);
      // If the element is visible
      if (await $('~WebdriverIO logo').isDisplayed()) {
        // then stop swiping/searching for the element
        break;
      }
    }

    // For demo purpose
    await driver.pause(5000);

    // Check that the element is visible
    await expect(await $('~WebdriverIO logo').isDisplayed()).toBeTruthy();
  });

  // Remove the `.skip` or change it to `.only` to put focus on this test
  it.skip('should be able to zoom the logo', async () => {
    // 1.   Get the position of the scroll area
    const elementRect = await driver.getElementRect(await $('~Swipe-screen').elementId);

    // 2.   Determine X and Y position of initial touch
    const centerX = elementRect.x + (elementRect.width / 2);
    const startY = elementRect.y + (elementRect.height * 0.9);
    const endY = elementRect.y;

    // 3.   Swipe until the element is found
    for (let scrolls = 0; scrolls < 5; scrolls++) {
      // Start swiping
      // Now a methods is created that can be reused
      await Swipe({
        startX: centerX,
        startY: startY,
        endX: centerX,
        endY: endY,
      });
      // If the element is visible
      if (await $('~WebdriverIO logo').isDisplayed()) {
        // then stop swiping/searching for the element
        break;
      }
    }

    // 4.   Get the size and the position of the element on the screen
    //      so we know where we need to put our fingers
    const logoRectangles = await driver.getElementRect(await $('~WebdriverIO logo').elementId);

    // 4a.  Get the center of the element on the horizontal axis
    const logoCenterX = logoRectangles.x + logoRectangles.width / 2;

    // 4b.  Get the center of the element on the horizontal axis
    const logoCenterY = logoRectangles.y + logoRectangles.height / 2;

    // 4c.  Determine our movement in pixels on the horizontal axis
    const xMovement = 100;

    // 4d.  Set the starting position for both fingers
    //      Don't start at the exact center, move x pixels to the left/right
    //      from the center
    const finger1Start = logoCenterX - xMovement;
    const finger2Start = logoCenterX + xMovement;

    // 4e.  Set the end position for both fingers
    //      We already moved Xpx from the center to start, now move Xpx again
    //      to the left/right
    const finger1End = logoCenterX - (2 * xMovement);
    const finger2End = logoCenterX + (2 * xMovement);

    // 5.   Execute the zoom
    //      NOTE, if you would switch `finger{#}Start` and `finger{#}End`
    //      you would have a pinch =)
    await driver.performActions([
      // First finger
      {
        type: 'pointer',
        // We have 2 actions, so make this `id` unique
        id: 'finger1',
        parameters: {pointerType: 'touch'},
        actions: [
          // move finger into start position
          {type: 'pointerMove', duration: 0, x: finger1Start, y: logoCenterY},
          // finger comes down into contact with screen
          {type: 'pointerDown', button: 0},
          // pause for a little bit
          {type: 'pause', duration: 50},
          // finger moves to end position
          {type: 'pointerMove', duration: 500, x: finger1End, y: logoCenterY},
          // Finger gets up, off the screen
          {type: 'pointerUp', button: 0},
        ],
      },
      // Second finger
      {
        type: 'pointer',
        // We have 2 actions, so make this `id` unique
        id: 'finger2',
        parameters: {pointerType: 'touch'},
        actions: [
          // move finger into start position
          {type: 'pointerMove', duration: 0, x: finger2Start, y: logoCenterY},
          // finger comes down into contact with screen
          {type: 'pointerDown', button: 0},
          // pause for a little bit
          {type: 'pause', duration: 50},
          // finger moves to end position
          {type: 'pointerMove', duration: 500, x: finger2End, y: logoCenterY},
          // Finger gets up, off the screen
          {type: 'pointerUp', button: 0},
        ],
      },
    ]);

    // Only for demo purpose
    await driver.pause(5000)
  });

  // Remove the `.skip` or change it to `.only` to put focus on this test
  it.skip('should be able to scroll the "easy" way', async () => {
    // Android and iOS have their own implementation of executing a "simple"
    // scroll, so we ask the driver here if we are an Android or iOS device
    // Be aware that you need to have Appium 1.19.0 on your machine!
    //
    // Execute the scroll until the logo is visible
    for (let scrolls = 0; scrolls < 5; scrolls++) {
      if (driver.isAndroid) {
        // See http://appium.io/docs/en/writing-running-appium/android/android-mobile-gestures/#mobile-scrollGesture
        // for more information
        await driver.execute(
          'mobile:scrollGesture',
          {
            // Element is mandatory
            elementId: await $('~Swipe-screen').elementId,
            direction: 'down',
            percent: 1.0,
          }
        );
      } else {
        // See https://github.com/appium/appium-xcuitest-driver#mobile-scroll
        // for more information
        await driver.execute(
          'mobile:scroll',
          {
            // Element is optional
            elementId: await $('~Swipe-screen').elementId,
            direction: 'down',
          }
        );
      }

      // If the element is visible
      if (await $('~WebdriverIO logo').isDisplayed()) {
        // then stop swiping/searching for the element
        break;
      }
    }

    // For demo purpose
    await driver.pause(5000);

    // Check that the element is visible
    await expect(await $('~WebdriverIO logo').isDisplayed()).toBeTruthy();
  });

  // Remove the `.skip` or change it to `.only` to put focus on this test
  it.skip('should be able to zoom the logo the "easy" way', async () => {
    // Execute the scroll until the logo is visible
    for (let scrolls = 0; scrolls < 5; scrolls++) {
      if (driver.isAndroid) {
        await driver.execute(
          'mobile:scrollGesture',
          {
            elementId: await $('~Swipe-screen').elementId,
            direction: 'down',
            percent: 1.0,
          }
        );
      } else {
        await driver.execute(
          'mobile:scroll',
          {
            elementId: await $('~Swipe-screen').elementId,
            direction: 'down',
          }
        );
      }

      // If the element is visible
      if (await $('~WebdriverIO logo').isDisplayed()) {
        // then stop swiping/searching for the element
        break;
      }
    }

    // For demo purpose
    await driver.pause(5000);

    // Now zoom
    if (driver.isAndroid) {
      // See http://appium.io/docs/en/writing-running-appium/android/android-mobile-gestures/#mobile-pinchOpenGesture
      // for more information
      // Use the `mobile: pinchCloseGesture` for pinching
      await driver.execute('mobile: pinchOpenGesture', {
        elementId: await $('~WebdriverIO logo').elementId,
        percent: 0.75,
      });
    } else {
      // See https://github.com/appium/appium-xcuitest-driver#mobile-pinch
      // for more information
      await driver.execute('mobile: pinch', {
        elementId: await $('~WebdriverIO logo').elementId,
        // Use a scale between 0 and 1 to "pinch close"
        // or zoom out and use a scale greater than 1
        scale: 2,
        velocity: 1.1,
      });
    }

    // For demo purpose
    await driver.pause(5000);
  });
});

/**
 * A generic method to swipe based on provided args
 */
async function Swipe(
  {
    startX,
    startY,
    endX,
    endY,
    speed = 500
  }: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    speed?: number;
  }) {
  // Execute the touch action
  // We swipe over the vertical axis which means the X position will always stay the same.
  // See https://github.com/jlipps/simple-wd-spec#perform-actions for a clear explanation of all properties
  await driver.performActions([
    {
      // a. Create the event
      type: 'pointer',
      id: 'finger1',
      parameters: {pointerType: 'touch'},
      actions: [
        // b. Move finger into start position
        {type: 'pointerMove', duration: 0, x: startX, y: startY},
        // c. Finger comes down into contact with screen
        {type: 'pointerDown', button: 0},
        // d. Pause for a little bit
        {type: 'pause', duration: 100},
        // e. Finger moves to end position
        //    Play with the duration to make the scroll go slower / faster
        {type: 'pointerMove', duration: speed, x: endX, y: endY},
        // f. Finger gets up, off the screen
        {type: 'pointerUp', button: 0},
      ],
    },
  ]);
  // For stability always add a pause so we know the scroll (animation) is done
  await driver.pause(750);
}

