call pathogen#infect()

"" For displaying filename
set modeline
set ls=2

""For displaying line numbers on bottom
set ruler
syntax enable
set encoding=utf-8

set nocompatible                " choose no compatibility with legacy vi
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

"" Scrolling
set scrolloff=8
set sidescrolloff=15
set sidescroll=1

"" Turn off swap files
set noswapfile
set nobackup
set nowb

"" Command maps
:command NT NERDTree
:command W w
noremap <C-n> :NERDTree<CR>

""Remap change window/tab
noremap <C-j> <C-W><C-W>
noremap <C-k> :<C-U>tabnext<CR>


""Plugin config
let NERDTreeQuitOnOpen = 1

