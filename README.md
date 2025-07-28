
# This repo is FUCKING SHIT DON'T USE IT

если вы рандомно нашли этот репозиторий, сразу скажу, оно вам не надо
if you accidentally found this repository, I will tell you right away: you don’t need it

## En
in short, this program packs the site 192.168.1.33:1005 into electron
well, like I need this so that aonsoku would be a separate application, but I'm too lazy to install the default application, so I just wrote this project

## Ru
короче говоря, эта программа упаковывает сайт 192.168.1.33:1005 в электрон
ну типо мне это надо что-бы aonsoku был отдельным приложением, но ставить дефольтное приложение мне лень, поэтому я просто написал этот проект


to install it you need nodejs and npm
чтобы установить это нужны nodejs и npm

# Building

## Ru

чтобы забилдить программу для какой нибудь специфической платформы (не арч линупс) отредачьте package.json и напишите в графе build (показано на скрине ниже), вместо pacman пишите свою платформу (типо AppImage и т.д)
<img width="375" height="355" alt="image" src="https://github.com/user-attachments/assets/524a5352-90aa-4118-a79d-f4fde5785f75" />

комманда для сборки
```
npm run dist
```
и там потом после билда вроде в ./build появится .tar.gz файлик который можно поставить через pacman -U

## En
To build a program for a specific platform (not Arch Linux), edit package.json and write in the build column (shown on the screen below), instead of pacman, write your platform (like AppImage, etc.)
<img width="375" height="355" alt="image" src="https://github.com/user-attachments/assets/524a5352-90aa-4118-a79d-f4fde5785f75" />

build command:
```
npm run dist
```
and then after the build, a .tar.gz file will appear in ./build, which can be installed via pacman -U
