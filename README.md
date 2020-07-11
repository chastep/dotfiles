# Chase's Dotfiles
These are my dotfiles. There are many like it, but these are mine

### Setting up your Mac

1. Update macOS to the latest version with the App Store
2. Install Xcode from the App Store, open it and accept the license agreement
3. Install macOS Command Line Tools by running `xcode-select --install`
4. [Generate a new public and private SSH key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and add them to Github
5. Clone this repo to `~/.dotfiles`
6. Run `install.sh` to start the installation

## TODO
- [set key repeat rate on install](https://apple.stackexchange.com/questions/10467/how-to-increase-keyboard-key-repeat-rate-on-os-x)
- make sure all global gems/node modules are installed during install if not present (bundler, rbenv, stow, git, etc.)
- make sure permissions are setup correctly for all gems/rbenv/ruby versions as well -> https://github.com/rbenv/rbenv/issues/938
- configure mackup