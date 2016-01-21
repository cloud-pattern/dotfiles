set nocompatible

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
set tabstop=2 shiftwidth=2      " a tab is 4 spaces 
set expandtab                   " use spaces, not tabs 
set backspace=indent,eol,start  " backspace through everything in insert mode

"" Searching
set hlsearch                    " highlight matches
set incsearch                   " incremental searching
set ignorecase                  " searches are case insensitive...
set smartcase                   " ... unless they contain at least one capital letter

"" Copying
set clipboard=unnamed

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

""Disabling auto-comments
inoremap <expr> <enter> getline('.') =~ '^\s*//' ? '<enter><esc>S' : '<enter>'
nnoremap <expr> O getline('.') =~ '^\s*//' ? 'O<esc>S' : 'O'
nnoremap <expr> o getline('.') =~ '^\s*//' ? 'o<esc>S' : 'o'

""Plugin config
let NERDTreeQuitOnOpen = 1

