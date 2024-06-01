# Shortify

Shortify is a simple Chrome extension that allows you to shorten URLs using the Bitly URL shortening service.

## Installation

To use Shortify, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/eshwarkyatham16/Shortify.git
```

2. Open Google Chrome and go to chrome://extensions/.

3. Enable "Developer mode" in the top right corner.

4. Click on "Load unpacked" and select the Shortify directory from your local machine.

5. The Shortify extension should now be installed and ready to use.


## Usage

To shorten a URL using Shortify:

1. Click on the Shortify extension icon in the Chrome toolbar.

2. Enter the URL you want to shorten in the input field.

3. Click the "Shorten" button.

4. The shortened URL will be displayed below. Click on the shortened URL to open the URL.


## Development

1. If you want to contribute to Shortify or customize it to your needs, follow these steps:

2. Clone the repository to your local machine as described in the Installation section.

3. Open the ```popup.js``` file in your preferred code editor.

4. Obtain a Bitly access token by signing up for a Bitly account and generating an API key.

5. Replace the ```ACCESS_TOKEN``` placeholder in the ```popup.js``` file with your Bitly access token.

6. Make any desired changes to the code.

7. Test your changes locally by loading the modified extension in Chrome.

8. Submit a pull request with your changes.


## Obtaining Bitly Access Token

To obtain a Bitly access token:

1. Sign up for a Bitly account at https://bitly.com/a/sign_up.

2. After signing up, navigate to your Bitly account settings.

3. Go to the "API Support" section.

4. Generate an access token under the "Generic Access Token" section.

5. Copy the generated access token.

6. Replace the ```ACCESS_TOKEN``` placeholder in the ```popup.js``` file with your Bitly access token.




![image](https://github.com/eshwarkyatham16/Shortify/assets/157932752/b724df59-e803-443c-bc2a-d72af7a07c62)


![image](https://github.com/eshwarkyatham16/Shortify/assets/157932752/ecf279f1-37bc-49b2-b7a3-b6959c2c488e)
