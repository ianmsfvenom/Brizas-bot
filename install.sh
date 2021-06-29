#!bin/bash

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

Voy a instalar las dependencias esenciales para que funcione el bot ¿solo estás de acuerdo con los programas que voy a instalar blz? [s / n] "
leer inp
if [ "$inp" = "s" ]; then
    pkg update
    pkg upgrade
    pkg install ruby
    gem install lolcat
    pkg install nodejs 
    pkg install libwebp 
    pkg install ffmpeg 
    pkg install wget 
    pkg install tesseract 
    pkg install graphicsmagick 
    pkg install imagemagick 
    npm install
    npm install pm2 -g
    echo $GREEN"Hmmm está bien, puedes iniciar npm, escanear el código y divertirte con el bot :) "
fi
if [ "$inp" = "n" ]; then
    echo $RED"Jae entonces, diviértete tratando de descubrir las dependencias tú mismo y manualmente :)"
    Salida
fi

