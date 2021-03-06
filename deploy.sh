rm -rf deploy/browser
mkdir deploy/browser
ionic build browser --prod
cp -rf deploy/lab deploy/browser/
cp -rf platforms/browser/www/*  deploy/browser/
sed -i -e "/REDIRECT_SCRIPT/r deploy/redirect.txt" deploy/browser/index.html
cd deploy/browser
git init
git add . 
git commit -m "auto deploy" 
git branch gh-pages 
git checkout gh-pages 
git remote add origin https://github.com/scrpgil/figlet-ionic.git
git push -f origin gh-pages
