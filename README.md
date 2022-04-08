## Seneca Test Task
This is the test code assignment for Seneca - a responsive Toggle component:

![](https://github.com/lumenwrites/seneca/blob/main/assets/toggles-screenshot.png)

Try out the completed app here:

https://seneca.vercel.app/

## Assumptions and Limitations
- See the `data/questions.json` folder for the list of questions, and the format data should be in.
- The component is reusable and extendable to any number of questions, with any number of toggles, with 2, 3, or more options.
- The component is responsive. When you're resizing the browser window to check for responsiveness, you need to refresh the page (it will never be an issue for the end user, but it is required for the questions to display correctly).
- The questions can take on 3 background colors - incorrect, partially correct, and completely correct, matching the gradients I see in the figma file. If you were looking for a different solution - let me know.

## Installation instructions
```
git clone
npm i
npm run dev
```
Open browser at http://localhost:3000/

## Assumptions and Limitations

## Questions
- How do the colors work? Should it go through the gradient based on % of the answers?
- Which one is active, and which one is not active?

### Requirements:
- Some form of type checking should be used e.g. flow, propTypes, typescript
- The component should be responsive down to 320px
- The solution should lock once the correct answer is reached so the toggles can no longer be switched
- The toggles should animate between the two states (see attached video)
- The background color should change in proportion to how "correct" the answer is (see video attached)
- The component should be reusable & extendable, it should be able to accomodate the question changing from that in the video to e.g:

Q. "What are the ideal conditions inside an office?"
A. (good pay, bad pay) (lot of meetings, less meetings), (free coffee, expensive coffee), (bear in office, dog in office).

Extension:

- The order of the questions & answer positions should be randomised
- You solution should be able to accomodate answers with both two and three toggle positions in the answers. For example:
  Q. "Which are the best sports people & teams?"
  A. (Liverpool, Chelsea, Man Utd), (Serena Williams, Naomi Osaka)
- You should make it easy to switch between the active question
