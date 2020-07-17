# How to write a commit message

-   Subject line less than or equal to 72 characters in length
-   Body line length limited to 80 characters
-   Use sentence case for commit subject line with no period
-   Use present tense imperative for the subject line and
    present tense for body text
-   Use the footer to reference related issues

# Example commit message

```
Add end-to-end test to shopping cart page

This adds several tests to the shopping cart page to catch potential regressions
introduced to the payment flow by the addition of new features.

The following functionality is tested:
- Adding multiple items to the cart
- Removing items from the cart
- Adding discount code to the cart
- Sending the user to payment details page when pressing the payment button

Issue #123
```

# Using VSCode to write commit messages

To set vscode for commit message
`git config --global core.editor "code --wait"`

To set these rulers, just add the following to the VSCode global settings.json file:

```
"[git-commit]": {
  "editor.rulers": [72, 80]
}
```

# Resources

-   [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
-   [commitlint] https://commitlint.js.org/#/
