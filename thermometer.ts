//%weight=100  color=#00A654  block="Thermometer"
namespace DFRobot_Thermometer_Sensor{
    let i2cAddr=0x5A
    //%block="getobjecttemp_C"
    export function GetObjectTemp_C():number {
        pins.i2cWriteNumber(i2cAddr, 0x07, NumberFormat.Int8LE)
        let temp=pins.i2cReadNumber(i2cAddr, NumberFormat.Int16LE)
        temp|=temp <<8
        temp=temp*0.02-273.15
        serial.writeNumber(temp)
        return 0
    }
}