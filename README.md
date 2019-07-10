# dotfiles
These are my dotfiles. There are many like it, but these are mine

First, clone this repo to `~/dotfiles`.

Next, install [GNU Stow](https://www.gnu.org/software/stow/).

On Mac:

```shell
$ brew install stow
```

On Ubuntu:

```shell
$ sudo apt install stow
```

Then run the install script:

```shell
$ ./install
```

## TODO
- install zsh/[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) if not present during `./install` command
- [set key repeat rate on install](https://apple.stackexchange.com/questions/10467/how-to-increase-keyboard-key-repeat-rate-on-os-x)
- make sure all global gems/node modules are installed during install if not present (bundler, rbenv, stow, git, etc.)
- make sure permissions are setup correctly for all gems/rbenv/ruby versions as well -> https://github.com/rbenv/rbenv/issues/938
- [install postgres on mac with homebrew](https://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/)
