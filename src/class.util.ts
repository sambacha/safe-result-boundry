SafeResult.Util = class {
  /**
   * @class SafeResult.Util
   *  
   * Fakes an event loop. 
   * 
   * Each tick processes some number of instantaneous operations
   *  and advances the simulated clock forward by 1 second. 
   * 
   * Calls  onTick just before each tick if it's specified.
   *
   * @param {number} duration The number of seconds of simulated time.
   * @param {function(number)=} onTick
   */
  static async fakeEventLoop(duration, onTick) {
    // Run this synchronously:
    for (let time = 0; time < duration; time++) {
      // We shouldn't need more than 6 rounds.
      for (let i = 0; i < 6; i++) {
        jasmine.clock().tick(0);
        await Promise.resolve();  // eslint-disable-line no-await-in-loop
      }

      if (onTick) {
        await onTick(time);  // eslint-disable-line no-await-in-loop
      }
      jasmine.clock().tick(1000);
      // eslint-disable-next-line no-await-in-loop
      await Promise.resolve();
    }
  }

  /**
   * Returns a Promise which is resolved after the given delay.
   *
   * @param {number} seconds The delay in seconds.
   * @param {function(function(), number)=} realSetTimeout
   * @return {!Promise}
   */
  static delay(seconds, realSetTimeout) {
    return new Promise(((resolve, reject) => {
      const timeout = realSetTimeout || setTimeout;
      timeout(() => {
        resolve();
      }, seconds * 1000.0);
    }));
  }


  /**
   * Fetches the resource at the given URI.
   *
   * @param {string} uri
   * @return {!Promise.<!ArrayBuffer>}
   */
  static fetch(uri) {
    return new Promise(((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', uri, /* asynchronous= */ true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = (event) => {
        if (xhr.status >= 200 &&
            xhr.status <= 299 &&
            !!xhr.response) {
          resolve(/** @type {!ArrayBuffer} */(xhr.response));
        } else {
          let message = '';
          if (xhr.response) {
            message = ': ' + shaka.util.StringUtils.fromUTF8(
                /** @type {!ArrayBuffer} */(xhr.response));
          }
          reject(xhr.status + message);
        }
      };

      xhr.onerror = (event) => {
        reject('shaka.test.Util.fetch failed: ' + uri);
      };

      xhr.send(/* body= */ null);
    }));
  }
}