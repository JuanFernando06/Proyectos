import random
import time
import os

print("Juego: ¿Qué dado salió en la posición?")

# Siempre se lanzan 6 dados
intentos = 6
dados = []

print("\nLanzando los 6 dados...\n")
time.sleep(1)

# Generar los 6 números aleatorios
contador=1
for _ in range(intentos):
    numero = random.randint(1, 6)
    dados.append(numero)
    print(f"{contador}: - Ha salido:", numero)
    time.sleep(1.5)  # Espera 1 segundo para que el jugador lo vea
    os.system('cls' if os.name == 'nt' else 'clear')  # Limpia la pantalla en funcion del sistema operativo
    contador+=1

# Elegir una posición aleatoria entre 1 y 6
posicion = random.randint(1, intentos)

print("\nAhora tendrás que recordar...")
respuesta = input(f"¿Qué número salió en la posición {posicion}? ")

# Validar respuesta
while not respuesta.isdigit():
    respuesta = input("Escribe un número válido: ")

respuesta = int(respuesta)
correcto = dados[posicion - 1]

if respuesta == correcto:
    print("¡Correcto! En esa posición salió:", correcto)
else:
    print("Incorrecto.")
    print("En esa posición salió:", correcto)
