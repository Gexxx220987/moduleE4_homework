class Device {
    constructor(amper, volt){
        this.color = 'красный',
        this.amper = amper ,
        this.volt = volt

    }

    deviceStatus = function (condition, device) {
            if (condition) {
                console.log(`${device} сколько кушает = ${this.amper * this.volt} вольт`)
            } else {
                console.log(`${device} отключен (-а)`)
            }

        }
}


class Samsung extends Device{
    constructor(platform, amper, volt) {
        super(volt,amper),
        this.tv_platform = platform
    }
}
const samsung = new Samsung('UE8600',3,220)
console.log(samsung)
samsung.deviceStatus(true, 'Телевизор')


class Battery extends Device{
    constructor(section, amper, volt) {
        super(volt,amper),
            this.battery_section = section
    }
}
const battery = new Battery('7 секций',4,220)
console.log(battery)
battery.deviceStatus(true, 'Аккумулятор')