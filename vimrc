call pathogen#infect()

"" For displaying filename
set modeline
set ls=2

""For displaying line numbers on bottom
set ruler

set nocompatible                " choose no compatibility with legacy vi
syntax enable
set encoding=utf-8
set showcmd                     " display incomplete commands
filetype plugin on              " load file type plugins
filetype indent off             " disable auto indent

"" Colorscheme
set background=dark
colorscheme desert

"" Whitespace
set nowrap                      " don't wrap lines
set tabstop=4 shiftwidth=4      " a tab is 4 spaces 
set expandtab                   " use spaces, not tabs 
set backspace=indent,eol,start  " backspace through everything in insert mode

"" Searching
set hlsearch                    " highlight matches
set incsearch                   " incremental searching
set ignorecase                  " searches are case insensitive...
set smartcase                   " ... unless they contain at least one capital letter

"" Command maps
:command NT NERDTree
:command W w

"" Scrolling
set scrolloff=8
set sidescrolloff=15
set sidescroll=1

"" Turn off swap files
set noswapfile
set nobackup
set nowb

""Remap change window keys
map <C-J> <C-W>j<C-W>_
map <C-K> <C-W>k<C-W>_
map <C-H> <C-W>h<C-W>_
map <C-L> <C-W>l<C-W>_
