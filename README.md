## Seneca Test Task

See the completed component [here]().

## Installation instructions
```
git clone
npm i
npm run dev
```
Open browser at [localhost:...]

## Assumptions and Limitations

## Questions
- How do the colors work? Should it go through the gradient based on % of the answers?

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
