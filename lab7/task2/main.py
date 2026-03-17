from models import Vehicle, Car, Motorcycle

def main():
    vehicle1 = Vehicle("Toyota", "Corolla", 2020)
    car1 = Car("BMW", "M5", 2022, 4)
    motorcycle1 = Motorcycle("Yamaha", "R1", 2021, 1000)

    vehicles = [vehicle1, car1, motorcycle1]

    for vehicle in vehicles:
        print(vehicle)
        print(vehicle.start_engine())
        print(vehicle.move())
        if isinstance(vehicle, Car):
            print(vehicle.honk())
        if isinstance(vehicle, Motorcycle):
            print(vehicle.wheelie())
        print()


if __name__ == "__main__":
    main()