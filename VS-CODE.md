1.  Emmet Abbreviations: 

These useful shortcuts come built-in to VS Code, and they make writing HTML (and CSS) a lot faster.
-> specifies that the next tag should be a child of the previous one.
-> specifies that the text that follows is a class name.
-> is used to print a unique number (counting up from 1 ).
-> Finally, * allows you to quickly multiply a tag, to produce as many as you want.

2. The Integrated CLI (Command Line Interface): 

To save switching between windows, VS Code offers an integrated terminal or CLI. Simply, press CNTRL + ' or CMD + ' to open it up, and the same command to close it. It will automatically open in the directory you have open in VS Code, which saves the navigation step required for operations in a standard terminal.

3. ESLint

ESLint is a powerful and popular linting tool, which helps you spot errors in your code and fix them as you write and which helps you follow common best-practices. It’s also a great learning tool, since researching ESLint errors has taught me many best practices I didn’t know before, and it’s helped me understand why they are best practices.
You can add it as a node package on a per-project basis or you can use the ESLint extension within VS Code. The second option is quick and easy, and it won’t stop you using unique ESLint configurations for particular projects later on. Simply find the ESLint plugin (the one by Dirk Baeumer) and install it.

4. Prettier

Prettier is an opinionated code-formatter. It prescribes a certain formatting style as the correct one, but its popularity is making its rules something of an established standard for JavaScript, CSS, and increasing numbers of other languages.
There is overlap between Prettier and ESLint, but ultimately ESLint is more focused on spotting errors and Prettier is more focused on correcting formatting. They work great together, and there’s an integration to help make this as smooth as possible.

5. Multi-Cursor Shortcuts:

The ability to edit with multiple cursors can be a huge time saver. To use this most effectively requires memorisation of a handful of commands, but they’ll soon become second nature.

6. Text Wrap:

There aren’t many cases where I’d prefer my text to run off the screen, forcing me to use the dreaded horizontal scroll. To toggle wrapping on or off on a per-file basis, simply press ALT + Z .
Or, if you’re like me and almost never want to turn text-wrapping off, you can make it the default. Inside settings.json, simply paste in the following code, and your text will wrap by default.



8 Plugin of VS-Code

GitLens - GitLens simply helps you better understand code. Quickly glimpse into who changed a line or code block, why, and when. Jump back through history to gain further insights into how and why the code evolved. Effortlessly explore the history and evolution of a code base. It is powerful, feature-rich, and highly customizable to meet your needs.

Live Share- At the moment, when doing pair programming, the regular practice is to share the screen via Zoom or any other provider. If you have tried that, you know its flaws. There’s a lot of room for improvement. This plugin aims to fill this gap.

VS Code Remote Development - This extension provides seamless development in containers remotely on physical or virtual machines. You don’t need to run anything on the server. Just SSH to the machine using this extension.

 Peacock -  This extension will help you customize each project so you can have some visual feedback on what you are currently working on.

Bracket Pair Colorizer 2 - This is a very simple yet very useful extension. It allows matching brackets to be identified with colors. The user can define which characters to match and which colors to use.

Color Highlight - Another simple yet useful tool. It will simply highlight CSS/web colors found in your document

ESLint - A plugin that integrates ESLint into VS Code. You will need to have ESLint installed for it to work and provide an .eslintrc configuration file.
It has a lot of configuration options that are worth checking out.

Prettier - An extension to support Prettier, which is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style. 