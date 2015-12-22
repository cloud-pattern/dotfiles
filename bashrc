###   WELCOME

echo -ne "Eyo $USER, it's "; date


###   PROMPT

export PS1="\n| \w (\u)@\h \n| => "
export PS2="| => "


###   ALIAS

alias ls="ls -G"

alias ll='ls -FGlAhp'

alias less='less -FSRXc'

alias txls='tmux ls'

alias path='echo -e ${PATH//:/\\n}'
