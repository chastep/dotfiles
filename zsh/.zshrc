# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.config/oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="dracula"

# Set list of themes to load
# Setting this variable when ZSH_THEME=random
# cause zsh load theme from this variable instead of
# looking in ~/.oh-my-zsh/themes/
# An empty array have no effect
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
  git
  sublime
  ruby
  rails
  bundler
  docker
)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='st'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases

# ZSH Config aliases
alias zshconfig="subl ~/.zshrc"
alias ohmyzsh="subl ~/.oh-my-zsh"

# ZSH aliases
alias hellothere="~/.oh-my-zsh/custom/hellothere.zsh"

# Docker aliases
alias dc="docker-compose"
alias ds="docker-sync"
alias dcrun="docker-compose run --rm"
alias dcwebc="dcrun web rails c"
alias dcbash="dcrun web bash"
alias dps="docker ps"
alias da="docker attach"
alias docker-scorch="dc stop && dc rm -f && ds stop && ds clean && dc build && ds start -f"
alias docker-old-file="dcrun web bundle exec rake db:restore:file["tmp/database/$(ls -tR ./tmp/database | head -n1)"] && dcrun web bundle exec rake db:migrate && dc up"
alias docker-restore="dc stop && dc rm -f && ds stop && ds clean && dc build && ds start && docker-old-file"
alias docker-new-sync="dc stop && dc rm -f && ds stop && ds clean && dc build && ds start && dcrun web bundle exec rake db:restore:s3[staging] && dcrun web bundle exec rake db:migrate && dc up"
alias docker-new-npm="ds stop && ds clean && dc down && dcrun web npm install && docker-mig-sync"
alias docker-new-file="dcrun web bundle exec rake db:restore:s3[staging] && dcrun web bundle exec rake db:migrate && dc up"
alias docker-test-reload="dcrun -e RAILS_ENV=test web bundle exec rake db:reload"

# Git aliases
alias gdevp-rb="gco dev && git pull && gco - && git rebase -i dev"
alias gamend="git commit --amend --no-edit"

# Postgres aliases
alias opsql='PGPASSWORD=opternative psql -h localhost -U opternative opternative_development'

# Google shortcut
alias sync="open -na 'Google Chrome' --args --new-window --incognito 'http://localhost:5000/sync'"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# trying to copy the above for nvm but for pgvm
# export PGVM_DIR="$HOME/.pgvm"
# [ -s "$NVM_DIR/pgvm_env" ] && \. "$NVM_DIR/pgvm_env"  # This loads pgvm
# source /Users/chasestephens/.pgvm/pgvm_env

eval "$(rbenv init -)"

# timestamp
# https://superuser.com/questions/943844/add-timestamp-to-oh-my-zsh-robbyrussell-theme
# RPROMPT="%{$fg_bold[green]%}[%W %*]"
RPROMPT="[%W %*]"

# shortcuts for OSX keyboard shortcuts
# https://stackoverflow.com/questions/12382499/looking-for-altleftarrowkey-solution-in-zsh
