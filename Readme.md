# Solid-start

## How to notice the 'bug'

### Old version

1- Build the old version in production mode\
2- Start it\
3- Open the home page, then click login\
4- Press history back, then history forward\
5- Repeat and notice everything is normal


### New version

1- Build the new version in production mode\
2- Start it\
3- Open the home page, then click login\
4- Press history back, then history forward\
5- Repeat and notice the content shift, and the page loading without css for a split second\

## How to see it better

1- Open the devtools\
2- Go to the network tab\
3- Check 'Disable cache' checkbox and set 'Fast 3G' preset\
4- Repeat the steps above, navigating back and forward\
5- The difference should be obvious\
