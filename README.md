# Install

1) git clone
2) npm install
3) install hugo

# Run

1) gulp
2) hugo serve

# New Post

1) hugo new post/[post name].md


# Deploy

1) gulp build
2) Manually fix public/index.html (add <h1>bradorego.com</h1><hr class=small><h3 class=subheading>Musings about UX, product design, user research, dance, ultimate, curling, and beer pancakes.</h3> to <div class="post-heading"></div>) because I'm too lazy to figure out what's wrong.
3) FTP to bradorego_bradorego@ssh.phx.nearlyfreespeech.net
4) Upload the /public/ directory to the /public/ directory on remote
