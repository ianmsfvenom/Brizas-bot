const termux = termux => {
return `Comandos básicos para usar en termux o cualquier terminal que simule linux

cd = abrir directorios (carpetas)
ejemplo = cd / sdcard /

ls = lista de archivos y directorios actuales

mv = mover archivo o directorio a otra ubicación
ejemplo = mv test.sh (archivo) $ HOME
Nota: el comando $ HOME es la carpeta de inicio de termux (donde comienza)

cp = copiar archivos y directorio a otra ubicación
ejemplo = cp -r test (directorio) $ HOME
Nota: se utilizó -r después de cp es un argumento para mover el directorio con su contenido a otra ubicación

qué son los argumentos = los argumentos son opciones que usa en la terminal para poder ejecutar el comando de una manera diferente

rm = eliminar archivos y directorios
ejemplo = rm -r -f test (directorio)
Obs = Lo mismo que el comando cp, pero -f se usa si el archivo o directorio tiene dificultades para eliminarse, -f fuerza su eliminación`
}

exports.termux = termux
