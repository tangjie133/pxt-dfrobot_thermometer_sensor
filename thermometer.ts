//%weight=100  color=#00A654  block="Thermometer"
namespace DFRobot_Thermometer_Sensor{
    let i2cAddr=0x5A
    //%block="getobjecttemp_C"
    export function GetObjectTemp_C():number {
        let temp
        temp=i2cReadRegister()*0.02-273.15
        return 0
    }
    function  i2cReadRegister():number {
        pins.i2cWriteNumber(i2cAddr, 0x07, NumberFormat.Int8LE)
        let result = pins.i2cReadNumber(i2cAddr, NumberFormat.Int8LE)
          serial.writeNumber(result)
        //result |= result << 8
        return 0
    }
}