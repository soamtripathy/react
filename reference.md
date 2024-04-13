# Virtual DOM, Fibre and Reconcilation

[Link for Reference](https://github.com/acdlite/react-fiber-architecture) 

### Summarization 

React Fiber is a reimplementation of React's core reconciliation algorithm, the process through which React updates the DOM.

Here's a brief summary of the main points:

1. Incremental Rendering: Fiber's main goal is to enable incremental rendering - the ability to split rendering work into chunks and spread it out over multiple frames.

2. Ability to Pause, Abort, or Reuse Work as Needed: Fiber's architecture allows React to pause work in progress, abort it, or reuse it as needed, which is not possible in the current (as of when the document was written) reconciliation algorithm.

3. Control Over Priority: Different types of updates have different priorities — for example, an animation update has a higher priority than an offscreen update. Fiber allows React to control the priority of different types of updates to help ensure that high-priority updates don't get blocked by low-priority updates.

4. Improved Layout and Paint Measurements: Fiber allows React to use a "double buffering" technique where React can start work on a hidden offscreen tree and switch it with the current onscreen tree when the work is complete. This can lead to more consistent frame rates by avoiding layout thrashing.

5. New Features: Fiber's architecture makes it easier to add new features like returning multiple elements from render, fragments, error boundaries, portals, and more.


