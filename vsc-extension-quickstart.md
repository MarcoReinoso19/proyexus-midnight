# Welcome to your VS Code Extension

## What's in the folder

* This folder contains all of the files necessary for your color theme extension.
* `package.json` - this is the manifest file that defines the location of the theme file and specifies the base theme of the theme.
* `themes/Proyexus Midnight-color-theme.json` - the color theme definition file.

## Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Open `File > Preferences > Color Themes` and pick your color theme.
* Open a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Developer: Inspect Editor Tokens and Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).


## Make changes

* Changes to the theme file are automatically applied to the Extension Development Host window.

## Adopt your theme to Visual Studio Code

* The token colorization is done based on standard TextMate themes. Colors are matched against one or more scopes.

To learn more about scopes and how they're used, check out the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation.

## Install your extension

* To start using your extension with Visual Studio Code copy it into the `<user home>/.vscode/extensions` folder and restart Code.
* To share your extension with the world, read on https://code.visualstudio.com/docs about publishing an extension.

## Recommendations

* Use power toys color picker by Microsoft
* Use samples files for different programming languages provided by Dracula theme
```Git
git clone https://github.com/dracula/template.git
```

## Deployment

* Install Visual Studio Code Extensions
```Powershell
npm install -g @vscode/vsce
```

* Create package
```Powershell
vsce package
# proyexus-midnight-0.0.0.vsix generated
```

* Publish extension
```Powershell
vsce publish
# <publisher id>.proyexus-midnight published to VS Code Marketplace
```

### Deployment requirements
* Personal Access token, obtained in [Azure DevOps](https://dev.azure.com/Proyexus), this token has an expiration date, so it must to be recreated.
