/**
 * We are not going to use Page Objects here for the "easy" of this project
 */
import {restartApp} from '../helpers/utils';

describe('Appium', () => {
  // Before each test we are going to...
  beforeEach(async () => {
    // Restart the app so it will start in the correct state
    await restartApp();
    // Wait for the Drag tab to be shown, then we know the app is loaded
    await $('~Drag').waitForDisplayed();
    // Go to the Drag screen by clicking on the Swipe tab bar button and wait for it
    await $('~Drag').click();
    // Wait for the swipe screen so we can interact with it
    await $('~Drag-drop-screen').waitForDisplayed();
  });

  /**
   * ASSIGNMENT 1:
   * Solve the puzzle by using the actions API.
   * Check the steps below to see what you need to do.
   */
  // Remove the `.skip` or change it to `.only` to put focus on this test
  it.skip('should be able to solve the puzzle by dragging the pieces into the puzzle with the Actions API', async() => {
    // Each element that needs to be dragged and each element that is the corresponding
    // drop area has it's own locator (use Appium Desktop to inspect it).
    // Both Android and iOS have Accessibility Labels, they can be found by prefixing them with a `~`.
    // Below you will find an array of each matching drag/drop element as an object that will hold the
    // corresponding selector
    const piecesSelectors = [
      {dragElement: '~drag-l1', dropArea: '~drop-l1'},
      {dragElement: '~drag-c1', dropArea: '~drop-c1'},
      {dragElement: '~drag-r1', dropArea: '~drop-r1'},
      {dragElement: '~drag-l2', dropArea: '~drop-l2'},
      {dragElement: '~drag-c2', dropArea: '~drop-c2'},
      {dragElement: '~drag-r2', dropArea: '~drop-r2'},
      {dragElement: '~drag-l3', dropArea: '~drop-l3'},
      {dragElement: '~drag-c3', dropArea: '~drop-c3'},
      {dragElement: '~drag-r3', dropArea: '~drop-r3'},
    ];

    // Loop over each matching drag/drop element selector
    for(const pieceSelector of piecesSelectors){
      /**
       * Use the `driver.performActions` methods from WebdriverIO,
       * see also https://webdriver.io/docs/api/webdriver/#performactions
       *
       * TIP 1:
       * When we are in this loop you can use the matching draggable element with this code
       * `await await $(pieceSelector.dragElement)` and `await $(pieceSelector.dropArea)`
       *
       * TIP 2:
       * You don't need to provide coordinates in the `pointerMove` or `pointerDown`,
       * you can reference to the element by using the `origin` options,
       * see https://github.com/jlipps/simple-wd-spec#perform-actions for more info.
       */
      await driver.performActions([
        {
          // 1. Create the event

          actions: [
            // 2. Move finger into start position where the element is
            //    Appium can automatically determine the location of the element instead
            //    of doing it ourselves

            // 3. Finger comes down into contact with screen

            // 4. Pause for a little bit

            // 5. Finger moves to the second element.
            //    Appium can automatically determine the location of the element instead
            //    of doing it ourselves

            // 6. Finger lets up, off the screen

          ],
        },
      ]);
    }

    // Wait for the retry button to be visible, meaning the success screen is there
    // There is no expectation here because the waitForDisplayed will fail if the element is not visible
    await $('~button-Retry').waitForDisplayed();

    // Retry
    await $('~button-Retry').click();
    // Wait for the renew button to be visible, meaning the puzzle is shown again
    // There is no expectation here because the waitForDisplayed will fail if the element is not visible
    await $('~renew').waitForDisplayed();
  });

  /**
   * ASSIGNMENT 2:
   * Solve the puzzle by using the driver specific gestures
   * Check the steps below to see what you need to do.
   */
  // Remove the `.skip` or change it to `.only` to put focus on this test
  it.skip('should be able to solve the puzzle by dragging the pieces into the puzzle with the Driver Specific Gestures', async() => {
    // Each element that needs to be dragged and each element that is the corresponding
    // drop area has it's own locator (use Appium Desktop to inspect it).
    // Both Android and iOS have Accessibility Labels, they can be found by prefixing them with a `~`.
    // Below you will find an array of each matching drag/drop element as an object that will hold the
    // corresponding selector
    const piecesSelectors = [
      {dragElement: '~drag-l1', dropArea: '~drop-l1'},
      {dragElement: '~drag-c1', dropArea: '~drop-c1'},
      {dragElement: '~drag-r1', dropArea: '~drop-r1'},
      {dragElement: '~drag-l2', dropArea: '~drop-l2'},
      {dragElement: '~drag-c2', dropArea: '~drop-c2'},
      {dragElement: '~drag-r2', dropArea: '~drop-r2'},
      {dragElement: '~drag-l3', dropArea: '~drop-l3'},
      {dragElement: '~drag-c3', dropArea: '~drop-c3'},
      {dragElement: '~drag-r3', dropArea: '~drop-r3'},
    ];

    // Loop over each matching drag/drop element selector
    for(const pieceSelector of piecesSelectors){
      /**
       * Use the `driver.execute` methods from WebdriverIO,
       * see also https://webdriver.io/docs/api/browser/execute/#usage
       *
       * TIP 1:
       * When we are in this loop you can use the matching draggable element with this code
       * `await await $(pieceSelector.dragElement)` and `await $(pieceSelector.dropArea)`
       *
       * TIP 2:
       * You don't need to provide coordinates in the `pointerMove` or `pointerDown`,
       * you can reference to the element by using the `origin` options,
       * see https://github.com/jlipps/simple-wd-spec#perform-actions for more info.
       */

      /**
       * Determine the drop area X and Y coordinate
       */
      const dropAreaRect = 'get-the-element-rectangles';
      const dropAreaX = 'determine-x-coordinate';
      const dropAreaY = 'determine-y-coordinate';

      if(driver.isAndroid) {
        /**
         * Check http://appium.io/docs/en/writing-running-appium/android/android-mobile-gestures/
         * for the `mobile: dragGesture` methods and it's options
         */
        await driver.execute('mobile: dragGesture',{
          // add the options
        });
      } else {
        /**
         * Check https://github.com/appium/appium-xcuitest-driver#mobile-dragfromtoforduration
         */

        /**
         * The `element` doesn't have real value here, so we need to calculate the drag element
         * X and Y coordinates
         */
        const dragElementRect = 'get-the-element-rectangles\'';
        const dragElementX = 'determine-x-coordinate';
        const dragElementY = 'determine-y-coordinate';

        await driver.execute('mobile: dragFromToForDuration',{
          // add the options
        });
      }
    }

    // Wait for the retry button to be visible, meaning the success screen is there
    // There is no expectation here because the waitForDisplayed will fail if the element is not visible
    await $('~button-Retry').waitForDisplayed();

    // Retry
    await $('~button-Retry').click();
    // Wait for the renew button to be visible, meaning the puzzle is shown again
    // There is no expectation here because the waitForDisplayed will fail if the element is not visible
    await $('~renew').waitForDisplayed();
  });
});
